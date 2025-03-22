from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import torch
from torchvision import transforms
from PIL import Image
import numpy as np
import io

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  #TO DO: REPLACE WITH DOMAINS
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# TO DO: LOAD IN PYTORCH MODEL
model = torch.load('model.pth')
model.eval()

preprocess = transforms.Compose([
    transforms.CenterCrop((300, 225)),  # Crop the image to a 4:3 aspect ratio
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

def preprocess_image(image: Image.Image) -> torch.Tensor:
    image = preprocess(image)
    return image.unsqueeze(0)

def make_prediction(processed_image: torch.Tensor) -> dict:
    with torch.no_grad():  # Disable gradient calculation
        predictions = model(processed_image)  # Forward pass
    predicted_class = torch.argmax(predictions, dim=1).item()  # Get the predicted class
    predicted_probabilities = predictions.softmax(dim=1).tolist()[0]  # Get the probabilities for all classes
    return {
        "predicted_class": predicted_class,
        "predicted_probabilities": predicted_probabilities
    }

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data))

    processed_image = preprocess_image(image)
    prediction_result = make_prediction(processed_image)

    return JSONResponse(content=prediction_result)
