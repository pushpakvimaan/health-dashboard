


import { 
  FaHeart, 
  FaTooth, 
  FaBone,
  FaLungs,
  FaEye,
  FaBrain,
  FaProcedures
} from 'react-icons/fa';
import { healthCards } from '../data/healthData';
import '../styles/HealthStatusCards.css';

function HealthStatusCards() {
  // Get icon based on card title using react-icons
  const getIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('heart')) return <FaHeart className="health-icon heart" />;
    if (lowerTitle.includes('teeth') || lowerTitle.includes('dental')) return <FaTooth className="health-icon teeth" />;
    if (lowerTitle.includes('bone')) return <FaBone className="health-icon bone" />;
    if (lowerTitle.includes('lung') || lowerTitle.includes('respiratory')) return <FaLungs className="health-icon lungs" />;
    if (lowerTitle.includes('eye') || lowerTitle.includes('vision')) return <FaEye className="health-icon eye" />;
    if (lowerTitle.includes('brain') || lowerTitle.includes('neurological')) return <FaBrain className="health-icon brain" />;
    if (lowerTitle.includes('blood') || lowerTitle.includes('hematology')) return <FaProcedures className="health-icon blood" />;
    
    return <FaHeartbeat className="health-icon default" />; // default icon
  };


  // Convert status to seek bar value (0-100)
  const getStatusValue = (status) => {
    switch (status.toLowerCase()) {
      case 'excellent': return 90;
      case 'good': return 70;
      case 'fair': return 50;
      case 'poor': return 30;
      case 'critical': return 10;
      default: return 0;
    }
  };

  return (
    <div className="health-cards-container">
      {healthCards.map((card, index) => {
        const value = getStatusValue(card.status);
        const statusClass = card.status.toLowerCase();
        const icon = getIcon(card.title);

        return (
          <div key={index} className={`health-card ${statusClass}`}>
            <div className="card-header">
              <div className="card-title-wrapper">
                {icon}
                <h3>{card.title}</h3>
              </div>
            </div>
            
            <div className="static-seekbar-container">
              <span className="card-date">{card.date}</span>
              <div className="static-seekbar-track">
                
                <div 
                  className="static-seekbar-fill"
                  style={{ width: `${value}%` }}
                ></div>
              </div>
              <div className="seekbar-labels">
                <span className="current-value"></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HealthStatusCards;