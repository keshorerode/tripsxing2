import React, { useState, useEffect } from 'react';
import { X, Users, UserPlus } from 'lucide-react';

const AddUserModal = ({ isOpen, onClose, onAdd, userToEdit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'Employee',
    status: 'Active'
  });

  useEffect(() => {
    if (userToEdit) {
      setFormData({
        firstName: userToEdit.firstName,
        lastName: userToEdit.lastName,
        email: userToEdit.email,
        role: userToEdit.role,
        status: userToEdit.status
      });
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        role: 'Employee',
        status: 'Active'
      });
    }
  }, [userToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, id: userToEdit?.id });
  };

  return (
    <div className="modal-overlay-v2" onClick={onClose}>
      <form className="modal-v2" onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
        {/* Header */}
        <div className="modal-header-v2">
          <div className="header-left-v2">
            <div className="header-icon-v2">
              <Users size={24} />
            </div>
            <div className="header-text-v2">
              <h2>{userToEdit ? 'Edit User' : 'Add New User'}</h2>
              <p>{userToEdit ? 'Update user account details' : 'Create a new user account'}</p>
            </div>
          </div>
          <button type="button" className="close-btn-v2" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="modal-body-v2">
          <div className="section-label-v2">User Credentials</div>

          <div className="form-row-v2">
            <div className="form-group-v2">
              <label>First Name <span className="required-v2">*</span></label>
              <input 
                type="text" 
                placeholder="John" 
                required 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div className="form-group-v2">
              <label>Last Name <span className="required-v2">*</span></label>
              <input 
                type="text" 
                placeholder="Doe" 
                required 
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group-v2">
            <label>Email Address <span className="required-v2">*</span></label>
            <input 
              type="email" 
              placeholder="john.doe@gromaxx.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="section-label-v2">Role & Access</div>

          <div className="form-row-v2">
            <div className="form-group-v2">
              <label>Status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="form-group-v2">
              <label>Assign Role <span className="required-v2">*</span></label>
              <select 
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                required
              >
                <option value="">Select a role</option>
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Employee</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer-v2">
          <button type="button" className="btn-cancel-v2" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn-register-v2">
            <UserPlus size={16} /> {userToEdit ? 'Update User' : 'Save User'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserModal;


