import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // <--- Add useLocation

import Navbar from './components/Navbar';
import About from './components/About';
import LoginSignup from './components/LoginSignup';
import Predict from './components/Predict';
import Footer from './components/Footer';
import asthmaImage from './components/asthma.jpg';
import './components/Home.css';
import './App.css';
import './components/Navbar.css';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => (
  <div className="home-container">
    <h1>Welcome to Asthma Predictor</h1>
    <img src={asthmaImage} alt="Asthma Awareness" className="home-image" />
    <p>
      Asthma is a chronic respiratory condition that affects millions globally, leading to breathing difficulties,
      wheezing, and coughing. Early detection and management are essential in preventing severe asthma attacks.
      Our machine learning-based predictor helps identify individuals at risk of asthma exacerbations using
      health data such as oxygen levels, medication use, and cough intensity. This can assist healthcare
      providers in taking proactive measures for better patient care.
    </p>
    <p>
      Do You have asthma? Click the button below to find out!
    </p>

    {/* Predict Button */}
    <div className="predict-container">
      <button 
        className="predict-button"
        onClick={() => {
          alert("You have to log in first to predict if you have asthma.");
          window.location.href = "http://localhost:3000/login";
        }}
      >
        Predict
      </button>
    </div>

    {/* Additional Information Links */}
    <div className="resource-links">
      <p>Want to learn more? Check out these resources:</p>
      <a href="https://www.who.int/news-room/fact-sheets/detail/asthma" target="_blank" rel="noopener noreferrer">WHO - Asthma Facts</a>
      <a href="https://www.cdc.gov/asthma/default.htm" target="_blank" rel="noopener noreferrer">CDC - Asthma Resources</a>
      <a href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653" target="_blank" rel="noopener noreferrer">Mayo Clinic - Asthma Overview</a>
    </div>
  </div>
);



function App() {
  const location = useLocation(); // <--- Use this hook

  // Hide footer on /login route
  const hideFooterRoutes = ['/login'];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>
      </div>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;
