import React from 'react';
import { useDropzone } from 'react-dropzone';
import './FormComponent.css';

const FormComponent = ({ file, setFile, handleSubmit }) => {
  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>File Upload:</label>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag and drop a file here, or click to select one</p>
        </div>
      </div>
      {file && (
        <div className="image-preview">
          <img src={URL.createObjectURL(file)} alt="Preview" />
        </div>
      )}
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default FormComponent;
