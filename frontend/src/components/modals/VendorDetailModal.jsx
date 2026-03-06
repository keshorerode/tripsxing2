import React from 'react';
import { X, ExternalLink, Mail, Phone, MapPin, ShieldCheck, Globe } from 'lucide-react';
import StarRating from '../StarRating';

const VendorDetailModal = ({ vendor, isOpen, onClose, onDelete, onEdit }) => {
  if (!isOpen || !vendor) return null;

  return (
    <div className="modal-overlay-v2" onClick={onClose}>
      <div className="modal-v2 detail-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-v2">
          <div className="vendor-branding-v2">
            <div className="large-initial-v2">{vendor.initial}</div>
            <div className="vendor-maintitle-v2">
              <h3>{vendor.name}</h3>
              <p>{vendor.category}</p>
            </div>
          </div>
          <div className="header-right-v2">
            <div className="vendor-status-badge-v2">{vendor.status}</div>
            <button className="close-btn-v2" onClick={onClose}><X size={18} /></button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="modal-body-v2">
          <div className="rating-summary-v2">
             <div className="score-main-v2">
               <span className="big-rating-v2">{vendor.rating}</span>
               <div className="stars-wrap-v2">
                 <StarRating rating={vendor.rating} />
               </div>
               <span className="review-count-v2">(124 verified reviews)</span>
             </div>
          </div>

          <div className="detail-grid-v2">
            <div className="detail-info-card-v2">
              <div className="section-label-v2">Contact Information</div>
              <div className="contact-list-v2">
                <div className="contact-item-v2"><Mail size={16} /> <span>info@{vendor.name.toLowerCase().replace(' ', '')}.com</span></div>
                <div className="contact-item-v2"><Phone size={16} /> <span>+48 123 456 789</span></div>
                <div className="contact-item-v2"><Globe size={16} /> <span>www.{vendor.name.toLowerCase().replace(' ', '')}.com</span></div>
                <div className="contact-item-v2"><MapPin size={16} /> <span>Warsaw, Poland</span></div>
              </div>
            </div>

            <div className="detail-info-card-v2">
              <div className="section-label-v2">Compliance & Security</div>
              <div className="compliance-list-v2">
                <div className="comp-item-v2"><ShieldCheck size={16} /> <span>ISO 27001 Certified</span></div>
                <div className="comp-item-v2"><ShieldCheck size={16} /> <span>GDPR Compliant</span></div>
                <div className="comp-item-v2"><ShieldCheck size={16} /> <span>Verified Corporate ID</span></div>
              </div>
            </div>
          </div>

          <div className="about-vendor-v2">
            <div className="section-label-v2">About the Provider</div>
            <p>
              {vendor.description || `${vendor.name} is a market-leading provider specialized in ${vendor.category.toLowerCase()}. With over 10 years of experience, they have worked with over 500 corporate clients across Europe. Their commitment to excellence and security makes them a preferred partner for international organizations.`}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer-v2">
            <button 
              className="btn-cancel-v2" 
              style={{ color: '#EE5D50', borderColor: '#FFEBEB' }}
              onClick={() => onDelete(vendor.id)}
            >
              Delete Vendor
            </button>
            <div style={{ flex: 1 }}></div>
            <button className="btn-cancel-v2" onClick={() => onEdit(vendor)}>Edit Vendor</button>
            <button className="btn-cancel-v2" onClick={onClose}>Close</button>
            <button className="btn-register-v2">
              Manage Services <ExternalLink size={16} />
            </button>
        </div>


      </div>
    </div>
  );
};

export default VendorDetailModal;

