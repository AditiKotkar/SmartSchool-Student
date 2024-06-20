// index.js
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import CollegeCodeEntry from './components/CollegeCodeEntry';
import StudentLogin from './components/studentlogin'; 
import StudentDashbord from './components/StudentDashbord';
import Profilepage from './components/Profilepage';
import Homework from './components/homework/Homework';
import Mainsub from './components/homework/Mainsub';
import Syllabus from './components/syllabus/Syllabus';
import Subject from './components/syllabus/Subject';
import RomanNumerals from './components/syllabus/RomanNumerals';
import AttendenceSheet from './components/Attendence/AttendenceSheet';
import Feedback from './components/Feedback/Feedback';
import Report from './components/Report/Report';
import 'react-calendar/dist/Calendar.css';
import Chat from './components/Chat/Chat';
import ChatOption from './components/Chat/ChatOption';
import Teacher from './components/Teacher';
import Done from './components/Done';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CollegeCodeEntry />} />
      <Route path="login" element={<StudentLogin />} /> 
      <Route path="student" element={<StudentDashbord />} />
      <Route path="profile" element={<Profilepage />} />
      <Route path="Homework" element={<Homework />} />
      <Route path="Homework/:subjectName" element={<Mainsub  />} />
      <Route path="Syllabus" element={<Syllabus  />} />
      <Route path="Syllabus/:subjectName" element={<Subject />} />
      <Route path="RomanNumerals/:chapter_id" element={<RomanNumerals />} />
      <Route path="AttendenceSheet" element={<AttendenceSheet />} />
      <Route path="Feedback" element={<Feedback/>}/>
      <Route path="Report" element={<Report/>}/>
      <Route path="Chat" element={<Chat/>}/>
      <Route path="ChatOption" element={<ChatOption/> }/>
      <Route path="Teacher" element={<Teacher />} />
      <Route path="Done" element={<Done />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
