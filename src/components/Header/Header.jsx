import React from "react";
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="label">
          <Link to='/' className="title">Travelix<span>Pro</span></Link>
        </div>

        <div className="menu">
          <Link to='/Tours' className='Link'>Tours</Link>
          <Link to='/srv' className="Link">Services</Link>
          <Link to='/abus' className="Link">AboutUs</Link>
        </div>

        <div className="button">
          <Link to="/SignUp"><button className="btn">Sign Up</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Header;