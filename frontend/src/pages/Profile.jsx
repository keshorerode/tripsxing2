import React from 'react';
import { Camera, Mail, Phone, MapPin, Briefcase, Calendar, ShieldCheck, Edit2, Star } from 'lucide-react';

const Profile = () => {
  const user = {
    name: "James Wilson",
    initial: "JW",
    role: "Senior Project Manager",
    email: "james.wilson@tripsxing.com",
    phone: "+1 234 567 890",
    location: "Stockholm, Sweden",
    joined: "January 2024",
    clearance: "Level 5 (Elite)",
    trustScore: "99% · Exceptional"
  };

  return (
    <div className="profile-wrapper-v2">
      {/* Hero Card */}
      <div className="prof-hero-card">
        <div className="prof-banner">
          <button className="prof-edit-banner">
            <Camera size={14} /> Edit Banner
          </button>
        </div>
        <div className="prof-hero-bottom">
          <div className="prof-hero-left">
            <div className="prof-avatar-wrap">
              <div className="prof-avatar-main">{user.initial}</div>
              <div className="prof-avatar-cam"><Camera size={10} /></div>
            </div>
            <div className="prof-hero-name">
              <h2>{user.name}</h2>
              <p><Briefcase size={14} /> {user.role}</p>
            </div>
          </div>
          <button className="prof-edit-profile-btn">
            <Edit2 size={14} /> Edit Profile
          </button>
        </div>
      </div>

      {/* Two column grid */}
      <div className="prof-grid-2">
        {/* Personal Info */}
        <div className="prof-card">
          <h3>Personal Information</h3>
          
          <div className="prof-info-row">
            <div className="prof-info-icon"><Mail size={18} /></div>
            <div className="prof-info-content">
              <div className="prof-info-label">Email Address</div>
              <div className="prof-info-value">{user.email}</div>
            </div>
          </div>

          <div className="prof-info-row">
            <div className="prof-info-icon"><Phone size={18} /></div>
            <div className="prof-info-content">
              <div className="prof-info-label">Phone Number</div>
              <div className="prof-info-value">{user.phone}</div>
            </div>
          </div>

          <div className="prof-info-row">
            <div className="prof-info-icon"><MapPin size={18} /></div>
            <div className="prof-info-content">
              <div className="prof-info-label">Location</div>
              <div className="prof-info-value">{user.location}</div>
            </div>
          </div>

          <div className="prof-info-row">
            <div className="prof-info-icon"><Calendar size={18} /></div>
            <div className="prof-info-content">
              <div className="prof-info-label">Member Since</div>
              <div className="prof-info-value">{user.joined}</div>
            </div>
          </div>
        </div>

        {/* Work Highlights */}
        <div className="prof-card">
          <h3>Work Highlights</h3>

          <div className="prof-highlight-row">
            <div className="prof-hi-icon"><ShieldCheck size={18} /></div>
            <div className="prof-hi-content">
              <div className="prof-hi-label">Clearance Level</div>
              <span className="prof-clearance-badge">
                <ShieldCheck size={12} /> {user.clearance}
              </span>
            </div>
          </div>

          <div className="prof-highlight-row">
            <div className="prof-hi-icon stars"><Star size={18} /></div>
            <div className="prof-trust-wrap">
              <div className="prof-trust-top">
                <span>Trust Score</span>
                <span className="prof-trust-val">{user.trustScore}</span>
              </div>
              <div className="prof-trust-bar">
                <div className="prof-trust-bar-fill" style={{ width: '99%' }}></div>
              </div>
            </div>
          </div>

          <div className="prof-skills-block">
            <div className="prof-skills-label">Project Skills</div>
            <div className="prof-skills-list">
              <span className="prof-skill-tag">Vendor Management</span>
              <span className="prof-skill-tag">Team Leadership</span>
              <span className="prof-skill-tag">Strategic Planning</span>
              <span className="prof-skill-tag">Budgeting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

