import React, { useState } from 'react';
import './Done.css';
import logo from './images/background 3.png';
import { Link } from 'react-router-dom';

function Done() {
  return (
    <div className='contener-9'>
      <div className='Donelogoconten'>
        <img src={logo} className='Donelogo' alt='logo'></img>
      </div>
      <div className='footer-9'>
        <h1 className='poweredby-9'>Powered by</h1>
        <h2 className='web-9'>DreamsGuider.com</h2>
        <h3 className='provide-9'>Software | Education | Advertising</h3>
      </div>
    </div>
  );
}

export default Done;