import React, { useState } from 'react';
import { X, Save, Plus, Trash2 } from 'lucide-react';

const EditActivityModal = ({ isOpen, onClose, activity }) => {
  const [questions, setQuestions] = useState([
    "What is the recommended safety gear for beginners?",
    "How do you check for current and wave patterns?",
    "What are the emergency signaling protocols?"
  ]);

  if (!isOpen || !activity) return null;

  const handleAddQuestion = () => {
    setQuestions([...questions, "New Question"]);
  };

  const handleDeleteQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div className="modal-overlay-v2" onClick={onClose}>
      <div className="modal-v2" style={{ width: '600px' }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-v2">
          <div className="header-left-v2">
            <div className="header-icon-v2">
              <Plus size={24} />
            </div>
            <div className="header-text-v2">
              <h2>Edit Activity Questions</h2>
              <p>Customize the engagement questions for {activity.title}</p>
            </div>
          </div>
          <button className="close-btn-v2" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="modal-body-v2">
          <div className="section-label-v2">Strategic Objective</div>
          <div className="form-group-v2">
            <textarea 
              defaultValue={activity.objective} 
              style={{ height: '100px' }}
              placeholder="Define the core objective of this activity..."
            />
          </div>

          <div className="section-label-v2">Engagement Questions</div>
          <div className="questions-stack-v2">
            {questions.map((q, i) => (
              <div key={i} className="q-edit-row-v2">
                <input type="text" value={q} readOnly />
                <button className="q-delete-btn-v2" onClick={() => handleDeleteQuestion(i)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          <button className="add-question-btn-v2" onClick={handleAddQuestion}>
            <Plus size={16} /> Add New Question
          </button>
        </div>

        {/* Footer */}
        <div className="modal-footer-v2">
          <button className="btn-cancel-v2" onClick={onClose}>Discard</button>
          <button className="btn-register-v2" onClick={onClose}>
             <Save size={16} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditActivityModal;


