import React from 'react';
import { X, Mail, Phone, Briefcase, Building2, Award, Trash2, Edit3 } from 'lucide-react';

const EmployeeDetailModal = ({ employee, isOpen, onClose, onDelete, onEdit }) => {
  if (!isOpen || !employee) return null;

  return (
    <div className="modal-overlay-v2" onClick={onClose}>
      <div className="modal-v2 detail-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-v2">
          <div className="vendor-branding-v2">
            <div className="large-initial-v2" style={{ backgroundColor: employee.color }}>{employee.initial}</div>
            <div className="vendor-maintitle-v2">
              <h3>{employee.name}</h3>
              <p>{employee.role}</p>
            </div>
          </div>
          <div className="header-right-v2">
            <div className={`vendor-status-badge-v2 ${employee.status.toLowerCase().replace(' ', '-')}`}>
              {employee.status}
            </div>
            <button className="close-btn-v2" onClick={onClose}><X size={18} /></button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="modal-body-v2">
          <div className="rating-summary-v2">
             <div className="score-main-v2">
               <span className="big-rating-v2">{employee.progress}%</span>
               <div className="stars-wrap-v2" style={{ width: '100%', height: '8px', background: '#F4F7FE', borderRadius: '10px', overflow: 'hidden', margin: '10px 0' }}>
                 <div style={{ width: `${employee.progress}%`, height: '100%', backgroundColor: employee.color }}></div>
               </div>
               <span className="review-count-v2">Onboarding Completion Progress</span>
             </div>
          </div>

          <div className="detail-grid-v2">
            <div className="detail-info-card-v2">
              <div className="section-label-v2">Employee Contact</div>
              <div className="contact-list-v2">
                <div className="contact-item-v2"><Mail size={16} /> <span>{employee.name.toLowerCase().replace(' ', '.')}@tripsxing.com</span></div>
                <div className="contact-item-v2"><Phone size={16} /> <span>+1 555-0{employee.id || 123}-4567</span></div>
                <div className="contact-item-v2"><Briefcase size={16} /> <span>{employee.role}</span></div>
                <div className="contact-item-v2"><Building2 size={16} /> <span>{employee.department || 'Operations'}</span></div>
              </div>
            </div>

            <div className="detail-info-card-v2">
              <div className="section-label-v2">Onboarding Track</div>
              <div className="compliance-list-v2">
                <div className="comp-item-v2"><Award size={16} /> <span>{employee.level || 'Standard'} Level</span></div>
                <div className="comp-item-v2"><Building2 size={16} /> <span>Departmental Access: Active</span></div>
                <div className="comp-item-v2"><X size={16} /> <span>Compliance Training: {employee.progress === 100 ? 'Verified' : 'Pending'}</span></div>
              </div>
            </div>
          </div>

          <div className="about-vendor-v2">
            <div className="section-label-v2">Status Notes</div>
            <p>
              {employee.name} is currently in the {employee.status.toLowerCase()} phase of {employee.level?.toLowerCase() || 'standard'} onboarding. 
              {employee.progress === 100 
                ? ' All modules have been completed successfully. Ready for full operational duties.' 
                : ` Remaining tasks include departmental orientation and tool setup. Currently at ${employee.progress}% completion.`}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer-v2">
            <button 
              className="btn-cancel-v2" 
              style={{ color: '#EE5D50', borderColor: '#FFEBEB' }}
              onClick={() => onDelete(employee.id)}
            >
              <Trash2 size={16} /> Delete Record
            </button>
            <div style={{ flex: 1 }}></div>
            <button className="btn-cancel-v2" onClick={() => onEdit(employee)}>
              <Edit3 size={16} /> Edit Details
            </button>
            <button className="btn-cancel-v2" onClick={onClose}>Close</button>
            <button className="btn-register-v2" onClick={onClose}>
              View Checklist
            </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailModal;
