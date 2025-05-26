import React from 'react';
// import HealthStatusCards from './HealthStatusCards';
// import { healthIndicators } from '../data/healthData';
import '../styles/AnatomySection.css';
import Anotomy1 from '../assets/Anotomy1.png';
function AnatomySection() {
  return (
    <div className="anatomy-section">
        <div className="human-figure">
         <img src={Anotomy1} alt="Anatomy" className="anatomy-img" />
        </div>
    </div>
  );
}

export default AnatomySection;