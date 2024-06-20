import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import './Syllabus.css';

const Syllabus = () => {
    const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const standard = location.state?.standard || sessionStorage.getItem('standard');
  const subjectCode = location.state?.subjectCode || sessionStorage.getItem('subjectCode');

  useEffect(() => {
    console.log({
      standard,
      subjectCode
    });
    const fetchSubjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://apiaws.onrender.com/subjects?standard=${standard}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSubjects(data);
        sessionStorage.setItem('standard', standard);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (standard) {
      fetchSubjects();
    }
  }, [standard]);

  const handleSubjectClick = (subjectcode) => {
    sessionStorage.setItem('subjectCode', subjectcode);
  };

  return (
    <div className="homecontene">
      <div className='feedbackheader'>
        <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
        <h1>Syllabus</h1>
      </div>
      <div className="homecon">
        {!loading && !error && subjects.map(subject => (
          <Link to={`/Syllabus/${subject.subject_name.toLowerCase().replace(/\s+/g, '-')}`} 
          key={subject.subject_code_prefixed} 
          title={subject.subject_name} 
          state={{ subjectCode: subject.subject_code_prefixed }}
            onClick={() => handleSubjectClick(subject.subject_code_prefixed)}>
            <div className="homecontener">
              <div className="homeimg">
              <img src={`data:image/jpeg;base64, ${subject.image}`} alt={subject.subject_name} />
              </div>
              <h1>{subject.subject_name}</h1>
            </div>
          </Link>
        ))}
      </div>
            </div>
  );
}
export default Syllabus;
