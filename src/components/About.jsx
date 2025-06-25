import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("whoWeAre");

  const content = {
    whoWeAre: `We understand the challenges veterans face during this transition, and that’s why we offer tailor-made solutions for every stage of your journey. Think of us as your career command center, providing the expertise, connections, and support to help you thrive in your second innings.`,
    ourVision: `To become India’s go-to career buddy for veterans, helping them unlock their potential and achieve new heights in the corporate world. We dream of a future where every veteran builds a career that honors their service and skills.`,
    ourMission: `To empower Indian Veterans by being their career wingman, ensuring they navigate the corporate maze smoothly and land fulfilling careers. We aim to connect you with employers who recognize your true value as leaders.`,
  };

  return (
    
    <div className="about" id="about">
      <h1>{name}</h1>
      <p className="about-title">About Us</p>
      <h3 className="about-heading">
        At The Veteran Company, we’re not just another service provider—we’re
        your lifelong buddy in navigating the corporate world. Our mission is
        simple: to ensure that Indian veterans transition smoothly from military
        life to successful corporate careers. We salute the unique discipline,
        leadership, and skills that every veteran brings. Our services are
        designed to highlight your strengths so that top employers take notice.
        From creating power-packed, ATS-friendly resumes to managing your
        LinkedIn presence and job applications, we handle the heavy lifting
        while you stay mission-ready. Our 7-step proven process ensures you’re
        not just prepared for a job but for sustained success. With regular
        updates, coaching, and networking opportunities, we remain by your side
        long after you’ve landed your first corporate role.
      </h3>
      <div className="bar">
        <div className="bar1"></div>
        <div className="bar2"></div>
      </div>
      <div className="about-tabs">
        <button
          className={`about-tab ${
            activeTab === "whoWeAre" ? "active" : ""
          }`}
          onClick={() => setActiveTab("whoWeAre")}
        >
          Why Us ?
        </button>
        <button
          className={`about-tab ${
            activeTab === "ourVision" ? "active" : ""
          }`}
          onClick={() => setActiveTab("ourVision")}
        >
          Our Vision
        </button>
        <button
          className={`about-tab ${
            activeTab === "ourMission" ? "active" : ""
          }`}
          onClick={() => setActiveTab("ourMission")}
        >
          Our Mission
        </button>
      </div>
      <div className="about-content">{content[activeTab]}</div>
    </div>
  );
};

export default About;
