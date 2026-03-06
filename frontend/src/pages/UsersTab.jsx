import React from 'react';
import { CheckCircle2, Zap, Users as UsersIcon, Edit3, Trash2 } from 'lucide-react';

const UsersTab = ({ users, onEdit, onDelete }) => {
  return (
    <div className="gov-main-grid">
      <div className="users-list-column">
        {users.map((user) => (
          <div key={user.id} className="user-profile-card" style={{ marginBottom: '24px' }}>
            <div className="user-card-actions">
              <button onClick={() => onEdit(user)} className="edit-btn"><Edit3 size={16} /></button>
              <button onClick={() => onDelete(user.id)} className="delete-btn"><Trash2 size={16} /></button>
            </div>
            <span className="corporate-id-badge">CORPORATE ID: TRP-99{user.id}0-X</span>
            <div className="user-profile-top">
              <div className="large-avatar">{user.firstName[0]}</div>
              <div className="user-info-text">
                <h2>{user.firstName} {user.lastName}</h2>
                <p>{user.role} • {user.status}</p>
              </div>
            </div>

            <div className="user-stats-row">
              <div className="stat-group">
                <label>EMAIL</label>
                <span>{user.email}</span>
              </div>
              <div className="stat-group">
                <label>CLEARANCE</label>
                <span>{user.clearance || 'Level 1'}</span>
              </div>
              <div className="stat-group">
                <label>TRUST SCORE</label>
                <span>{user.trustScore || '100%'}</span>
              </div>
            </div>

            <div className="decision-powers">
              <h3>AUTHORIZED DECISION POWERS</h3>
              <div className="power-list">
                {[
                  'Finalize Vendor Contracts',
                  'Assign Employee Roles',
                ].map((power, i) => (
                  <div key={i} className="power-item">
                    <CheckCircle2 size={18} className="check" />
                    <span>{power}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="authority-actions-card">
        <h3>Recent Authority Actions</h3>
        <div className="action-list">
          <div className="action-item">
            <div className="action-icon-box green"><Zap size={16} /></div>
            <div className="action-info">
              <p>Approved <strong>Elite Fitness</strong> provider</p>
              <span>2 hours ago</span>
            </div>
          </div>
          <div className="action-item">
            <div className="action-icon-box blue"><UsersIcon size={16} /></div>
            <div className="action-info">
              <p>Onboarded <strong>12 new employees</strong></p>
              <span>Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTab;

