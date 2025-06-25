import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './Image-Slider.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Plans from './Plans.jsx';
import Testimonials from './Testimonials.jsx';
import Employers from './Employers.jsx';
import Footer from './Footer.jsx';
import Displaybar from './Displaybar.jsx';
import Form from './Form.jsx';
import Need from './Need.jsx';
import w from '../Images/w.png';

function Home() {
  const [popupActive, setPopupActive] = useState(false);

  return (
    <>
      <Form active={popupActive} setActive={setPopupActive}/>

      <div className="home">
        <div className="text-portion">
          <p>Your one-stop career solution</p>
          <h1 className="headline">
            Simplifying Corporate Job Search for Veterans (Ex-Serviceman)
          </h1>
          <div className="bar">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
          <h3>
            We handle every step of your transition from military service to a corporate career. From career assessments with action plans and domain-specific resumes to job application and LinkedIn management, upskilling, interview prep, and more, we ensure a seamless, stress-free journey to your next career.
          </h3>
          <div className="button-container">
            <button className="btn" onClick={() => setPopupActive(true)}>
              Get Started
            </button>
            <Link
              className="btn btn-w"
              to="https://wa.me/+917042240012?text=Hi%21%20I%20am%20interested%20in%20your%20Services."
            >
              <span className="btn-content">
                <img src={w} className="w-img" alt="WhatsApp" /> WhatsApp
              </span>
            </Link>
          </div>
        </div>
        <div className="img-portion">
          <ImageSlider />
        </div>
      </div>

      <Displaybar />
      <About />
      <Need/>
      <Services />
      {/* <Plans /> */}
      <Employers />
      <Footer />
    </>
  );
}

export default Home;
