import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Profilepage.css';
import { Link } from 'react-router-dom';

const Profilepage = () => {
  const [student, setStudent] = useState(null);
  const studentid = sessionStorage.getItem('studentid');
  const college_code = sessionStorage.getItem('college_code');
  const student_name = sessionStorage.getItem('student_name'); 

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`https://apiaws.onrender.com/profile?college_code=${college_code}&studentid=${studentid}`, {
          method: 'GET',
        });
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error('Error fetching student information:', error);
      }
    };
    fetchStudentData();
  }, [studentid, college_code]);

  return (
    <div className='profile-content'>
      <div className='profile-Profile'>
        <Link to="/student">
          <FontAwesomeIcon icon={faArrowLeft} className="profile-icon" />{' '}
        </Link>
        <h1 className='profile-ProfileName'>Profile</h1>
      </div>
      <div className='profile-IMG'>
        {student?.profilephoto && (
          <img src={`data:image/jpeg;base64,${student.profilephoto}`} alt="Profile" onError={(e) => e.target.src = '/fallback-image.jpg'}/>
        )}
      </div>

      <div className='profile-data'>
          <div className='profile-Dtext'>
            {student ? (
              <form>
                <div>
                  <label>Full Name : </label>
                  <input type="text" name="Name" placeholder="Name" value={student_name || ''} readOnly />
                </div>
                <div className='profile-Std'>
                  <label>Standard : </label>
                  <input type="text" name="std" placeholder="Class" value={student.standard || ''} readOnly/>
                  <label>Division : </label>
                  <input type="text" name="division" placeholder="Division" value={student.division || ''} readOnly/>
                </div>
                <div>
                  <label>Roll Number : </label>
                  <input type="text" name="roll_no" placeholder="Roll Number" value={student.rollnumber || ''} readOnly/>
                </div>
                <div>
                  <label>Mobile Number : </label>
                  <input type="text" name="mobile" placeholder="Phone Number" value={student.mobile || ''} readOnly/>
                </div>
                <div>
                  <label>Birth Date : </label>
                  <input type="date" name="dob" placeholder="Date of Birth" value={student.dob || ''} readOnly/>
                </div>  
                <div>
                  <label>Email : </label>
                  <input type="text" name="Mail" placeholder="Email" value={student.email || ''} readOnly/>
                </div>         
              </form>
            ) : (
              <p></p>
            )}
          </div>
      </div>
    </div>
  );
};

export default Profilepage;