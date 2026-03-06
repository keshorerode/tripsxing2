import React, { useState, useEffect } from 'react';
import { X, Calendar, Save } from 'lucide-react';

const ScheduleMeetingModal = ({ isOpen, onClose, onAdd, meetingToEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    priority: 'Medium',
    startTime: '',
    endTime: '',
    location: '',
    phase: 'Target Activities & Planning',
    status: 'Awaiting Response'
  });

  useEffect(() => {
    if (meetingToEdit) {
      setFormData({
        title: meetingToEdit.title,
        date: meetingToEdit.date,
        priority: meetingToEdit.priority || 'Medium',
        startTime: meetingToEdit.startTime || '',
        endTime: meetingToEdit.endTime || '',
        location: meetingToEdit.location || '',
        phase: meetingToEdit.phase || 'Target Activities & Planning',
        status: meetingToEdit.status || 'Awaiting Response'
      });
    } else {
      setFormData({
        title: '',
        date: '',
        priority: 'Medium',
        startTime: '',
        endTime: '',
        location: '',
        phase: 'Target Activities & Planning',
        status: 'Awaiting Response'
      });
    }
  }, [meetingToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date) return;

    if (meetingToEdit) {
      onAdd({ ...formData, id: meetingToEdit.id });
    } else {
      onAdd(formData);
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
              {meetingToEdit ? <Save size={24} /> : <Calendar size={24} />}
            </div>
            <div className="header-text-v2">
              <h2>{meetingToEdit ? 'Update Meeting' : 'Schedule Corporate Meeting'}</h2>
              <p>{meetingToEdit ? 'Modify scheduled meeting details' : 'Plan a new priority meeting'}</p>
            </div>
          </div>
          <button className="close-btn-v2" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSubmit} className="modal-body-v2">
          <div className="section-label-v2">Meeting Details</div>

          <div className="form-group-v2">
            <label>Meeting Title <span className="required-v2">*</span></label>
            <input 
              type="text" 
              placeholder="Architecture Sync" 
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="form-row-v2">
            <div className="form-group-v2">
              <label>Date <span className="required-v2">*</span></label>
              <input 
                type="date" 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
              />
            </div>
            <div className="form-group-v2">
              <label>Priority</label>
              <select 
                value={formData.priority}
                onChange={(e) => setFormData({...formData, priority: e.target.value})}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div className="form-row-v2">
            <div className="form-group-v2">
              <label>Start Time</label>
              <input 
                type="time" 
                value={formData.startTime}
                onChange={(e) => setFormData({...formData, startTime: e.target.value})}
              />
            </div>
            <div className="form-group-v2">
              <label>End Time</label>
              <input 
                type="time" 
                value={formData.endTime}
                onChange={(e) => setFormData({...formData, endTime: e.target.value})}
              />
            </div>
          </div>

          <div className="section-label-v2">Venue & Logistics</div>

          <div className="form-group-v2">
            <label>Location</label>
            <input 
              type="text" 
              placeholder="Executive Conference Room B" 
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
          
          <button type="submit" style={{ display: 'none' }} id="meeting-submit"></button>
        </form>

        {/* Footer */}
        <div className="modal-footer-v2">
          <button className="btn-cancel-v2" onClick={onClose}>Cancel</button>
          <button className="btn-register-v2" onClick={() => document.getElementById('meeting-submit').click()}>
            {meetingToEdit ? <Save size={16} /> : <Calendar size={16} />}
            {meetingToEdit ? 'Save Changes' : 'Schedule Meeting'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeetingModal;

