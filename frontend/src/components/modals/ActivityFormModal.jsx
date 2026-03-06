import React, { useState, useEffect } from 'react';
import { X, Trophy, Save } from 'lucide-react';

const ActivityFormModal = ({ isOpen, onClose, onAdd, activityToEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    objective: '',
    question: '',
    image: '/surfing.png', // Default
    participating: '0 Employees Participating'
  });

  useEffect(() => {
    if (activityToEdit) {
      setFormData({
        title: activityToEdit.title,
        objective: activityToEdit.objective,
        question: activityToEdit.question,
        image: activityToEdit.image,
        participating: activityToEdit.participating || '0 Employees Participating'
      });
    } else {
      setFormData({
        title: '',
        objective: '',
        question: '',
        image: '/surfing.png',
        participating: '0 Employees Participating'
      });
    }
  }, [activityToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.objective) return;

    const activityData = {
      ...formData,
    };

    if (activityToEdit) {
      onAdd({ ...activityData, id: activityToEdit.id });
    } else {
      onAdd(activityData);
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
              {activityToEdit ? <Save size={24} /> : <Trophy size={24} />}
            </div>
            <div className="header-text-v2">
              <h2>{activityToEdit ? 'Edit Activity' : 'Plan New Activity'}</h2>
              <p>{activityToEdit ? 'Update activity details and objectives' : 'Create a new corporate wellness activity'}</p>
            </div>
          </div>
          <button className="close-btn-v2" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSubmit} className="modal-body-v2">
          <div className="section-label-v2">Activity Details</div>

          <div className="form-group-v2">
            <label>Activity Title <span className="required-v2">*</span></label>
            <input 
              type="text" 
              placeholder="e.g. Mountain Hiking" 
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="form-group-v2">
            <label>Strategic Objective <span className="required-v2">*</span></label>
            <textarea 
              placeholder="What is the goal of this activity?" 
              value={formData.objective}
              onChange={(e) => setFormData({...formData, objective: e.target.value})}
              required
            />
          </div>

          <div className="section-label-v2">Engagement</div>

          <div className="form-group-v2">
            <label>Preset Engagement Question</label>
            <input 
              type="text" 
              placeholder="e.g. What is your favorite trail?" 
              value={formData.question}
              onChange={(e) => setFormData({...formData, question: e.target.value})}
            />
          </div>

          <div className="form-group-v2">
            <label>Thumbnail Image URL</label>
            <select 
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
            >
              <option value="/surfing.png">Surfing (Ocean Blue)</option>
              <option value="/swimming.png">Swimming (Poolside)</option>
              <option value="/yoga.png">Yoga (Zen Garden)</option>
              <option value="/gym.png">Gym (Power Station)</option>
            </select>
          </div>
          
          <button type="submit" style={{ display: 'none' }} id="activity-submit"></button>
        </form>

        {/* Footer */}
        <div className="modal-footer-v2">
          <button className="btn-cancel-v2" onClick={onClose}>Cancel</button>
          <button className="btn-register-v2" onClick={() => document.getElementById('activity-submit').click()}>
            {activityToEdit ? <Save size={16} /> : <Trophy size={16} />}
            {activityToEdit ? 'Save Changes' : 'Create Activity'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityFormModal;
