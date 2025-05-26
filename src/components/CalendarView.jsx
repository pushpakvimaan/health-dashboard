import React from 'react';
import { calendarData } from '../data/calendar';
import '../styles/CalendarView.css';

function CalendarView() {
  // Static appointment cards data
  const appointmentCards = [
    {
      id: 1,
      title: "Dentist  Specialisttt",
      time: "09:00-11:00 ",
      type: "dental",
      name: "Dr. Sam"
    },
    {
      id: 2,
      title: "Physiotherapy Appointment",
      time: "11:00-12:00 ",
      date: "28 Oct 2021",
      name: "Dr. Dhurv Kapoor"
    }
  ];

  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      
      {/* Calendar Grid */}
      <table className="calendar-grid">
        <thead>
          <tr>
            {['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {calendarData.days.map((day, index) => (
              <td key={index}>
                <div className="day-number">{day.number}</div>
                {day.times.map((time, timeIndex) => (
                  <div key={timeIndex} className="appointment-time">
                    {time || ''}
                  </div>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Appointment Cards Section */}
      <div className="appointment-cards-container">
        <div className="appointment-cards">
          {appointmentCards.map(card => (
            <div key={card.id} className={`appointment-card ${card.type}`}>
              <div className="card-icon">
                {card.type === 'dental' ? '🦷' : '💪'}
              </div>
              <div className="card-content">
                <h5>{card.title}</h5>
                <div className="card-details">
                  <span>{card.name}</span>
                  <span>{card.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarView;