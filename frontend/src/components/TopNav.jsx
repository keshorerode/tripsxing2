import React, { useState } from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NotificationsPanel from './NotificationsPanel';

const TopNav = () => {
  const [showNotif, setShowNotif] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="db-header">
      <div className="db-header-left">
        {/* Logo removed to avoid redundancy with sidebar logo */}
      </div>

      <div className="db-header-right">
        <div className="db-search">
          <Search className="search-icon" size={16} />
          <input type="text" placeholder="Search or type command" />
        </div>

        <div className="notif-wrapper">
          <div className="db-icon-btn" id="notif-trigger" onClick={() => setShowNotif(!showNotif)}>
            <Bell size={20} />
            <div className="notif-badge">3</div>
          </div>
          <NotificationsPanel isOpen={showNotif} onClose={() => setShowNotif(false)} />
        </div>

        <div className="db-icon-btn" onClick={() => navigate('/settings')}>
          <Settings size={20} />
        </div>
        
        <div className="user-profile-sm" onClick={() => navigate('/profile')}>
          <div className="avatar-sm">JW</div>
        </div>

      </div>
    </header>
  );
};

export default TopNav;


