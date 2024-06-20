import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import './EventCalender.css';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

function EventCalender() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([
        { title: 'Designer Conference', date: new Date(2024, 4, 18), time: '10:30 AM', description: '83 Wilderman Mission' },
        { title: 'National level Project Conference', date: new Date(2024, 4, 18), time: '10:30 AM', description: 'TECH EXPO 2024', mode: 'Hybrid Mode' },
    ]);
    const [showForm, setShowForm] = useState(false);
    const [newEvent, setNewEvent] = useState(
        { title: '', date: new Date(), time: '', description: '', mode: ''}
    );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'date') {
        setNewEvent(prev => ({ ...prev, [name]: new Date(value) }));  
        } else {
        setNewEvent(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleAddEvent = () => {
        setShowForm(true);
    };

    const handleCancel = () => {
        setShowForm(false);
        setNewEvent(
            { title: '', date: new Date(), time: '', description: '', mode: ''}
        );
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setEvents(prevEvents => [...prevEvents, newEvent]);
        setShowForm(false);
        setNewEvent(
            { title: '', date: new Date(), time: '', description: '', mode: ''}
        );
    };

    const filteredEvents = events.filter(event =>
        event.date.toDateString() === selectedDate.toDateString()
    );
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
          const day = date.getDay();
          if (day === 0) {
            return 'sunday';
          } else if (day >= 1 && day <= 5) {
            return 'weekday';
          } else {
            return 'saturday';
          }
        }
      };

    return (
        <div className='Eventcontener'>
            <div className='Attendancecal'>
            <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
                <h1>Calendar</h1>
                <FontAwesomeIcon icon={faPlus} className='Attendanceicon' onClick={handleAddEvent} />
            </div>
            <div className='Eventday'>
                <div className='Eventdays'>
                    <Calendar className={Calendar} onChange={handleDateChange} value={selectedDate} tileClassName={tileClassName} />
                </div>
                <div className='Eventere'>
                    <div className='EventIcon'>
                        <h2 className='EventUpEvent'>Upcoming Events</h2>
                    </div>
                    {filteredEvents.map(event => (
                        <div className='Eventev' key={event.title}>
                            <div className='Eventevents'>
                                <div className='Eventeev'>
                                    <div className='Eventevent'>
                                        <Link to={`/Project`}>
                                            <div className='Eventt'>
                                                <div className='Eventdot'></div>
                                                <p>{event.time}</p>
                                            </div>
                                            <h1>{event.title}</h1>
                                            <h2>{event.description}</h2>
                                            <h3>{event.mode}</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                {showForm && (
                    <div className='Eventmodal-content'>
                    <form className='EventForm' onSubmit={handleFormSubmit}>
                        <input type='text' name='title' value={newEvent.title} onChange={handleInputChange} placeholder='Event Title' required /><br></br>
                        <input type='date' name='date' value={newEvent.date.toISOString().substr(0, 10)} onChange={handleInputChange} required /><br></br>
                        <input type='time' name='time' value={newEvent.time} onChange={handleInputChange} required/><br></br>
                        <input type='text' name='description' value={newEvent.description} onChange={handleInputChange} placeholder='Description'/><br></br>
                        <input type='text' name='mode' value={newEvent.mode} onChange={handleInputChange} placeholder='Mode (Optional)'/><br></br>
                        <div className='EventFormButtons'>
                            <button type='submit'>Add Event</button>
                            <button type='button' onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                    </div>
                )}
        </div>
    );
}

export default EventCalender;