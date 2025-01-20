import React from 'react'
import Footer from './Footer'

function Openings() {
  return (
    <div>
      <div className="job-card">
  <div className="job-header">
    <span className="job-type">Part Time</span>
    <div className="company-logo">
      <img src="https://via.placeholder.com/50" alt="Company Logo"/>
    </div>
  </div>
  <div className="job-title">Senior/Junior Web Developer</div>
  <div className="company-name">Data Dynamics</div>
  <div className="job-location">
    <i className="fas fa-map-marker-alt"></i> New Jersey
  </div>
  <div className="job-info">
    <span className="salary"><i className="fas fa-dollar-sign"></i> 2.5k - 5k</span>
    <span className="experience"><i className="fas fa-briefcase"></i> Experience: 3 Years</span>
  </div>
  <div className="job-skills">
    <span className="skill">HTML</span>
    <span className="skill">CSS</span>
  </div>
  <button className="apply-btn">Apply Now</button>
</div>


    </div>
  )
}

export default Openings