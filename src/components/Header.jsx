import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../Images/logo.png'
import { useEffect,useState } from 'react'
import Form from './Form.jsx';




function Header() {

  const toggleMenu = (e)=> {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.classList.toggle("active");
    }
  }


  const [popupActive, setPopupActive] = useState(false);

  return (
    <>
    <Form active={popupActive} setActive={setPopupActive} />

    <nav className="navbar" id="navbar">
        <div className="logo">
            <Link to='/'>
              <img src={logo} alt="logo" ></img>
            </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
            &#9776;
        </div>
        <ul className="nav-links " id="navLinks">
            <li><NavLink to='/' onClick={toggleMenu} className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
            <li><NavLink to='About' onClick={toggleMenu} className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}>About us</NavLink></li>
            <li><NavLink to='/Services' onClick={toggleMenu} className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}>Services</NavLink></li>
            <li><NavLink to='/Employers' onClick={toggleMenu} className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}>For Employers</NavLink></li>
            <li><NavLink to='/Plans' onClick={toggleMenu} className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}>Plans</NavLink></li>
            {/* <li><NavLink to='/Openings' onClick={toggleMenu} className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}>Job Openings</NavLink></li>*/}
            <li><button className='btn' onClick={() => {setPopupActive(true);toggleMenu(); } }>Get Started</button></li>
        </ul>
    </nav>
    <div className="wrapper"></div>
    </>
  )
}

export default Header