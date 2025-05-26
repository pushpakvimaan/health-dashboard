import React from 'react';
import '../styles/ActivityBar.css';

const ActivityBars = () => {
  return (
    <div className="activity-container">
      <h2 className="activity-title">Activity</h2>
      <p className="appointments-count">3 appointments on this week</p>
      
      <div className="graph-bars">
        {/* Monday - Empty */}
        <div className="bar-container">
          <div className="bar" style={{ height: '90px' }}></div>
          <span className="day-label">Mon</span>
        </div>
        
        {/* Tuesday - Has appointment (higher bar) */}
        <div className="bar-container">
          <div className="bar" style={{ height: '70px' }}></div>
          <span className="day-label">Tue</span>
        </div>
        
        {/* Wednesday - Empty */}
        <div className="bar-container">
          <div className="bar" style={{ height: '70px' }}></div>
          <span className="day-label">Wed</span>
        </div>
        
        {/* Thursday - Empty */}
        <div className="bar-container">
          <div className="bar" style={{ height: '50px' }}></div>
          <span className="day-label">Thurs</span>
        </div>
        
        {/* Friday - Empty */}
        <div className="bar-container">
          <div className="bar" style={{ height: '80px' }}></div>
          <span className="day-label">Fri</span>
        </div>
        
        {/* Saturday - Empty */}
        <div className="bar-container">
          <div className="bar" style={{ height: '55px' }}></div>
          <span className="day-label">Sat</span>
        </div>
        
        {/* Sunday - Empty */}
        <div className="bar-container">
          <div className="bar" style={{ height: '75px' }}></div>
          <span className="day-label">Sun</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityBars;