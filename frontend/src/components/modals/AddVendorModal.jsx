import React, { useState, useEffect } from 'react';
import { X, Building2, Save } from 'lucide-react';

const AddVendorModal = ({ isOpen, onClose, onAdd, vendorToEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    rating: '4.5',
    status: 'Active',
    type: '',
    description: ''
  });

  useEffect(() => {
    if (vendorToEdit) {
      setFormData({
        name: vendorToEdit.name,
        category: vendorToEdit.category,
        rating: vendorToEdit.rating.toString(),
        status: vendorToEdit.status,
        type: vendorToEdit.type,
        description: vendorToEdit.description || ''
      });
    } else {
      setFormData({ name: '', category: '', rating: '4.5', status: 'Active', type: '', description: '' });
    }
  }, [vendorToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category) return;
    
    const typeMap = {
      'Fitness Assessment': 'Fitness',
      'Travel & Logistics': 'Travel',
      'Mind Wellness Coach': 'Wellness',
      'Sports & Activities': 'Sports'
    };

    const vendorData = {
      ...formData,
      rating: parseFloat(formData.rating),
      type: typeMap[formData.category] || 'Other'
    };

    if (vendorToEdit) {
      onAdd({ ...vendorData, id: vendorToEdit.id });
    } else {
      onAdd(vendorData);
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
              {vendorToEdit ? <Save size={24} /> : <Building2 size={24} />}
            </div>
            <div className="header-text-v2">
              <h2>{vendorToEdit ? 'Update Vendor' : 'Add New Vendor'}</h2>
              <p>{vendorToEdit ? 'Modify vendor details' : 'Register a new service provider'}</p>
            </div>
          </div>
          <button className="close-btn-v2" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSubmit} className="modal-body-v2">
          <div className="section-label-v2">Basic Information</div>

          {/* Company Name */}
          <div className="form-group-v2">
            <label>Company Name <span className="required-v2">*</span></label>
            <input 
              type="text" 
              placeholder="e.g. Skyline Logistics" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          {/* Service Category + Rating */}
          <div className="form-row-v2">
            <div className="form-group-v2">
              <label>Service Category <span className="required-v2">*</span></label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                required
              >
                <option value="">Select category</option>
                <option value="Fitness Assessment">Fitness Assessment</option>
                <option value="Travel & Logistics">Travel & Logistics</option>
                <option value="Mind Wellness Coach">Mind Wellness Coach</option>
                <option value="Sports & Activities">Sports & Activities</option>
                <option value="Healthcare Services">Healthcare Services</option>
              </select>
            </div>
            <div className="form-group-v2">
              <label>Rating (Initial)</label>
              <input 
                type="number" 
                placeholder="4.5" 
                min="0" 
                max="5" 
                step="0.1" 
                value={formData.rating}
                onChange={(e) => setFormData({...formData, rating: e.target.value})}
              />
            </div>
          </div>

          {/* Status */}
          <div className="form-group-v2">
            <label>Status</label>
            <select 
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending Review</option>
            </select>
          </div>

          <div className="section-label-v2">Additional Info</div>
          <div className="form-group-v2">
            <label>About the Provider</label>
            <textarea 
              placeholder="Brief description of the vendor's services..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

          
          <button type="submit" style={{ display: 'none' }} id="add-vendor-submit"></button>
        </form>

        {/* Footer */}
        <div className="modal-footer-v2">
          <button className="btn-cancel-v2" onClick={onClose}>Cancel</button>
          <button className="btn-register-v2" onClick={() => document.getElementById('add-vendor-submit').click()}>
            {vendorToEdit ? <Save size={16} /> : <Building2 size={16} />}
            {vendorToEdit ? 'Save Changes' : 'Register Vendor'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVendorModal;

