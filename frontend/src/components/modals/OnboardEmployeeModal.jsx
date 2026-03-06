import React, { useState, useEffect } from 'react';
import { X, Users, Save } from 'lucide-react';

const OnboardEmployeeModal = ({ isOpen, onClose, onAdd, employeeToEdit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    department: '',
    level: 'Standard',
    progress: 0,
    status: 'In Progress'
  });

  useEffect(() => {
    if (employeeToEdit) {
      const names = employeeToEdit.name.split(' ');
      setFormData({
        firstName: names[0] || '',
        lastName: names.slice(1).join(' ') || '',
        role: employeeToEdit.role,
        department: employeeToEdit.department || '',
        level: employeeToEdit.level || 'Standard',
        progress: employeeToEdit.progress,
        status: employeeToEdit.status
      });
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        role: '',
        department: '',
        level: 'Standard',
        progress: 0,
        status: 'In Progress'
      });
    }
  }, [employeeToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.role) return;

    const colors = ['#1B2559', '#2b3674', '#4318FF', '#01B574', '#FF8A44', '#FFB800'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const employeeData = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`,
      initial: `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`.toUpperCase(),
      color: employeeToEdit?.color || randomColor,
      progress: parseInt(formData.progress) || 0
    };

    if (employeeToEdit) {
      onAdd({ ...employeeData, id: employeeToEdit.id });
    } else {
      onAdd(employeeData);
    }
    
    onClose();
  };

  return (
    <div className="modal-overlay-v2" onClick={onClose}>
      <div className="modal-v2" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-v2">
          <div className="header-left-v2">
            <div className="header-icon-v2">
              {employeeToEdit ? <Save size={24} /> : <Users size={24} />}
            </div>
            <div className="header-text-v2">
              <h2>{employeeToEdit ? 'Update Employee' : 'Onboard New Employee'}</h2>
              <p>{employeeToEdit ? 'Modify employee onboarding details' : 'Initialize onboarding process'}</p>
            </div>
          </div>
          <button className="close-btn-v2" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSubmit} className="modal-body-v2">
          <div className="section-label-v2">Personal Details</div>

          <div className="form-row-v2">
            <div className="form-group-v2">
              <label>First Name <span className="required-v2">*</span></label>
              <input 
                type="text" 
                placeholder="Sarah" 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
            </div>
            <div className="form-group-v2">
              <label>Last Name <span className="required-v2">*</span></label>
              <input 
                type="text" 
                placeholder="Wilson" 
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="form-group-v2">
            <label>Job Title <span className="required-v2">*</span></label>
            <input 
              type="text" 
              placeholder="Senior Project Manager" 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              required
            />
          </div>

          <div className="section-label-v2">Assignment Details</div>

          <div className="form-row-v2">
            <div className="form-group-v2">
              <label>Department</label>
              <input 
                type="text" 
                placeholder="Operations" 
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
              />
            </div>
            <div className="form-group-v2">
              <label>Onboarding Level</label>
              <select 
                value={formData.level}
                onChange={(e) => setFormData({...formData, level: e.target.value})}
              >
                <option value="Standard">Standard</option>
                <option value="Advanced">Advanced</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
          </div>

          <div className="form-row-v2">
            <div className="form-group-v2">
              <label>Progress (%)</label>
              <input 
                type="number" 
                placeholder="0" 
                min="0" 
                max="100"
                value={formData.progress}
                onChange={(e) => setFormData({...formData, progress: e.target.value})}
              />
            </div>
            <div className="form-group-v2">
              <label>Status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
          </div>
          
          <button type="submit" style={{ display: 'none' }} id="onboard-submit"></button>
        </form>

        {/* Footer */}
        <div className="modal-footer-v2">
          <button className="btn-cancel-v2" onClick={onClose}>Cancel</button>
          <button className="btn-register-v2" onClick={() => document.getElementById('onboard-submit').click()}>
            {employeeToEdit ? <Save size={16} /> : <Users size={16} />}
            {employeeToEdit ? 'Save Changes' : 'Start Onboarding'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardEmployeeModal;
