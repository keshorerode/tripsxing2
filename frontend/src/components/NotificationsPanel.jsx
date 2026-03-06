import React from 'react';
import { Bell, CheckCircle2, AlertTriangle, Calendar, X } from 'lucide-react';

const NotificationsPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: <CheckCircle2 size={16} />,
      title: 'New Vendor Approved',
      time: '2 hours ago',
      desc: 'Elite Fitness has been successfully verified and added to the platform.',
      color: '#01B574'
    },
    {
      id: 2,
      type: 'reminder',
      icon: <Calendar size={16} />,
      title: 'Board Meeting Tomorrow',
      time: '5 hours ago',
      desc: 'Final Requirements Meeting at 11:15 AM in Executive Wing Room 4.',
      color: '#4318FF'
    },
    {
      id: 3,
      type: 'warning',
      icon: <AlertTriangle size={16} />,
      title: 'Action Required: Budget Sync',
      time: '1 day ago',
      desc: 'The weekly budget report for Activity Planning is missing some values.',
      color: '#EE5D50'
    }
  ];

  return (
    <div className="notif-popover">
      <div className="notif-header">
        <h3>Notifications</h3>
        <div className="notif-actions">
           <button className="mark-read-btn">Mark all read</button>
           <button className="close-notif-btn" onClick={onClose}><X size={16} /></button>
        </div>
      </div>
      
      <div className="notif-list-mini">
        {notifications.map((notif) => (
          <div key={notif.id} className="notif-mini-item">
            <div className="notif-mini-icon" style={{ backgroundColor: `${notif.color}10`, color: notif.color }}>
              {notif.icon}
            </div>
            <div className="notif-mini-text">
              <div className="notif-mini-top-row">
                 <h4>{notif.title}</h4>
                 <span className="notif-time-small">{notif.time}</span>
              </div>
              <p>{notif.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="notif-footer">
        <button className="view-all-notif-btn">View All History</button>
      </div>
    </div>
  );
};

export default NotificationsPanel;
