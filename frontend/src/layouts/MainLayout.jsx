import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutGrid, Users, ClipboardList, Sparkles, Calendar, Gavel } from 'lucide-react';
import TopNav from '../components/TopNav';

const MainLayout = () => {
  return (
    <div className="app-container">
      <div className="dashboard-wrapper">
        <div className="sidebar-top-logo">
          <img src="/tripsxing-logo.png" alt="Tripsxing" />
        </div>
        
        {/* Modern Sidebar Menu */}
        <nav className="nav">
          <ul className="nav__list">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
            >
              <LayoutGrid size={20} />
            </NavLink>

            <NavLink 
              to="/team" 
              className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
            >
              <Users size={20} />
            </NavLink>

            <NavLink 
              to="/assignments" 
              className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
            >
              <ClipboardList size={20} />
            </NavLink>

            <NavLink 
              to="/features" 
              className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
            >
              <Sparkles size={20} />
            </NavLink>

            <NavLink 
              to="/schedule" 
              className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
            >
              <Calendar size={20} />
            </NavLink>

            <NavLink 
              to="/governance" 
              className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
            >
              <Gavel size={20} />
            </NavLink>
          </ul>

          <div className="nav__circle-1"></div>
          <div className="nav__circle-2"></div>
          <div className="nav__square-1"></div>
          <div className="nav__square-2"></div>
        </nav>

        {/* Main Content Area */}
        <main className="main-content" style={{ padding: '32px 40px 40px 112px', flex: 1, height: '100%', overflowY: 'auto' }}>
          <TopNav />
          <div style={{ paddingTop: '40px' }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
