import React, { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import a from '../Images/a.png'
import Form from './Form.jsx'

function Footer() {

    const [popupActive, setPopupActive] = useState(false);
  return (
    <>

<Form active={popupActive} setActive={setPopupActive} />


    <div className="fcontainer">
        <div className="fcontent">
        <h1>Excited to Get Started?</h1>
        <p>Join us today and explore the endless possibilities ahead!</p>
        <a
  href="https://wa.me/+917042240012?text=Hi%21%20I%20am%20interested%20in%20your%20Services."
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
  style={{ textDecoration: 'none' }}
>
  Reach Out
</a>

        </div>
    </div>
    <footer>
        <p>Copyright © The Veteran Company</p>
        <div className="contact">
            <img src={a} alt="Email Icon" className="email-icon"/>
            <Link to="mailto:support@theveterancompany.in">support@theveterancompany.in</Link>
        </div>
    </footer>
    </>
  )
  
}

export default Footer
