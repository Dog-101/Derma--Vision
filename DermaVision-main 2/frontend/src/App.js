import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import titleImage from './titleImage.png';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import ResultsComponent from './ResultsComponent';

function App() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
        alert("Please upload an image before submitting.");
        return; 
    }
    setLoading(true); 
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://127.0.0.1:5000/predict/', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setPrediction(data);
    setLoading(false);
  };

  const resetForm = () => {
    setFile(null);
    setPrediction(null);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={titleImage} alt="Title" style={{ marginRight: '10px', height: '80px' }} />
            <h1 className="App-title" style={{ fontSize: '2.5em' }}>DermaVision</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              loading ? 
              <p>Loading...</p> : // Show loading message
              prediction ? 
              <ResultsComponent prediction={prediction} resetForm={resetForm} /> : 
              <Home 
                file={file} 
                setFile={setFile} 
                handleSubmit={handleSubmit} 
              />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>Developed by Sharv Save, Manish Kota, Ashank Awasthy, Ahmed Zeeshan</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
