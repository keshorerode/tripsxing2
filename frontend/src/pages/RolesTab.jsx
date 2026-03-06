import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';

const RolesTab = ({ roles, onEdit, onDelete }) => {
  return (
    <div className="roles-grid">
      {roles.map((role) => (
        <div key={role.id} className="role-card">
          <div className="role-card-actions">
            <button onClick={() => onEdit(role)} className="edit-btn"><Edit3 size={14} /></button>
            <button onClick={() => onDelete(role.id)} className="delete-btn"><Trash2 size={14} /></button>
          </div>
          <div className="role-card-header">
            <div className="role-initial">{role.name.substring(0, 2).toUpperCase()}</div>
            <div className="role-header-text">
              <h3>{role.name}</h3>
              <p>{role.description}</p>
            </div>
          </div>
          
          <div className="role-details-row">
            <div className="role-detail-stat">
              <label>USERS</label>
              <span>{role.userCount}</span>
            </div>
            <div className="role-detail-stat">
              <label>TYPE</label>
              <span>{role.type}</span>
            </div>
          </div>

          <div className="role-card-footer">
            <span className="role-tag">{role.type} Role</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RolesTab;

