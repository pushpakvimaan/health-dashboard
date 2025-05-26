import React from 'react';
import '../styles/Header.css';
import { 
  FaBell
} from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="app-title">Healthcare.</h1>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <span className="notification-icon"><FaBell className='health-icon bell'/></span>
        </div>
      </div>
      
      <div className="header-right">
        <div className="user-profile">
          <div className="avatar">👤</div>
        </div>
        <div className="add-btn">
            <button className="add-button">+</button>
        </div>
        
      </div>
    </header>
  );
}

export default Header;

