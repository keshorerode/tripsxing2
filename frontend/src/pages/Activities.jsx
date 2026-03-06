import React, { useState } from 'react';
import { Waves, Zap, Plus, Search, Trash2, Edit3, Heart, Target } from 'lucide-react';
import ActivityFormModal from '../components/modals/ActivityFormModal';

const Activities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: 'Surfing',
      icon: <Waves size={16} />,
      image: '/surfing.png',
      question: '"What is the recommended safety gear for beginners?"',
      objective: 'Builds core strength and mental focus through balance.',
      participating: '85 Employees Participating'
    },
    {
      id: 2,
      title: 'Swimming',
      icon: <Zap size={16} />,
      image: '/swimming.png',
      question: '"How to manage breathing during long-distance sessions?"',
      objective: 'Excellent low-impact cardio for full-body wellness.',
      participating: '120 Employees Participating'
    }
  ]);

  const handleAddActivity = (data) => {
    if (data.id) {
      setActivities(activities.map(a => a.id === data.id ? { ...a, ...data } : a));
    } else {
      const newId = activities.length > 0 ? Math.max(...activities.map(a => a.id)) + 1 : 1;
      setActivities([...activities, { ...data, id: newId, icon: <Heart size={16} /> }]);
    }
    setIsModalOpen(false);
    setActivityToEdit(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this activity?')) {
      setActivities(activities.filter(a => a.id !== id));
    }
  };

  const handleEdit = (activity) => {
    setActivityToEdit(activity);
    setIsModalOpen(true);
  };

  const filteredActivities = activities.filter(a => 
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.objective.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="activity-planning">
      <div className="page-header">
        <div className="header-titles">
          <h2>Activity Planning</h2>
          <p>Organize corporate wellness events and track participation</p>
        </div>
        <div className="header-actions-v2">
          <div className="search-box-v2" style={{ marginRight: '16px', minWidth: '280px' }}>
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search activities..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn-primary" onClick={() => { setActivityToEdit(null); setIsModalOpen(true); }}>
            <Plus size={18} /> New Activity
          </button>
        </div>
      </div>

      <div className="activity-list">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-quick-actions">
               <button onClick={() => handleEdit(activity)} title="Edit"><Edit3 size={16} /></button>
               <button onClick={() => handleDelete(activity.id)} title="Delete" className="delete-btn"><Trash2 size={16} /></button>
            </div>
            <div className="activity-image-wrap">
              <img src={activity.image} alt={activity.title} />
              <div className="activity-overlay">
                 <span className="part-count">{activity.participating}</span>
              </div>
            </div>
            <div className="activity-details">
              <div className="activity-title-row">
                <span className="activity-icon-sm">{activity.icon}</span>
                <h3>{activity.title}</h3>
              </div>
              
              <div className="engagement-box">
                <span className="engagement-label">
                  <Heart size={12} style={{marginRight: '6px'}} /> 
                  PRESET ENGAGEMENT QUESTION
                </span>
                <p className="engagement-question">{activity.question || 'No question set.'}</p>
              </div>

              <div className="objective-box">
                <span className="objective-label">
                  <Target size={12} style={{marginRight: '6px'}} /> 
                  STRATEGIC OBJECTIVE
                </span>
                <p className="objective-desc">{activity.objective}</p>
              </div>

              <div className="activity-actions">
                <button className="btn-launch-navy">Launch Activity Plan</button>
                <button className="btn-edit-questions" onClick={() => handleEdit(activity)}>Refine Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredActivities.length === 0 && (
        <div className="empty-state-v2">
          <p>No activities found. Start by creating a new one!</p>
        </div>
      )}

      <ActivityFormModal 
        isOpen={isModalOpen} 
        onClose={() => { setIsModalOpen(false); setActivityToEdit(null); }} 
        onAdd={handleAddActivity}
        activityToEdit={activityToEdit}
      />
    </div>
  );
};

export default Activities;


