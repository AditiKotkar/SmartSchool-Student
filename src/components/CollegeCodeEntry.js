import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/background 3.png';
import group from './images/Group 286.png';
import './CollegeCodeEntry.css';

const CollegeCodeEntry = () => {
  const [college_code, setCollege_code] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!college_code) {
      alert("Please enter a valid college code");
      return;
    }
    try {
      const response = await fetch ('https://apiaws.onrender.com/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ college_code }),
      });
      const data = await response.text();
      if (response.ok) {
        sessionStorage.setItem('college_code', college_code);
        navigate('/login', {state: {college_code}});
        } else {
          alert(data); 
        }
    } catch (error) {
      console.error('Error:', error);
      alert('Please try again.');
    }
  };

  return (
    <div className="Collegecontent">
      <div className='logoconten-9'>
        <img src={logo} className='logo' alt='logo'></img>
        <p>Software | Education | Advertising</p>
      </div>
      <div className='formcontent'>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="Enter School Code" value={college_code} onChange={(e) => setCollege_code(e.target.value)} /><br />
        <button type="submit">PROCEED</button>
      </form>
      </div>
      <img src={group} className='group' alt='logo'></img>
    </div>
  );
};

export default CollegeCodeEntry;