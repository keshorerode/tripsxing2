import React, { useState } from 'react';
import { Shield, Smartphone, Globe, Lock, Mail } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true
  });

  return (
    <div className="settings-page">
      <div className="page-header">
        <h2>App Settings</h2>
      </div>

      <div className="settings-container">
        <div className="settings-nav">
          <button className="settings-nav-item active">General</button>
          <button className="settings-nav-item">Account & Security</button>
          <button className="settings-nav-item">Notification Preferences</button>
          <button className="settings-nav-item">Device Management</button>
        </div>

        <div className="settings-main-content">
          <section className="settings-section">
            <h3>Notification Settings</h3>
            <div className="settings-card-list">
              <div className="setting-control-row">
                <div className="setting-info">
                  <div className="setting-icon-bg"><Mail size={18} /></div>
                  <div className="setting-text">
                    <h4>Email Notifications</h4>
                    <p>Receive weekly summary and important alerts via email.</p>
                  </div>
                </div>
                <div 
                  className={`toggle-switch ${notifications.email ? 'on' : ''}`}
                  onClick={() => setNotifications({...notifications, email: !notifications.email})}
                >
                  <div className="toggle-thumb"></div>
                </div>
              </div>

              <div className="setting-control-row">
                <div className="setting-info">
                  <div className="setting-icon-bg"><Smartphone size={18} /></div>
                  <div className="setting-text">
                    <h4>Push Notifications</h4>
                    <p>Get real-time updates on your mobile devices.</p>
                  </div>
                </div>
                <div 
                  className={`toggle-switch ${notifications.push ? 'on' : ''}`}
                  onClick={() => setNotifications({...notifications, push: !notifications.push})}
                >
                  <div className="toggle-thumb"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="settings-section">
            <h3>App Version</h3>
            <div className="settings-card-list">
              <div className="setting-simple-link">
                 <div className="setting-icon-bg"><Globe size={18} /></div>
                 <span>v2.4.0 (Latest Release)</span>
                 <div className="status-tag-green">STABLE</div>
              </div>
            </div>
          </section>


          <section className="settings-section">
            <h3>Security</h3>
            <div className="settings-card-list">
               <div className="setting-simple-link">
                  <div className="setting-icon-bg"><Lock size={18} /></div>
                  <span>Change Password</span>
                  <div className="chevron-right"></div>
               </div>
               <div className="setting-simple-link">
                  <div className="setting-icon-bg"><Shield size={18} /></div>
                  <span>Two-Factor Authentication</span>
                  <span className="status-tag-red">OFF</span>
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
