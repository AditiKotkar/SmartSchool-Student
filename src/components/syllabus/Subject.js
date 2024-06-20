// import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import {Link } from 'react-router-dom';
// import './Subject.css';
// function Subject () {
//   return (
//     <div className="Subjectconten">
//             <div className="SubjectyourSyllabus">
//                 <h1 className="SubjectSyllabus">Your Syllabus is here!</h1>
//                 <div className="Subjectimg"></div>
//             </div>
//             <div className="Subjectchapter">
//                 <Link to="/Syllabus"><FontAwesomeIcon icon={faArrowLeft} className='S-icon' /> </Link>
//                 <h1>Chapter Name</h1>
//             </div>
//             <div className="Subjectconteners">
//             <Link to="/RomanNumerals">
//                 <div className="Subjectname">
//                     <h1>1.Roman Numerals</h1>
//                 </div>
//             </Link>
//                 <div className="Subjectname">
//                     <h1>2.Number Work</h1>
//                 </div>
//                 <div className="Subjectname">
//                    <h1>3.Addition and Subtraction</h1>
//                 </div>
//                 <div className="Subjectname">
//                     <h1>4.Circle</h1>
//                 </div>
//                 <div className="Subjectname">
//                     <h1>5.Multiplication and Division</h1>
//                 </div>
//                 <div className="Subjectname">
//                     <h1>6.Fractions</h1>
//                 </div>
//                 <div className="Subjectname">
//                     <h1>7.Angles</h1>
//                 </div>
//                 <div className="Subjectname">
//                     <h1>8.Multiples and Factors</h1>
//                 </div>
//                 <div className="Subjectname">
//                     <h1>9.Decimal Fractions</h1>
//                 </div>
//                 <div className="Subjectname">
//                     <h1>10.Measuring Time</h1>
//                 </div>
//                 <div className="Subjectname">
//                     <h1>11.Problems on Measurement</h1>
//                 </div>
//                 <div className="Subjectname">
//                     <h1>12.Perimeter and Area</h1>
//                 </div>
//             </div>
//         </div>
          
//   );
// }

// export default Subject;


import React, { useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Subject.css';

const Subject = () => {
  const location = useLocation();
  const { subjectcode } = useParams();
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const subjectCode = subjectcode || location.state?.subjectCode || sessionStorage.getItem('subjectCode');

  useEffect(() => {
    console.log({ subjectCode });

    const fetchChapters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://apiaws.onrender.com/chapters?subjectCode=${subjectCode}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (subjectCode) {
      fetchChapters();
    }
  }, [subjectCode]);

  const handleChapterClick = (chapter) => {
    sessionStorage.setItem('chapter_id', chapter.chapter_id);
    sessionStorage.setItem('chapter_name', chapter.chapter_name);
    console.log(`Chapter stored: ${chapter.chapter_id} - ${chapter.chapter_name}`);
  };

  return (
    <div className="Subjectconten">
      <div className="SubjectyourSyllabus">
        <h1 className="SubjectSyllabus">Your Syllabus is here!</h1>
        <div className="Subjectimg"></div>
      </div>
      <div className="Subjectchapter">
        <Link to="/Syllabus">
          <FontAwesomeIcon icon={faArrowLeft} className='S-icon' />
        </Link>
        <h1>Chapters</h1>
      </div>
      <div className="Subjectconteners">
        {!loading && !error && chapters.length > 0 && chapters.map((chapter) => (
          <Link
            to={`/RomanNumerals/${chapter.chapter_id}`} 
            key={chapter.chapter_id}
            onClick={() => handleChapterClick(chapter)} 
          >
            <div className="Subjectname">
              <h1>{chapter.chapter_id} . {chapter.chapter_name}</h1>
            </div>
          </Link>
        ))}
        {loading && <p></p>}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Subject;
