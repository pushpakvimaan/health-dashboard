import React from 'react';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card" >
      <div className="card-content">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;