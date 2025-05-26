import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingAppointments } from '../data/appointments';
import '../styles/UpcomingSchedule.css'

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      
     <div className="schedule-day">
  <h4 className="day-heading">Thursday</h4>
  <div className="appointment-cards">
    {upcomingAppointments
      .filter(app => app.day === 'Thursday')
      .map((appointment, index) => (
        <SimpleAppointmentCard key={index} {...appointment} />
      ))}
  </div>
</div>

   <div className="schedule-day">
  <h4 className="day-heading">On Saturday</h4>
  <div className="appointment-cards">
    {upcomingAppointments
      .filter(app => app.day === 'Saturday')
      .map((appointment, index) => (
        <SimpleAppointmentCard key={index} {...appointment} />
      ))}
  </div>
</div>
      
    </div>
  );
}

export default UpcomingSchedule;