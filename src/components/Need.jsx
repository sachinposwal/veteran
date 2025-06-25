import React from 'react';
import rocket from '../Images/rocket.png'

function Need() {
  return (
    <div className="need">
      <div className="need-container">
        <p className="need-text">
        Need a<span className="need-highlight"> clear roadmap, </span>
          
          custom <span className="need-highlight">CVs for each role, </span>
          
          and <span className="need-highlight">early job applications? </span>
          
          Struggling with <span className="need-highlight">LinkedIn </span>
          
          and <span className="need-highlight">job portals? </span>
          
          Want a standout <span className="need-highlight">LinkedIn profile, corporate networks</span>
          
          , and help
          <span className="need-highlight"> acing interviews?</span>
        </p>
        <p className="need-footer"><img src={rocket}/> We Handle it All!</p>
      </div>
    </div>
  );
}

export default Need;
