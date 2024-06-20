import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AttendenceSheet.css';
import { Link } from 'react-router-dom';

const AttendenceSheet = () => {
  const [value, setValue] = useState(new Date());
  const [absentDates, setAbsentDates] = useState([
    { title: 'Reasons of Holiday', date: new Date(2024, 4, 6), reason: 'ill' },
    { title: 'Reasons of Holiday', date: new Date(2024, 4, 15), reason: 'Sister Function' },
    { title: 'Reasons of Holiday', date: new Date(2024, 4, 19), reason: 'ill' },
    { title: 'Reasons of Holiday', date: new Date(2024, 4, 24), reason: 'Sister Function' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newDate, setNewDate] = useState(new Date());
  const [newReason, setNewReason] = useState('');
  const [newTitle, setNewTitle] = useState('Reasons of Holiday');

  const [currentMonth, setCurrentMonth] = useState(value);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      if (absentDates.some(absent => absent.date.toDateString() === date.toDateString())) {
        return 'absent';
      } else if (day === 0) {
        return 'sunday';
      } else if (day === 6) {
        return 'saturday';
      } else {
        return 'weekday';
      }
    }
  };

  const handleAddAbsentDate = () => {
    setAbsentDates([...absentDates, {title: newTitle, date: newDate, reason: newReason}]);
    setShowModal(false);
    setNewDate(new Date());
    setNewReason('');
    setNewTitle('Reasons of Holiday');
  };

  const handleMonthChange = ({ activeStartDate }) => {
    setCurrentMonth(activeStartDate);
  };

  const getAbsentDatesForCurrentMonth = () => {
    return absentDates.filter(absent => 
      absent.date.getMonth() === currentMonth.getMonth() && 
      absent.date.getFullYear() === currentMonth.getFullYear()
    );
  };

  const absentDatesForCurrentMonth = getAbsentDatesForCurrentMonth();

  return (
    <div className='Attendancecontener'>
      <div className='Attendancecal'>
        <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
        <h1>Attendance</h1>
        <FontAwesomeIcon icon={faPlus} className='Attendanceicon' onClick={() => setShowModal(true)}/>
      </div>
      <div className='Attendanceday'>
        <div className='Attendancedays'>
          <Calendar
            onChange={setValue}
            value={value}
            tileClassName={tileClassName}
            onActiveStartDateChange={handleMonthChange}
          />
        </div>
        <div className='attendancere'>
          {absentDatesForCurrentMonth.length > 0 ? (
            absentDatesForCurrentMonth.map((absent, index) => (
              <div className='Attendanceevents' key={index}>
                <div className='Attendanceev'>
                  <div className='Attendanceevent'>
                    <div className='Attendancet'>
                      <div className='Attendancedot'></div>
                      <p>{absent.date.toDateString()}</p>
                    </div>
                    <h1>{absent.title}</h1>
                    <h2>{absent.reason}</h2>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='no-absent-message'>
              <h1>No absent this month...</h1>
            </div>
          )}
        </div>
      </div>
      {showModal && (
        <div className='Absentmodal'>
          <div className='Absentmodal-content'>
            <h2>Add Absent Date</h2>
            <label>Date: <input type='date' value={newDate.toISOString().substring(0, 10)} onChange={(e) => setNewDate(new Date(e.target.value))}/></label><br></br>
            <label>Reason: <input type='text' value={newReason} onChange={(e) => setNewReason(e.target.value)}/></label><br></br>
            <button onClick={handleAddAbsentDate}>Add</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendenceSheet;