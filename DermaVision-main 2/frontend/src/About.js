import "./About.css";
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Page</h2>
      <p>Let&apos;s start with some statistics: According to the WHO In 2021, about 4.5 billion people, more than half of the global population, were not fully covered by essential health services. 
        In 2022, an estimated 330 000 new cases of melanoma were diagnosed worldwide and almost 60 000 people died from the disease. Note, melanoma is one of many skin diseases that are extremely hard to identify. 
        Patients can live with it for years without noticing. That&apos;s where we, DermaVision, come in. Our AI model uses datasets of 10,000+ medical results to accurately identify the user’s medical condition. 
        It can identify potentially life threatening conditions such as  Melanoma, Dermatofibroma, Melanocytic nevus, Vascular lesions, Dermatofibroma and Basal cell carcinoma. 
        Our model empowers users in remote and economically deprived regions to detect symptoms early, encouraging them to get a professional diagnosis. 
        Early detection of skin cancers, for example, increases survival rate by over 90% according to the American Cancer Society. 
        We hope that our model aids The Cancer Early Detection Alliance&apos;s mission to promote and expand access to quality, equitable care, and early cancer detection.
      </p>
      <h3>Disease Information</h3>
      <div>
        <div className="disease-title"><strong>Actinic Keratoses and Intraepithelial Carcinoma (Bowen's Disease)</strong></div>
        <ul className="bullet-points">
          <li><strong>Description:</strong> Actinic keratoses are rough, scaly patches on the skin caused by long-term sun exposure. They are considered precancerous and can potentially progress to squamous cell carcinoma. Bowen&apos;s disease is a type of intraepithelial carcinoma, meaning it is an early form of squamous cell carcinoma confined to the outermost layer of the skin.</li>
          <li><strong>Implication:</strong> Though both conditions are early stages of skin cancer, prompt treatment can prevent progression to invasive cancer. Common treatments include topical creams, cryotherapy, or surgical removal. Bowen&apos;s disease can sometimes resemble other conditions like eczema, making proper diagnosis important.</li>
          <li><strong>Main Impact:</strong> If untreated, these conditions can evolve into more aggressive cancers, making early detection crucial.</li>
        </ul>
      </div>
      <div>
        <div className="disease-title"><strong>Basal Cell Carcinoma</strong></div>
        <ul className="bullet-points">
          <li><strong>Description:</strong> This is the most common form of skin cancer, originating from the basal cells in the epidermis. Basal cell carcinoma (BCC) typically appears as a pearly bump, red patch, or lesion that does not heal. It is often linked to long-term UV exposure.</li>
          <li><strong>Implication:</strong> While BCC rarely metastasizes (spreads to other parts of the body), it can be locally destructive, damaging surrounding tissues including nerves, muscles, and bones. It is slow-growing but can cause significant cosmetic and functional issues, particularly on the face.</li>
          <li><strong>Main Impact:</strong> BCC is highly treatable, especially when detected early. Treatment options include surgical excision, Mohs surgery (a precise tissue-sparing technique), and radiation therapy.</li>
        </ul>
      </div>
      <div>
        <div className="disease-title"><strong>Benign Keratosis-like Lesions (Solar Lentigines / Seborrheic Keratoses / Lichen-Planus-like Keratosis)</strong></div>
        <ul className="bullet-points">
          <li><strong>Description:</strong> 
              <ul>
                  <li><strong>Solar Lentigines:</strong> Also known as "age spots" or "liver spots," these are harmless brown spots that develop on sun-exposed skin, especially in older adults.</li>
                  <li><strong>Seborrheic Keratoses:</strong> Warty, stuck-on, or waxy benign skin growths that are common in older adults and can vary in color from tan to black.</li>
                  <li><strong>Lichen-Planus-like Keratosis:</strong> Rare, benign lesions that may mimic actinic keratosis or melanoma in appearance but are harmless.</li>
              </ul>
          </li>
          <li><strong>Implications:</strong> These lesions are benign and usually do not require treatment unless for cosmetic reasons or if they cause irritation. Seborrheic keratoses, in particular, can sometimes be mistaken for skin cancer, necessitating proper diagnosis.</li>
          <li><strong>Main Impact:</strong> They generally do not have health risks, but their appearance can sometimes cause concern or be cosmetically undesirable.</li>
        </ul>
      </div>
      <div>
        <div className="disease-title"><strong>Dermatofibroma</strong></div>
        <ul className="bullet-points">
          <li><strong>Description:</strong> Dermatofibromas are common, benign skin nodules often caused by minor trauma such as an insect bite. They feel firm to the touch and are typically brownish or reddish in color.</li>
          <li><strong>Implications:</strong> They are harmless and do not usually require treatment unless they cause discomfort. In rare cases, they can be confused with other skin conditions like melanoma, but a dermatologist can typically diagnose them based on appearance and feel.</li>
          <li><strong>Main Impact:</strong> Dermatofibromas are benign and pose no serious health risks. However, they can be removed for cosmetic reasons or if they become symptomatic.</li>
        </ul>
      </div>
      <div>
        <div className="disease-title"><strong>Melanoma</strong></div>
        <ul className="bullet-points">
          <li><strong>Description:</strong> Melanoma is a serious form of skin cancer that begins in the melanocytes, the cells responsible for producing pigment (melanin). It often develops from an existing mole or as a new pigmented lesion and can appear as asymmetrical, irregularly bordered, unevenly colored patches.</li>
          <li><strong>Implication:</strong> Unlike basal cell carcinoma and squamous cell carcinoma, melanoma is highly aggressive and can spread (metastasize) to other organs, making it life-threatening if not caught early. Early-stage melanomas are treatable through surgical excision, but advanced melanomas may require chemotherapy, immunotherapy, or targeted treatments.</li>
          <li><strong>Main Impact:</strong> Melanoma&apos;s aggressive nature makes early detection and removal critical for survival. Routine skin checks are important for high-risk individuals.</li>
        </ul>
      </div>
      <div>
        <div className="disease-title"><strong>Melanocytic Nevus (Mole)</strong></div>
        <ul className="bullet-points">
          <li><strong>Description:</strong> A melanocytic nevus, or mole, is a benign growth made up of melanocytes. Most people have between 10 and 40 moles, which can vary in size, shape, and color. They can appear anywhere on the body, either present at birth or developing over time.</li>
          <li><strong>Implication:</strong> While most moles are harmless, changes in their appearance (such as asymmetry, irregular borders, multiple colors, increasing size) can be signs of melanoma. Monitoring moles for changes is important, especially in people with a family history of skin cancer.</li>
          <li><strong>Main Impact:</strong> Benign moles pose no risk but can become precancerous. Dermatological exams are important for identifying atypical moles early.</li>
        </ul>
      </div>
      <div>
        <div className="disease-title"><strong>Vascular Lesions (Angiomas, Angiokeratomas, Pyogenic Granulomas, and Hemorrhage)</strong></div>
        <ul className="bullet-points">
          <li><strong>Description:</strong> 
              <ul>
                  <li><strong>Angiomas:</strong> Benign tumors made up of small blood vessels, appearing as red or purple spots on the skin.</li>
                  <li><strong>Angiokeratomas:</strong> Dark red to black vascular lesions that are often rough or warty.</li>
                  <li><strong>Pyogenic Granulomas:</strong> Red, raised lesions that tend to bleed easily and are often found following injury.</li>
                  <li><strong>Hemorrhage:</strong> Bleeding under the skin, often appearing as red or purplish spots, known as petechiae or purpura.</li>
              </ul>
          </li>
          <li><strong>Implication:</strong> These lesions are benign but can cause cosmetic concerns or discomfort due to their appearance or tendency to bleed. Pyogenic granulomas, in particular, may need to be removed if they cause frequent bleeding.</li>
          <li><strong>Main Impact:</strong> Although benign, these lesions can sometimes be mistaken for malignant growths. Proper diagnosis is key to managing them appropriately.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;