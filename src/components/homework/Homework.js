// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import './Homework.css';

// const Homework = () => {
//   const [subjects, setSubjects] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();
//   const standard = location.state?.standard || sessionStorage.getItem('standard');

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`https://apiaws.onrender.com/subjects?standard=${standard}`, {
//           method: 'GET',
//           headers: { 'Content-Type': 'application/json' }
//         });
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setSubjects(data);
//         sessionStorage.setItem('standard', standard);
//       } catch (error) {
//         setError(error.message);
//         console.error('Error fetching subjects:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (standard) {
//       fetchSubjects();
//     }
//   }, [standard]);

//   return (
//     <div className="homecontene">
//       <div className="homebg">
//         <div className="homeicon">
//           <Link to="/student">
//             <FontAwesomeIcon icon={faArrowLeft} className="profile-icon" />
//           </Link>
//         </div>
//         <div className="homeName">
//           <h1 className="homework">Homework</h1>
//         </div>
//         <div className="homeimg-1"></div>
//       </div>
//       <div className="homecon">
//         {!loading && !error && subjects.map(subject => (
//           <Link to={`/Homework/${subject.subject_name.toLowerCase().replace(/\s+/g, '-')}`} key={subject.id} title={subject.subject_name}>
//             <div className="homecontener">
//               <div className="homeimg">
//                 <img src={`data:image/jpeg;base64, ${subject.image}`} alt={subject.subject_name} />
//               </div>
//               <h1>{subject.subject_name}</h1>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homework;




import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Homework.css';

const Homework = () => {
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const standard = location.state?.standard || sessionStorage.getItem('standard');
  const subject_id = location.state?.subject_id || sessionStorage.getItem('subject_id');

  useEffect(() => {
    console.log({
      standard,
      subject_id
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
        console.error('Error fetching subjects:', error);
      } finally {
        setLoading(false);
      }
    };
    if (standard) {
      fetchSubjects();
    }
  }, [standard]);

  const handleSubjectClick = (subjectId) => {
    sessionStorage.setItem('subject_id', subjectId);
  };

  return (
    <div className="homecontene">
      <div className="homebg">
        <div className="homeicon">
          <Link to="/student">
            <FontAwesomeIcon icon={faArrowLeft} className="profile-icon" />
          </Link>
        </div>
        <div className="homeName">
          <h1 className="homework">Homework</h1>
        </div>
        <div className="homeimg-1"></div>
      </div>
      <div className="homecon">
        {!loading && !error && subjects.map(subject => (
          <Link
            to={`/Homework/${subject.subject_name.toLowerCase().replace(/\s+/g, '-')}`}
            key={subject.subject_code_prefixed }
            title={subject.subject_name}
            state={{ subject_id: subject.subject_code_prefixed }}
            onClick={() => handleSubjectClick(subject.subject_code_prefixed)}
          >
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
};

export default Homework;