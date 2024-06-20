import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './feedback.css';
import { Link } from 'react-router-dom';

function Feedback() {
  return (
    <div className='feedbackcontent'>
      <div className='feedbackheader'>
        <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
        <h1>feedback</h1>
      </div>
      <div className='feedbackteacher'>
      <div class="field name">
        <h2>Teacher Name</h2>
        <input className='feedbackconten1' type="text" placeholder="Enter Name" required/>
      </div>
      <div class="field name">
        <h2>Your Name</h2>
        <input className='feedbackconten1' type="text" name="Enter Name" placeholder="Enter Name" />
      </div>
      <div class="field name">
        <h2>Subject</h2>
        <input className='feedbackconten1' type="text" name="Enter Name" placeholder="Enter Name" />
      </div>
      <div class="field textarea">
        <h2>Deatails Explanation</h2>
        <textarea  className='feedbackconten2'  placeholder="Type here....." required></textarea>
      </div>
      <div className='butons'>
      <Link to="/student"><button className='BACK'>BACK</button></Link>
        <button className='SUBMIT'>SUBMIT</button>
      </div>
      </div>
      </div>
  );
}

export default Feedback;