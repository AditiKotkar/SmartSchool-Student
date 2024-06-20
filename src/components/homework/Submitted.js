// import React from 'react';
// import './Submitted.css';

// function Submitted () {
//   return (
// <div className='Submittedcontent'>
//     <div className=" Scontener2">
//         <div className="Sbuten">
//             <div but2>
//                 <h1 className="Senglish">English(101)</h1>
//                 <div className="Sbuttons2">
//                     <span>View</span>
//                     <span>Download</span>
//                 </div> 
//             </div>
//         </div>
//         <div className="Scontener3">
//             <h1 className="Sassign">Assign 1</h1>
//             <div className="SData">
//             <div className="Sbord">
//                 <ul>
//                 <li>Homework Date</li>
//                 <li>Submission Date</li>
//                 <li>Created By</li>
//                 </ul>
//             </div>
//             <div className="SDate">
//                 <ul>
//                 <li>04/04/2024</li>
//                 <li>15/04/2024</li>
//                 <li>Joe Black(9000)</li>
//                 </ul>
//             </div>
//             </div>
//         <div className="Scontener4">
//             <h1 className="Sdescription">Description</h1>
//             <span>Please submit homework before last date.</span>
//         </div>
//     </div>
//     </div>
//     <div className=" Scontener2">
//     <div className="Sbuten">
//         <div but2>
//             <h1 className="Senglish">English(101)</h1>
//             <div className="Sbuttons2">
//                 <span>View</span>
//                 <span>Download</span>
//             </div> 
//         </div>
//     </div>

//         <div className="Scontener3">
//             <h1 className="Sassign">Assign 1</h1>
//             <div className="SData">
//             <div className="Sbord">
//                 <ul>
//                 <li>Homework Date</li>
//                 <li>Submission Date</li>
//                 <li>Created By</li>
//                 </ul>
//             </div>
//             <div className="SDate">
//                 <ul>
//                 <li>04/04/2024</li>
//                 <li>15/04/2024</li>
//                 <li>Joe Black(9000)</li>
//                 </ul>
//             </div>
//             </div>
//         <div className="Scontener4">
//             <h1 className="Sdescription">Description</h1>
//             <span>Please submit homework before last date.</span>
//         </div>
//     </div>
//     </div>
//     <div className=" Scontener2">
//     <div className="Sbuten">
//         <div but2>
//             <h1 className="Senglish">English(101)</h1>
//             <div className="Sbuttons2">
//                 <span>View</span>
//                 <span>Download</span>
//             </div> 
//         </div>
//     </div>
//     <div className="Scontener3">
//         <h1 className="Sassign">Assign 1</h1>
//         <div className="SData">
//         <div className="Sbord">
//             <ul>
//             <li>Homework Date</li>
//             <li>Submission Date</li>
//             <li>Created By</li>
//             </ul>
//         </div>
//         <div className="SDate">
//             <ul>
//             <li>04/04/2024</li>
//             <li>15/04/2024</li>
//             <li>Joe Black(9000)</li>
//             </ul>
//         </div>
//         </div>
//     <div className="Scontener4">
//         <h1 className="Sdescription">Description</h1>
//         <span>Please submit homework before last date.</span>
//     </div>
// </div>
// </div>
// </div> 
// );
// }

// export default Submitted;





// import React, { useState, useEffect } from 'react';
// import './Submitted.css';

// const Submitted = () => {
//   const [submittedHomework, setSubmittedHomework] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const college_code = sessionStorage.getItem('college_code');
//   const subject_name = sessionStorage.getItem('subject_name');
//   const student_id = sessionStorage.getItem('student_id'); 

//   useEffect(() => {
//     const fetchSubmittedHomework = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`https://apiaws.onrender.com/homework_submitted?studentid=${student_id}&subjectName=${subject_name}&college_code=${college_code}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setSubmittedHomework(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (student_id && college_code && subject_name) {
//       fetchSubmittedHomework();
//     }
//   }, [student_id, college_code, subject_name]);

//   return (
//     <div className='Submittedcontent'>
//       {error && <p>Error: {error}</p>}
//       {!loading && !error && submittedHomework.map((homework) => (
//         <div className="Scontener2" key={homework.hid}>
//           <div className="Sbuten">
//             <div>
//               <h1 className="Senglish">{homework.subject_name}({homework.subject_id})</h1>
//               <div className="Sbuttons2">
//                 <span>View</span>
//                 <span>Download</span>
//               </div>
//             </div>
//           </div>
//           <div className="Scontener3">
//             <h1 className="Sassign">Assign {homework.homeworkp_id}</h1>
//             <div className="SData">
//               <div className="Sbord">
//                 <ul>
//                   <li>Homework Date</li>
//                   <li>Submission Date</li>
//                   <li>Created By</li>
//                 </ul>
//               </div>
//               <div className="SDate">
//                 <ul>
//                   <li>{new Date(homework.date_of_given).toLocaleDateString()}</li>
//                   <li>{new Date(homework.date_of_creation).toLocaleDateString()}</li>
//                   <li>{homework.teacher_id}</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="Scontener4">
//               <h1 className="Sdescription">Description</h1>
//               <span>{homework.description}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Submitted;



// import React, { useState, useEffect } from 'react';
// import './Submitted.css';

// const Submitted = () => {
//   const [submittedHomework, setSubmittedHomework] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const college_code = sessionStorage.getItem('college_code');
//   const subject_name = sessionStorage.getItem('subject_name');
//   const student_id = sessionStorage.getItem('student_id');

//   useEffect(() => {
//     const fetchSubmittedHomework = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`https://apiaws.onrender.com/homework_submitted?studentid=${student_id}&subjectName=${subject_name}&college_code=${college_code}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setSubmittedHomework(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (student_id && college_code && subject_name) {
//       fetchSubmittedHomework();
//     }
//   }, [student_id, college_code, subject_name]);

//   const handleDownload = (imageUrl) => {
//     console.log('Downloading assignment:', imageUrl);
//     const link = document.createElement('a');
//     link.href = imageUrl;
//     link.download = `assignment_${Date.now()}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleView = (imageUrl) => {
//     console.log('Viewing assignment image:', imageUrl);
//     window.open(imageUrl, '_blank');
//   };

//   return (
//     <div className='Submittedcontent'>
//       {error && <p>Error: {error}</p>}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         submittedHomework.length === 0 ? (
//           <div className="no-data">No submitted assignments found.</div>
//         ) : (
//           submittedHomework.map((homework, index) => (
//             <div className="Scontener2" key={index}>
//               <div className="Sbuten">
//                 <div>
//                   <h1 className="Senglish">{homework.subject_name} ({homework.subject_id})</h1>
//                   <div className="Sbuttons2">
//                     <span onClick={() => handleView(`data:image/jpeg;base64,${homework.images[0]}`)}>View</span>
//                     <span onClick={() => handleDownload(`data:image/jpeg;base64,${homework.images[0]}`)}>Download</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="Scontener3">
//                 <h1 className="Sassign">{homework.homeworksubmitted_id}</h1>
//                 <div className="SData">
//                   <div className="Sbord">
//                     <ul>
//                       <li>Homework Date</li>
//                       <li>Submission Date</li>
//                       <li>Created By</li>
//                     </ul>
//                   </div>
//                   <div className="SDate">
//                     <ul>
//                       <li>{new Date(homework.date_of_given).toLocaleDateString()}</li>
//                       <li>{new Date(homework.date_of_creation).toLocaleDateString()}</li>
//                       <li>{homework.teacher_id}</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="Scontener4">
//                   <h1 className="Sdescription">Description</h1>
//                   <span>{homework.submitted_description}</span>
//                 </div>
//               </div>
//             </div>
//           ))
//         )
//       )}
//     </div>
//   );
// };

// export default Submitted;















// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './Submitted.css';

// function Submitted() {
//   const [submittedHomework, setSubmittedHomework] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const studentid = location.state?.studentid || sessionStorage.getItem('studentid');
//   const subject_name = location.state?.subject_name || sessionStorage.getItem('subject_name');
//   const college_code = location.state?.college_code || sessionStorage.getItem('college_code'); 

//   useEffect(() => {
//     const fetchSubmittedHomework = async () => {
//       if (!studentid || !college_code) {
//         setError('Missing required parameters');
//         setLoading(false);
//         return;
//       }
      
//       setLoading(true);
//       try {
//         const response = await fetch(`https://apiaws.onrender.com/homework_submitted?college_code=${college_code}&studentid=${studentid}&subject_name=${subject_name}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setSubmittedHomework(data);
//         setError(null);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubmittedHomework();
//   }, [studentid, college_code, subject_name]);

//   const handleDownload = (assignmentId, imageUrl) => {
//     const link = document.createElement('a');
//     link.href = imageUrl;
//     link.download = `assignment_${assignmentId}.jpg`;
//     link.click();
//   };

//   const handleView = (imageUrl) => {
//     window.open(imageUrl, '_blank');
//   };

//   return (
//     <div className='Submittedcontent'>
//       {error && <p>Error: {error}</p>}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         submittedHomework.length === 0 ? (
//           <div className="no-data">No submitted homework found.</div>
//         ) : (
//           submittedHomework.map((assignment, index) => (
//             <div className="submittedContainer" key={index}>
//               <div className="submittedButton">
//                 <div>
//                   <h1 className="submittedEnglish">{assignment.subject_name} ({assignment.subject_id})</h1>
//                   <div className="submittedButtons">
//                     <span onClick={() => handleView(`data:image/jpeg;base64,${assignment.image}`)}>View</span>
//                     <span onClick={() => handleDownload(assignment.homework_id, `data:image/jpeg;base64,${assignment.image}`)}>Download</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="submittedDetails">
//                 <h1 className="submittedAssignmentId">{assignment.homework_id}</h1>
//                 <div className="submittedInfo">
//                   <div className="submittedLabels">
//                     <ul>
//                       <li>Homework Date</li>
//                       <li>Submission Date</li>
//                       <li>Submitted By</li>
//                     </ul>
//                   </div>
//                   <div className="submittedValues">
//                     <ul>
//                       <li>{new Date(assignment.date_of_given).toLocaleDateString()}</li>
//                       <li>{new Date(assignment.date_of_submission).toLocaleDateString()}</li>
//                       <li>{assignment.student_name}</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="submittedDescription">
//                   <h1>Description</h1>
//                   <span>{assignment.description}</span>
//                 </div>
//               </div>
//             </div>
//           ))
//         )
//       )}
//     </div>
//   );
// }

// export default Submitted;







//Submitted.js
import React, { useEffect, useState } from 'react';
import './Submitted.css';

function Submitted({ approvedHomework }) {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    setAssignments(approvedHomework);
  }, [approvedHomework]);
  


  useEffect(() => {
    fetchAssignments();
  }, []);
  

  const fetchAssignments = async () => {
    try {
      const student_id = sessionStorage.getItem('studentid');
      const subject_id = sessionStorage.getItem('subject_id');
      const college_code = sessionStorage.getItem('college_code');
      const response = await fetch(`https://apiaws.onrender.com/homework_submitted?student_id=${student_id}&subject_id=${subject_id}&college_code=${college_code}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Fetched assignments:', data);
      setAssignments(data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleDownload = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `assignment_${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <div className='Submittedcontent'>
      {assignments.length === 0 ? (
        <div className="no-data"></div>
      ) : (
        assignments.map((assignment, index) => (
          <div className="Scontener2" key={index}>
            <div className="Sbuten">
              <div but2>
                <h1 className="Senglish">{assignment.subject_name} ({assignment.subject_id})</h1>
                <div className="Sbuttons2">
                  <span onClick={() => handleView(`data:image/jpeg;base64,${assignment.images[0]}`)}>View</span>
                  <span onClick={() => handleDownload(`data:image/jpeg;base64,${assignment.images[0]}`)}>Download</span>
                </div>
              </div>
            </div>
            <div className="Scontener3">
              <h1 className="Sassign">{assignment.homeworksubmitted_id}</h1>
              <div className="SData">
                <div className="Sbord">
                  <ul>
                    <li>Homework Date: {new Date(assignment.date_of_to_submit).toLocaleDateString()}</li>
                    <li>Submission Date: {new Date(assignment.date_of_given_submitted).toLocaleDateString()}</li>
                    <li>Created By: {assignment.created_by}</li>
                  </ul>
                </div>
              </div>
              <div className="Scontener4">
                <h1 className="Sdescription">Description</h1>
                <span>{assignment.submitted_description}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Submitted;