import React, { useEffect, useState, PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Report.css';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'English', value: 650 },
  { name: 'Hindi', value: 860 },
  { name: 'Marathi', value: 880 },
  { name: 'Mathematics', value: 100 },
  { name: 'Science', value: 670 },
  { name: 'History', value: 540 },
  { name: 'Art', value: 540 },
  { name: 'Sports', value: 910 },
];

const COLORS = ['#E80CD2', '#008000', '#2910BC', '#EA1212', '#0961F5', '#FF007A', '#8AB60E', '#D9C726'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {(percent * 515).toFixed(0)}%
    </text>
  );
};

const Report = () => {
  const [isActive, setIsActive] = useState(false);
  const [student, setStudent] = useState([null]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('http://localhost:3001/student-info');
        const data = await response.json();
        setStudent(data[0]);
      } catch (error) {
        console.error('Error fetching student information:', error); 
      }
    };

    fetchStudentData();
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='Reportcontent'>
      <div className='feedbackheader'>
        <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
        <h1>Reports</h1>
      </div>
      <div className='Reportstd'>
        <div className='Reportimg'>
        <div className="img-1"></div>
        </div>
        <div className='Reportname'>
          <span className="Reporth1">Hi, {student.stud_name}</span><br></br>
          <span className="Reporth2">Roll Number : {student.stud_rollno}</span><br></br>
          <span className="Reporth2">Class : {student.stud_std}</span>
        </div>
      </div>
      <div className='Reportresult'>
        <div className='ReportSubjects'>
          <h1>Subjects</h1>
          <ul>
            <li>English</li>
            <li>Hindi</li>
            <li>Marathi</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>History</li>
            <li>Art</li>
            <li>Sports</li>
          </ul>
        </div>
        <div className='ReportSubjects1'>
          <h1>Percentage</h1>
          <ul>
            <li>75%</li>
            <li>83%</li>
            <li>91%</li>
            <li>30%</li>
            <li>67%</li>
            <li>76%</li>
            <li>85%</li>
            <li>98%</li>
          </ul>
        </div>
        <div className='ReportSubjects2'>
          <h1>Results</h1>
          <ul>
            <li>Pass</li>
            <li>Pass</li>
            <li>Pass</li>
            <li>Fail</li>
            <li>Pass</li>
            <li>Pass</li>
            <li>Pass</li>
            <li>Pass</li>
          </ul>
        </div>
      </div>
      <div className='percentage-contener'>
        <div className='Reportleft'>
          <h1>Your Interest</h1>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8" dataKey="value" >
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='Reportright'>
          <div className='Reportcolors'>
            <div className='RCparple'></div>
            <div className='RCgreen'></div>
            <div className='RCBlue'></div>
            <div className='RCred'></div>
            <div className='RCblue'></div>
            <div className='RCpink'></div>
            <div className='RCg'></div>
            <div className='RCyello'></div>
          </div>
          <div className='Reportsubjects'>
            <ul>
              <li>English</li>
              <li>Hindi</li>
              <li>Marathi</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>History</li>
              <li>Art</li>
              <li>Sports</li>
            </ul>
          </div> 
        </div>
      </div>
      <div className='Reportline'></div>
      <div className='Report3conten'>
        <div className='Reportleftcontent'>
          <p>You have Completed <span>11 quizz</span> of this semester</p>
          <div className='Reportleftcircle'>
            <h1><span>11</span>/12</h1>
            <h1>Quiz Completed</h1>
          </div>
          <h1>Average Marks:<span>13</span>/15</h1>
          <h1>Score:<span>Top 10%</span></h1>
        </div>
        <div className='Reportrightcontent'>
          <h1>Subject Quizz/ Class Test</h1>
          <div className='ReportsubjectsQuizz'>
            <ul>
              <li>English : <span>2</span>/2</li>
              <li>Hindi : <span>1</span>/2</li>
              <li>Marathi : <span>2</span>/2</li>
              <li>Math : <span>2</span>/2</li>
              <li>Science : <span>2</span>/2</li>
              <li>History : <span>2</span>/2</li>
              <li>Art : <span>2</span>/2</li>
            </ul>
          </div> 
        </div>
      </div>
      <div className='Reportline'></div>
      <div className='Reportperformance'>
        <div className='Reportperformanceleft'>
          <p>Your Overall Performance This Semester</p>
          <ol>
            <li>Class Attended : <span>45</span>/50</li>
            <li>Quiz Taken : <span>11</span>/12</li>
            <li>Assignment Submitted : <span>21</span>/24</li>
            <li>Presentation Completed : <span>3</span>/4</li>
          </ol>
        </div>
        <div className='Reportperformanceright'>
          <div className='ReportPerformancecircle'>
            <h1>90%</h1>
            <h2>Marks</h2>
            <h2>Achieved</h2>
          </div>
        </div>
      </div>
      <div className='Reportline'></div>
      <div className='ReportRemark'>
        <h1>Your Report</h1>
        <h2>Remark</h2>
        <ol>
          <li>your knowledge level exceeds expectations in Hindi and Sports. you worked well with all members of the team.</li>
          <li>Student performed exceptionally well during your rotation.</li>
          <li>your teams universally praised your performance, noting that he exhibited independence and skill at the level of an intern in the workup and management of your patients</li>
        </ol>
      </div>
      <div className='Reportline'></div>
      </div>
  );
}

export default Report;