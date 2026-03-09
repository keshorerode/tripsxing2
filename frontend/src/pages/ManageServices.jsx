import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Plus, 
  ArrowLeft, 
  Search, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  Package, 
  CheckCircle, 
  Clock,
  Briefcase
} from 'lucide-react';
import AddServiceModal from '../components/modals/AddServiceModal';

const ManageServices = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const [vendor, setVendor] = useState(null);
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState(null);

  const fetchVendorDetails = React.useCallback(async () => {
    try {
      const resp = await fetch(`http://localhost:5000/api/vendors/${vendorId}`);
      if (resp.ok) {
        const data = await resp.json();
        setVendor(data);
      }
    } catch (err) {
      console.error('Error fetching vendor:', err);
    }
  }, [vendorId]);

  const fetchServices = React.useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetch(`http://localhost:5000/api/services/vendor/${vendorId}`);
      if (resp.ok) {
        const data = await resp.json();
        setServices(data);
      }
    } catch (err) {
      console.error('Error fetching services:', err);
    } finally {
      setLoading(false);
    }
  }, [vendorId]);

  useEffect(() => {
    fetchVendorDetails();
    fetchServices();
  }, [vendorId, fetchVendorDetails, fetchServices]);

  const handleAddOrUpdateService = async (serviceData) => {
    try {
      const method = serviceData.id ? 'PATCH' : 'POST';
      const url = serviceData.id 
        ? `http://localhost:5000/api/services/${serviceData.id}` 
        : 'http://localhost:5000/api/services';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      });

      if (response.ok) {
        fetchServices();
        setIsModalOpen(false);
        setServiceToEdit(null);
      }
    } catch (err) {
      console.error('Error saving service:', err);
    }
  };

  const handleDeleteService = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/services/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchServices();
        }
      } catch (err) {
        console.error('Error deleting service:', err);
      }
    }
  };

  const handleEditClick = (service) => {
    setServiceToEdit(service);
    setIsModalOpen(true);
  };

  const filteredServices = services.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="manage-services-page">
      {/* Dynamic Breadcrumbs / Heading */}
      <div className="page-header-v2">
        <div className="header-left-group">
          <button className="back-btn-v2" onClick={() => navigate('/team')}>
            <ArrowLeft size={20} />
          </button>
          <div className="header-titles-v2">
             <div className="breadcrumb-v2">
                <span onClick={() => navigate('/team')}>Vendors</span>
                <span className="separator">/</span>
                <span className="current">{vendor?.name || 'Loading...'}</span>
             </div>
             <h2>Manage Services</h2>
          </div>
        </div>
        
        <div className="header-actions-v2">
           <button className="btn-primary-v2" onClick={() => { setServiceToEdit(null); setIsModalOpen(true); }}>
             <Plus size={18} /> Add New Service
           </button>
        </div>
      </div>

      {/* Stats highlight for the vendor */}
      <div className="vendor-summary-banner">
         <div className="vendor-banner-info">
            <div className="vendor-banner-avatar">{vendor?.initial || 'V'}</div>
            <div className="vendor-banner-text">
               <h3>{vendor?.name || 'Vendor Name'}</h3>
               <p>{vendor?.category} • {services.length} Total Services</p>
            </div>
         </div>
         <div className="vendor-banner-stats">
            <div className="banner-stat">
               <label>Status</label>
               <span className="status-badge-v2 active">Verified Provider</span>
            </div>
            <div className="banner-stat">
               <label>Avg Response</label>
               <span><Clock size={14} /> 2 Hours</span>
            </div>
         </div>
      </div>

      {/* Search & Bulk Actions */}
      <div className="filter-bar-v2">
         <div className="search-box-v3">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Filter services by name or description..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
         </div>
      </div>

      {/* Services Grid/List */}
      <div className="services-container-v2">
        {loading ? (
          <div className="loading-state-v2" style={{ textAlign: 'center', padding: '50px', color: '#A3AED0' }}>
             <p>Loading catalog...</p>
          </div>
        ) : (
          <div className="services-grid-v2">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-item-card">
                 <div className="service-card-header">
                    <div className="service-cat-tag">
                       <Briefcase size={14} /> {service.category || 'General'}
                    </div>
                    <button className="service-more-btn">
                       <MoreVertical size={16} />
                    </button>
                 </div>
                 
                 <div className="service-card-body">
                    <h4 className="service-title">{service.name}</h4>
                    <p className="service-desc">{service.description || 'No description provided.'}</p>
                 </div>
                 
                 <div className="service-card-footer">
                    <div className="service-pricing">
                       <label>Standard Rate</label>
                       <span className="price-tag">{service.price}</span>
                    </div>
                    
                    <div className="service-status">
                       {service.status === 'Active' ? (
                         <span className="status-pill active"><CheckCircle size={14} /> Active</span>
                       ) : (
                         <span className="status-pill paused"><Clock size={14} /> Suspended</span>
                       )}
                    </div>
                 </div>

                 <div className="service-card-actions">
                    <button className="btn-service-action edit" onClick={() => handleEditClick(service)}>
                      <Edit3 size={14} /> Edit
                    </button>
                    <button className="btn-service-action delete" onClick={() => handleDeleteService(service.id)}>
                      <Trash2 size={14} /> Remove
                    </button>
                 </div>
              </div>
            ))}
          </div>
        )}
        
        {!loading && filteredServices.length === 0 && (
          <div className="empty-services-v2">
             <div className="empty-icon-v2"><Package size={48} /></div>
             <h4>No services found</h4>
             <p>Start by adding your first corporate service for this provider.</p>
             <button className="btn-primary-v2" style={{ marginTop: '16px' }} onClick={() => { setServiceToEdit(null); setIsModalOpen(true); }}>
                <Plus size={18} /> Add First Service
             </button>
          </div>
        )}
      </div>

      <AddServiceModal 
        isOpen={isModalOpen} 
        onClose={() => { setIsModalOpen(false); setServiceToEdit(null); }} 
        onAdd={handleAddOrUpdateService}
        serviceToEdit={serviceToEdit}
        vendorId={vendorId}
      />
    </div>
  );
};

export default ManageServices;
