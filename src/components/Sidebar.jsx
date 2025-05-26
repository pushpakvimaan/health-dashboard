
// import { FiSettings } from 'react-icons/fi';
// import { navItems } from '../data/navigation';
// import '../styles/Sidebar.css';

// function Sidebar() {
//   return (
//     <nav className="sidebar">
//       <div className="sidebar-content">
//         <div className="sidebar-section">
//           <h3 className="sidebar-heading">General</h3>
//           <ul className="nav-list">
//             {navItems.map((item, index) => (
//               <li key={index} className="nav-item">
//                 <a href="#" className="nav-link">
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
      
//       {/* Settings button at the bottom */}
//       <div className="sidebar-footer">
//         <button className="settings-button">
//           <FiSettings className="settings-icon" />
//           <span>Settings</span>
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Sidebar;



// src/components/Sidebar.js
import { 
  FiHome, 
  FiClock, 
  FiCalendar, 
  FiBookmark, 
  FiBarChart2,
  FiMessageSquare,
  FiHelpCircle,
  FiSettings 
} from 'react-icons/fi';
import { navItems } from '../data/navigation';
import '../styles/Sidebar.css';

// Create an icon mapping object
const iconComponents = {
  FiHome,
  FiClock,
  FiCalendar,
  FiBookmark,
  FiBarChart2,
  FiMessageSquare,
  FiHelpCircle
};

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        {navItems.map((section, index) => (
          <div key={index} className="sidebar-section">
            <h3 className="sidebar-heading">{section.section}</h3>
            <ul className="nav-list">
              {section.items.map((item, itemIndex) => {
                const IconComponent = iconComponents[item.icon];
                return (
                  <li key={itemIndex} className="nav-item">
                    <a href="#" className="nav-link">
                      {IconComponent && <IconComponent className="nav-icon" />}
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="sidebar-footer">
        <button className="settings-button">
          <FiSettings className="settings-icon" />
          <span>Settings</span>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;