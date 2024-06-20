import React, { useState , useEffect } from 'react';
import './studentlogin.css';
import logo from './images/background 3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import google from './images/google 1.png';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [studentid, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [college_code, setCollege_code] = useState('');
  const navigate = useNavigate();

    useEffect(() => {
    const storedCollegeCode = sessionStorage.getItem('college_code');
    if (storedCollegeCode) {
      setCollege_code(storedCollegeCode);
    }
  }, []);
  const handleSignIn = async (e) => {
        e.preventDefault();
        const loginEndpoint = selectedBox === 'Student' ? '/login' : `/${selectedBox.toLowerCase()}-login`;
        try {
          const response = await fetch(`https://apiaws.onrender.com/login?college_code=${college_code}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              studentId: studentid,
              password: password,
            }),
          });
          const data = await response.json();
          if (response.ok) {
            console.log('Login successful');
            sessionStorage.setItem('studentid', studentid);
            navigate(`/student`); 
          } else {
            console.log('Login failed:', data.errorMessage);
            alert('Invalid username or password. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      const [selectedBox, setSelectedBox] = useState('Student');
      const handleBoxClick = (boxName) => {
        setSelectedBox(boxName);
      };
  return (
    <div className='contener-9'>
      <div className='logoconten-9'>
        <img src={logo} className='logo-9' alt='logo' />
      </div>
      <div className='conteners-9'>
        <div className={`box-9 ${selectedBox === 'Student' ? 'selected' : ''}`} onClick={() => handleBoxClick('Student')}>
          <div className='circle-9'>{selectedBox === 'Student' && <FontAwesomeIcon icon={faCheck} className='checkIcon-9' />}</div>
          <h1 className='boxname-9'>Student</h1>
        </div>
        <div className={`box-9 ${selectedBox === 'Parent' ? 'selected' : ''}`} onClick={() => handleBoxClick('Parent')} >
          <div className='circle-9'>{selectedBox === 'Parent' && <FontAwesomeIcon icon={faCheck} className='checkIcon-9' />}</div>
          <h1 className='boxname-9'>Parent</h1>
        </div>
        <div className={`box-9 ${selectedBox === 'Staff' ? 'selected' : ''}`} onClick={() => handleBoxClick('Staff')} >
          <div className='circle-9'>{selectedBox === 'Staff' && <FontAwesomeIcon icon={faCheck} className='checkIcon-9' />}</div>
          <h1 className='boxname-9'>Staff</h1>
        </div>
      </div>
      <div className='form-9'>
        <input className='user-9' type="text" placeholder="Username (Mobile/Email)" value={studentid} onChange={(e) => setStudentId(e.target.value)} />
        <div className='line-9'></div>
        <input className='user-9' type="password" placeholder="Password/OTP" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='line-9'></div>
        <h1 className='school-9'>Forget Password?</h1>
      </div>
      <div className='but-9'>
        <button className='but-9 signin-9' onClick={handleSignIn}>SIGN IN</button>
      </div>
      <div className='or-9'>
        <div className='orline-9'></div>
        <h1 className='OR-9'>Or</h1>
        <div className='orline-9'></div>
      </div>
      <div className='google-9'>
        <img src={google} alt='Google' />
        <h2 className='login-9'>Login with Google</h2>
      </div>
      <h3 className='how-9'>HOW TO LOGIN?</h3>
      <div className='footer-9'>
        <h1 className='poweredby-9'>Powered by</h1>
        <h2 className='web-9'>DreamsGuider.com</h2>
        <h3 className='provide-9'>Software | Education | Advertising</h3>
      </div>
    </div>
  );
}
export default StudentLogin;