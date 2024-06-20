import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faTimes, faGear, faHouse, faCircleInfo, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './StudentDashbord.css';
const StudentDashboard = () => {
  const [isActive, setIsActive] = useState(false);
  const [dashboardItems, setDashboardItems] = useState([]);
  const [student, setStudent] = useState(null);
  const college_code = sessionStorage.getItem('college_code');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentData = async () => {
      const studentid = sessionStorage.getItem('studentid');
      try {
        const response = await fetch(`https://apiaws.onrender.com/profile?college_code=${college_code}&studentid=${studentid}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudent(data);
        sessionStorage.setItem('standard', data.standard);
        sessionStorage.setItem('division', data.division);
        sessionStorage.setItem('fullname', data.fullname); 
      } catch (error) {
        console.error('Error fetching student information:', error);
      }
    };
    const fetchDashboardData = async () => {
      try {
        const response = await fetch(`https://apiaws.onrender.com/dashboard`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDashboardItems(data);
      } catch (error) {
        console.error('Error fetching dashboard information:', error);
      }
    };
    if (college_code) {
      fetchStudentData();
      fetchDashboardData();
    }
  }, [college_code]);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };  
  const handleItemClick = (title, subjectId) => {
    const formattedTitle = title.replace(/\s+/g, '');
    sessionStorage.setItem('subject_id', subjectId);
    navigate(`/${formattedTitle.toLowerCase().replace(/\s+/g, '-')}`, {
      state: {
        standard: sessionStorage.getItem('standard'),
        division: sessionStorage.getItem('division'),
        college_code: college_code,
        subject_name: formattedTitle,
        subject_id: subjectId,
        fullname: sessionStorage.getItem('fullname'),
      }
    });
  };
  return (
    <div className="container">
      <div className="bgimg">
        {student?.profilephoto && (
          <div className="img-1">
            <img src={`data:image/jpeg;base64,${student.profilephoto}`} alt="Profile" className="img-1" onError={(e) => e.target.src = '/fallback-image.jpg'} />
          </div>
        )}
        {student && (
          <div className="Name">
            <span className="hiSaiChudhari">Hi, {student.fullname}</span><br />
            <span className="rollNumber1">Roll Number: {student.rollnumber}</span><br />
            <span className="class12Std">Class: {student.standard}</span>
          </div>
        )}
        <nav className="navbar">
          <div className="max-width">
            <ul className={`menu ${isActive ? 'active' : ''}`}>
              <li><FontAwesomeIcon icon={faHouse} /><Link to="/" className="menu-btn">Home</Link></li>
              <li><FontAwesomeIcon icon={faCircleUser} /><Link to="/Profile" className="menu-btn">Profile</Link></li>
              <li><FontAwesomeIcon icon={faCircleInfo} /><a href="#About" className="menu-btn">About School</a></li>
              <li><FontAwesomeIcon icon={faGear} /><a href="#Setting" className="menu-btn">Setting</a></li>
              <li><FontAwesomeIcon icon={faArrowRightFromBracket} /><a href="#Logout" className="menu-btn">Logout</a></li>
            </ul>
            <div className="menu-btn" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isActive ? faTimes : faEllipsisVertical} />
            </div>
          </div>
        </nav>
      </div>
      <div className="con">
        {dashboardItems.map(item => (
          <div className="contener" key={item.id} onClick={() => handleItemClick(item.title)}>
            <div className="img">
              <img src={`data:image/jpeg;base64,${item.image}`} alt={item.title} />
            </div>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StudentDashboard;