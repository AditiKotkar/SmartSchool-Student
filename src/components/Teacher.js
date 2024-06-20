import React, { useState } from 'react';
import './Teacher.css';
import logo from './images/background 3.png';
import { Link } from 'react-router-dom';

function Teacher() {
  return (
    <div className='contener-9'>
      <div className='logoconten-9'>
        <img src={logo} className='logo-9' alt='logo'></img>
      </div>

      <div className='Teacher'>
        <h1>Contact to Teacher !</h1>
        <Link to="/Done"><button>Done</button></Link>
      </div>

      <div className='footer-9'>
        <h1 className='poweredby-9'>Powered by</h1>
        <h2 className='web-9'>DreamsGuider.com</h2>
        <h3 className='provide-9'>Software | Education | Advertising</h3>
      </div>
    </div>
  );
}

export default Teacher;