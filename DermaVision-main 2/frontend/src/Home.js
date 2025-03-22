import React from 'react';
import FormComponent from './FormComponent';
import './FormComponent.css';
import './Home.css';

const Home = ({ file, setFile, handleSubmit, loading }) => {
  return (
    <div className="home-layout">
      <div className="welcome-message">
        <h2>Welcome to DermaVision</h2>
        <ul className="instruction-list">
          <li className="instruction-item">Please ensure that your camera has good lighting.</li>
          <li className="instruction-item">Center the camera on the affected area.</li>
          <li className="instruction-item">If possible, attempt to upload the picture in a 4:3 aspect ratio.</li>
          <li className="instruction-item">Once uploaded, please press submit and wait for the results!</li>
          <li className="instruction-item">Keep in mind that the results are not 100% accurate and are for your reference only, do not self-diagnose, and seek a professional medical opinion.</li>
        </ul>
      </div>
      <div className="form-section">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <FormComponent 
            file={file} 
            setFile={setFile} 
            handleSubmit={handleSubmit} 
          />
        )}
      </div>
    </div>
  );
};

export default Home;
