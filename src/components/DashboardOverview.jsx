
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
// import ActivitySection from './ActivityFeed';
import '../styles/DashboardView.css';
import ActivityBars from './ActivityBars';

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <h2>Dashboard</h2>
      <div className="overview-content">
        <div className="anatomy-section">
             <AnatomySection />
        </div>
        <div className="health-card-section">
             <HealthStatusCards />
        </div>
        
        </div>
        <div className="dashboard-arr">
         <ActivityBars />
         </div>
      
    </div>
  );
}

export default DashboardOverview;