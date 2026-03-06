import React, { useState, useEffect } from 'react';
import { X, Folder, Check, ChevronRight, CheckCircle2 } from 'lucide-react';

const AddRoleModal = ({ isOpen, onClose, onAdd, roleToEdit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'Custom'
  });

  useEffect(() => {
    if (roleToEdit) {
      setFormData({
        name: roleToEdit.name,
        description: roleToEdit.description,
        type: roleToEdit.type || 'Custom'
      });
    } else {
      setFormData({
        name: '',
        description: '',
        type: 'Custom'
      });
    }
    setStep(1);
  }, [roleToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, id: roleToEdit?.id, userCount: roleToEdit?.userCount || 0 });
  };

  return (
    <div className="modal-overlay-v2" onClick={onClose}>
      <form 
        className="modal-v2" 
        style={{ width: '800px' }} 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        {/* Header */}
        <div className="modal-header-v2">
          <div className="header-left-v2">
            <div className="header-icon-v2">
              <Folder size={24} />
            </div>
            <div className="header-text-v2">
              <h2>{roleToEdit ? 'Edit Role' : 'Add New Role'}</h2>
              <p>{roleToEdit ? 'Update permissions and boundaries' : 'Create a new role with permissions'}</p>
            </div>
          </div>
          <button type="button" className="close-btn-v2" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Stepper */}
        <div className="modal-stepper-v2">
          <div className={`step-item-v2 ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`}>
             <div className="step-circle-v2">{step > 1 ? <Check size={14} /> : '1'}</div>
             <span>Role Details</span>
          </div>
          <div className="step-line-v2"></div>
          <div className={`step-item-v2 ${step === 2 ? 'active' : ''}`}>
             <div className="step-circle-v2">2</div>
             <span>Permissions</span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="modal-body-v2">
          {step === 1 ? (
            <div className="form-grid-v2">
              <div className="form-group-v2">
                <label>Role Name <span className="required-v2">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. Reservation Manager" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group-v2">
                <label>Role Description</label>
                <textarea 
                  placeholder="Describe the responsibilities of this role..." 
                  style={{ height: '150px' }}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>
            </div>
          ) : (
            <div className="permissions-container-v2">
               <div className="perm-header-row-v2">
                  <span className="label-all-v2">ALL</span>
                  <span className="label-module-v2">MODULE</span>
               </div>

               <div className="perm-section-label-v2">GOVERNANCE</div>
               <div className="perm-row-v2">
                  <input type="checkbox" className="main-checkbox-v2" defaultChecked />
                  <div className="perm-info-v2">
                     <h4>User Management</h4>
                     <p style={{ fontSize: '12px', color: '#A3AED0' }}>Ability to add, delete and modify system users.</p>
                  </div>
               </div>

               <div className="perm-section-label-v2">OPERATIONS</div>
               <div className="perm-row-v2">
                  <input type="checkbox" className="main-checkbox-v2" />
                  <div className="perm-info-v2">
                     <h4>Vendor Engagement</h4>
                     <p style={{ fontSize: '12px', color: '#A3AED0' }}>Full CRUD access to the vendor module.</p>
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer-v2">
          <button type="button" className="btn-cancel-v2" onClick={onClose}>Cancel</button>
          {step === 1 ? (
            <button type="button" className="btn-register-v2" onClick={() => setStep(2)}>
              Next Step <ChevronRight size={18} />
            </button>
          ) : (
            <>
              <button type="button" className="btn-cancel-v2" onClick={() => setStep(1)}>Back</button>
              <button type="submit" className="btn-register-v2">
                {roleToEdit ? 'Update Role' : 'Save Role'} <CheckCircle2 size={18} />
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddRoleModal;

