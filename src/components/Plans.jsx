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
                {/* <span className="currency">₹</span><span className="amount">7,499</span> */}
                {/* <span className="duration">one-time</span> */}
            </div>
            <button className="choose-button" onClick={()=> setPopupActive(true)}>Enroll Now</button>
            <p className="description">
            Perfect for veterans seeking essential support to kickstart their corporate journey.
            </p>
        
            <ul className="plan-options">
                <li>Career Consultation </li>
                <li>Career Assessment </li>
                <li>One - Specialized Resume </li>
                <li>LinkedIn profile Setup & optimization</li>
            </ul>
        </div>

        <div className="pricing-card gold">
            <h4 className="plan-title gp">Grow Plan</h4>
            <div className="plan-price">
                <span className="currency"></span><span className="amount"></span>
                <span className="duration"></span>
            </div>
            <button className="choose-button" onClick={()=> setPopupActive(true)} >Talk to Us</button>
            <p className="description">
            Comprehensive support to help you scale and secure your dream job.
            </p>
    
            <ul className="plan-options">
                <li>We apply for Jobs on your behalf</li>
                <li>We build Custom CV for each Job</li>
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