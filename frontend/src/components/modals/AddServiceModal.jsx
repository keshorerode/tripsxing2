import React, { useState, useEffect } from 'react';
import { X, Save, Package } from 'lucide-react';

const AddServiceModal = ({ isOpen, onClose, onAdd, serviceToEdit, vendorId }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    status: 'Active'
  });

  useEffect(() => {
    if (serviceToEdit) {
      setFormData({
        name: serviceToEdit.name,
        description: serviceToEdit.description,
        price: serviceToEdit.price,
        category: serviceToEdit.category,
        status: serviceToEdit.status
      });
    } else {
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        status: 'Active'
      });
    }
  }, [serviceToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    const serviceData = {
      ...formData,
      vendor_id: vendorId
    };

    if (serviceToEdit) {
      onAdd({ ...serviceData, id: serviceToEdit.id });
    } else {
      onAdd(serviceData);
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
              <Package size={24} />
            </div>
            <div className="header-text-v2">
              <h2>{serviceToEdit ? 'Update Service' : 'Add New Service'}</h2>
              <p>{serviceToEdit ? 'Modify service attributes' : 'Define a new corporate offering'}</p>
            </div>
          </div>
          <button className="close-btn-v2" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="modal-body-v2">
          <div className="form-group-v2">
            <label>Service Name <span className="required-v2">*</span></label>
            <input 
              type="text" 
              placeholder="e.g. Premium Business Travel" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group-v2">
            <label>Description</label>
            <textarea 
              placeholder="Detailed explanation of the service..." 
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows="3"
              style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #E0E5F2', fontSize: '14px' }}
            />
          </div>

          <div className="form-row-v2">
            <div className="form-group-v2">
              <label>Standard Rate <span className="required-v2">*</span></label>
              <input 
                type="text" 
                placeholder="e.g. $100/hr or $200/mo" 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required
              />
            </div>
            <div className="form-group-v2">
              <label>Category</label>
              <input 
                type="text" 
                placeholder="e.g. Wellness, Travel" 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group-v2">
            <label>Status</label>
            <select 
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option value="Active">Active</option>
              <option value="Paused">Paused</option>
            </select>
          </div>
          
          <button type="submit" style={{ display: 'none' }} id="service-submit"></button>
        </form>

        {/* Footer */}
        <div className="modal-footer-v2">
          <button className="btn-cancel-v2" onClick={onClose}>Cancel</button>
          <button className="btn-register-v2" onClick={() => document.getElementById('service-submit').click()}>
            <Save size={16} />
            {serviceToEdit ? 'Save Changes' : 'Create Service'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddServiceModal;
