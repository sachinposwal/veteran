import React from 'react'
import img1 from '../Images/employers.png'

function Employers() {
    const sendEmail = () => {
        window.location.href = 'mailto:sachinposwal@theveterancompany.in';
      };

  return (
    <div>
      <div className="employers">
        <div className="content">
        <p>Hey, Employers:</p>
        <h3>Find the Perfect Military Talent for Your Company</h3>

            <div className="qna">
                <div className="question">Struggling to find the right talent?</div>
                <div className="answer">Leave it to us! We specialize in connecting companies with highly skilled military veterans who are ready to excel in management and leadership roles. Our veterans bring unparalleled discipline, strategic thinking, and team management expertise to your workforce.</div>
            </div>

            <button onClick={sendEmail} className="cta-button">Connect</button>
        </div>

        <div className="image">
            <img src={img1} alt="work"/>
        </div>
    </div>
    </div>
  )
}

export default Employers