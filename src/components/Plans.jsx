import React from 'react'
import { useState } from 'react'
import Form from './Form.jsx';



function Plans() {


    const [popupActive, setPopupActive] = useState(false);

  return (
    <>

<Form active={popupActive} setActive={setPopupActive} />


        <h2 className="services-heading">Start Your Journey Now</h2>
        <p className="text-banner">Our Plans</p>
        
        <div className="pricing-container">


        <div className="pricing-card silver">
            <h4 className="plan-title ">Starter Plan</h4>
            <div className="plan-price">
                <span className="currency">₹</span><span className="amount">3,599</span>
                <span className="duration">one-time</span>
            </div>
            <button className="choose-button" onClick={()=> setPopupActive(true)}>Enroll Now</button>
            <p className="description">
            Perfect for veterans seeking essential support to kickstart their corporate journey.
            </p>
        
            <ul className="plan-options">
                <li>Career Consultation </li>
                <li>Career Assessment </li>
                <li>Resume Building </li>
                <li>LinkedIn profile Setup & optimization</li>
            </ul>
        </div>

        <div className="pricing-card gold">
            <h4 className="plan-title gp">Grow Plan</h4>
            <div className="plan-price">
                <span className="currency">₹</span><span className="amount">5,899</span>
                <span className="duration">monthly</span>
            </div>
            <button className="choose-button" onClick={()=> setPopupActive(true)} >Enroll Now</button>
            <p className="description">
            Comprehensive support to help you scale and secure your dream job.
            </p>
    
            <ul className="plan-options">
                <li>Target <b>30-60</b> Jobs with Custom Resumes</li>
                <li><b>30</b> LinkedIn Connections & Networking Weekly</li>
                <li>Application Tracking & Follow-Ups</li>
                <li>LinkedIn, Naukri & Job Portal Management</li>
                <li><b>2</b> Interview Prep Sessions/Month</li>
                <li><b>1</b> Post Weekly for Engagement</li>
                <li>Continuous Updates on Progress</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Plans