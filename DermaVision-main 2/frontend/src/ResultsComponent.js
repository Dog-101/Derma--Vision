import React from 'react';
import './ResultsComponent.css';

const ResultsComponent = ({ prediction, resetForm }) => {
  return (
    <div className="results-container">
      <h2>Prediction Results</h2>
      <p><strong>Predicted Class:</strong> {prediction.predicted_class}</p>
      <p><strong>Confidence:</strong> {prediction.confidence}</p>
      <ul>
        {prediction.predicted_probabilities.map((prob, index) => (
          <li key={index}>{prob.toFixed(2)}</li>
        ))}
      </ul>
      <button onClick={resetForm} className="reset-button">Submit Another Image</button>
    </div>
  );
};

export default ResultsComponent;
