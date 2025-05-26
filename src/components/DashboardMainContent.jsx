import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import '../styles/Dashboard.css';

function DashboardMainContent() {
  return (
    <main className="dashboard-content">
        
      <div className="dashboard-container">
        <div className='dashboard-arrange'>
        <DashboardOverview />
         </div>
        <div className="dashboard-grid">
          <div className="calendar-section">
            <CalendarView />
             <UpcomingSchedule />
          </div>
        </div>
      </div>
     
    </main>
  );
}

export default DashboardMainContent;