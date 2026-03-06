import React, { useState, useEffect } from 'react';
import { Plus, MessageSquare, Search, ChevronDown, Filter } from 'lucide-react';
import StarRating from '../components/StarRating';
import AddVendorModal from '../components/modals/AddVendorModal';
import VendorDetailModal from '../components/modals/VendorDetailModal';

const Vendors = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [vendorToEdit, setVendorToEdit] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Vendors from DB
  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/vendors');
      const data = await response.json();
      setVendors(data);
    } catch (err) {
      console.error('Error fetching vendors:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddVendor = async (vendorData) => {
    try {
      const method = vendorData.id ? 'PATCH' : 'POST';
      const url = vendorData.id 
        ? `http://localhost:5000/api/vendors/${vendorData.id}` 
        : 'http://localhost:5000/api/vendors';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...vendorData,
          initial: vendorData.name.charAt(0).toUpperCase()
        }),
      });

      if (response.ok) {
        fetchVendors();
        setIsAddModalOpen(false);
        setVendorToEdit(null);
      }
    } catch (err) {
      console.error('Error saving vendor:', err);
    }
  };

  const handleDeleteVendor = async (id) => {
    if (window.confirm('Are you sure you want to delete this vendor?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/vendors/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchVendors();
          setSelectedVendor(null);
        }
      } catch (err) {
        console.error('Error deleting vendor:', err);
      }
    }
  };


  const handleEditClick = (vendor) => {
    setVendorToEdit(vendor);
    setSelectedVendor(null);
    setIsAddModalOpen(true);
  };

  const filteredVendors = vendors.filter(v => {
    const matchesCategory = filterCategory === 'All' || v.type === filterCategory;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         v.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="vendor-engagement">
      <div className="page-header">
        <div className="header-titles">
          <h2>Vendor Engagement</h2>
          <p>Find and manage verified corporate service providers</p>
        </div>
        <button className="btn-primary" onClick={() => { setVendorToEdit(null); setIsAddModalOpen(true); }}>
          <Plus size={18} /> New Vendor
        </button>
      </div>

      <div className="filter-system">
        <div className="search-box-v2">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search by name or category..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="filter-pills">
          {['All', 'Fitness', 'Travel', 'Wellness', 'Sports'].map((cat) => (
            <button 
              key={cat} 
              className={`filter-pill ${filterCategory === cat ? 'active' : ''}`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-dropdown">
          <Filter size={16} />
          <span>Sort by: <strong>Rating</strong></span>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="vendor-grid">
        {loading ? (
          <div className="loading-state-v2" style={{ gridColumn: '1/-1', textAlign: 'center', padding: '50px', color: '#A3AED0' }}>
            <p>Loading premium vendors...</p>
          </div>
        ) : filteredVendors.map((vendor) => (
          <div key={vendor.id} className="vendor-card" onClick={() => setSelectedVendor(vendor)}>
            <div className="vendor-card-header">
              <span className="vendor-category">{vendor.category}</span>
              <div className={`status-dot ${vendor.status.toLowerCase()}`}></div>
            </div>
            
            <div className="vendor-main-info">
              <span className="vendor-initial">{vendor.initial}</span>
              <h4 className="vendor-name">{vendor.name}</h4>
            </div>
            
            <div className="rating-row">
              <StarRating rating={vendor.rating} />
              <span className="rating-val">{vendor.rating}</span>
            </div>
            
            <div className="vendor-stats">
              <div className="stat-item">
                <label>Status</label>
                <span className={vendor.status.toLowerCase()}>{vendor.status}</span>
              </div>
              <div className="stat-item">
                <label>Type</label>
                <span>{vendor.type}</span>
              </div>
            </div>

            <button className="btn-manage-provider-outline">Manage Provider</button>
          </div>
        ))}
        {!loading && filteredVendors.length === 0 && (
          <div className="loading-state-v2" style={{ gridColumn: '1/-1', textAlign: 'center', padding: '50px', color: '#A3AED0' }}>
            <p>No vendors found matching your criteria.</p>
          </div>
        )}
      </div>


      <AddVendorModal 
        isOpen={isAddModalOpen} 
        onClose={() => { setIsAddModalOpen(false); setVendorToEdit(null); }} 
        onAdd={handleAddVendor}
        vendorToEdit={vendorToEdit}
      />
      <VendorDetailModal 
        vendor={selectedVendor} 
        isOpen={!!selectedVendor} 
        onClose={() => setSelectedVendor(null)} 
        onDelete={handleDeleteVendor}
        onEdit={handleEditClick}
      />
      
      {/* Floating Chat Icon */}
      <div className="floating-chat">
        <MessageSquare size={24} />
        <div className="chat-dot"></div>
      </div>
    </div>
  );
};

export default Vendors;

