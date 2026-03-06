import React, { useState } from 'react';
import { Calendar, Users, Building2, CheckCircle2, Trash2, Edit3, Clock, MapPin } from 'lucide-react';
import ScheduleMeetingModal from '../components/modals/ScheduleMeetingModal';

const Meetings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meetingToEdit, setMeetingToEdit] = useState(null);
  
  const [meetings, setMeetings] = useState([
    { 
      id: 1, 
      title: 'Final Requirements Meeting', 
      date: '2026-03-12', 
      startTime: '11:15', 
      endTime: '13:00', 
      location: 'Tripsxing Executive Wing', 
      phase: 'Target Activities & Planning', 
      status: 'Awaiting Response',
      priority: 'High'
    },
    { 
      id: 2, 
      title: 'Initial Architecture Sync', 
      date: '2026-02-28', 
      startTime: '09:00', 
      endTime: '10:30', 
      location: 'Zoom Conference', 
      phase: 'Planning', 
      status: 'Completed',
      priority: 'Medium'
    },
    { 
      id: 3, 
      title: 'Vendor Compatibility Audit', 
      date: '2026-02-24', 
      startTime: '14:00', 
      endTime: '15:30', 
      location: 'Conference Room C', 
      phase: 'Audit', 
      status: 'Completed',
      priority: 'Low'
    }
  ]);

  const handleAddMeeting = (data) => {
    if (data.id) {
      setMeetings(meetings.map(m => m.id === data.id ? { ...m, ...data } : m));
    } else {
      const newId = meetings.length > 0 ? Math.max(...meetings.map(m => m.id)) + 1 : 1;
      setMeetings([{ ...data, id: newId }, ...meetings]);
    }
    setIsModalOpen(false);
    setMeetingToEdit(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this meeting?')) {
      setMeetings(meetings.filter(m => m.id !== id));
    }
  };

  const handleEdit = (meeting) => {
    setMeetingToEdit(meeting);
    setIsModalOpen(true);
  };

  const handleConfirm = (id) => {
    setMeetings(meetings.map(m => m.id === id ? { ...m, status: 'Completed' } : m));
  };

  const mainMeeting = meetings.find(m => m.status !== 'Completed') || meetings[0];
  const otherMeetings = meetings.filter(m => m.id !== mainMeeting.id);

  const formatDate = (dateStr) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  const formatTime = (time) => {
    if (!time) return 'TBD';
    return time;
  };

  return (
    <div className="corporate-meetings">
      <div className="page-header">
        <div className="header-titles">
          <h2>Corporate Meetings</h2>
          <p>Schedule and manage high-priority corporate syncs</p>
        </div>
        <button className="btn-schedule-meeting" onClick={() => { setMeetingToEdit(null); setIsModalOpen(true); }}>
          <Calendar size={18} /> Schedule Meeting
        </button>
      </div>

      <div className="meetings-grid">
        {mainMeeting && (
          <div className="main-meeting-card">
            <div className="meeting-header-row">
              <div className="meeting-title-section">
                <div className="meeting-icon-badge">
                  <Calendar size={24} />
                </div>
                <div className="meeting-title-content">
                  <h2>{mainMeeting.title}</h2>
                  <p>Phase: {mainMeeting.phase}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span className={`badge-priority-${mainMeeting.status === 'Completed' ? 'green' : 'orange'}`}>
                  {mainMeeting.status === 'Completed' ? 'ATTENDANCE CONFIRMED' : 'AWAITING RESPONSE'}
                </span>
                <div className="meeting-quick-actions-v2">
                   <button className="edit-btn" onClick={() => handleEdit(mainMeeting)}><Edit3 size={16} /></button>
                   <button className="delete-btn" onClick={() => handleDelete(mainMeeting.id)}><Trash2 size={16} /></button>
                </div>
              </div>
            </div>

            <div className="meeting-details-inner-card">
              <div className="detail-field">
                <label>DATE</label>
                <span>{formatDate(mainMeeting.date)}</span>
              </div>
              <div className="detail-field">
                <label>TIME</label>
                <span>{formatTime(mainMeeting.startTime)} - {formatTime(mainMeeting.endTime)}</span>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <span>{mainMeeting.location || 'TBD'}</span>
              </div>
              <div className="detail-field">
                <label>PRIORITY</label>
                <span className={`priority-text ${mainMeeting.priority?.toLowerCase()}`}>{mainMeeting.priority}</span>
              </div>
            </div>

            {mainMeeting.status === 'Completed' ? (
              <div className="confirmation-success">
                <CheckCircle2 color="#01B574" size={20} />
                <span>You are scheduled to attend this meeting.</span>
              </div>
            ) : (
              <button className="btn-confirm-navy" onClick={() => handleConfirm(mainMeeting.id)}>
                Confirm Attendance
              </button>
            )}
          </div>
        )}

        <div className="recent-meetings-card">
          <h3>Other Meetings</h3>
          <div className="recent-list-rows">
            {otherMeetings.map((meeting) => (
              <div key={meeting.id} className="recent-row-item">
                <span className="recent-row-date">{new Date(meeting.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                <span className="recent-row-name">{meeting.title}</span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                   <span className={meeting.status === 'Completed' ? 'badge-completed-green' : 'badge-pending-orange'}>
                     {meeting.status}
                   </span>
                   <button className="recent-edit-btn" onClick={() => handleEdit(meeting)}><Edit3 size={14} /></button>
                   <button className="recent-delete-btn" onClick={() => handleDelete(meeting.id)}><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
            {otherMeetings.length === 0 && (
              <p style={{ color: '#8E9ABB', textAlign: 'center', padding: '20px' }}>No other meetings scheduled.</p>
            )}
          </div>
        </div>
      </div>

      <ScheduleMeetingModal 
        isOpen={isModalOpen} 
        onClose={() => { setIsModalOpen(false); setMeetingToEdit(null); }} 
        onAdd={handleAddMeeting}
        meetingToEdit={meetingToEdit}
      />
    </div>
  );
};

export default Meetings;


