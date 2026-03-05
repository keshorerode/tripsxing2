import React, { useState } from 'react';
import { 
  Home,
  User,
  Users,
  Rocket,
  Folder,
  Settings,
  Plus,
  Star,
  StarHalf,
  X,
  Building2,
  MessageSquare,
  LayoutGrid,
  ClipboardList,
  Calendar,
  Gavel,
  Search,
  Bell,
  Sun,
  Moon,
  Download,
  MoreVertical,
  Trash2,
  Edit2,
  Check,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Workflow,
  Puzzle,
  Share2,
  History,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Apple,
  Waves,
  Zap
} from 'lucide-react';
import './App.css';

// --- Components for Dashboard View ---

const TopNav = () => {
  return (
    <header className="db-header">
      <div className="db-header-left">
        <div className="db-logo">
          <img src="/tripsxing-logo.png" alt="Tripsxing" />
        </div>
        <div className="db-tabs">
          <div className="db-tab active">
            <LayoutGrid size={18} />
            <span>Dashboard</span>
          </div>
          <div className="db-tab">
            <Workflow size={18} />
            <span>Workflows</span>
          </div>
          <div className="db-tab">
            <Puzzle size={18} />
            <span>Integrations</span>
          </div>
        </div>
        <div className="db-search">
          <Search className="search-icon" size={16} />
          <input type="text" placeholder="Search or type command" />
        </div>
      </div>

      <div className="db-header-right">
        <div className="db-icon-btn"><Bell size={20} /></div>
        <div className="db-icon-btn"><Settings size={20} /></div>
      </div>
    </header>
  );
};

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      {/* Greeting Section */}
      <section className="greeting-row">
        <div className="greeting-text">
          <h1>Hi, James! <span className="greeting-icons">✨ 🚀</span></h1>
          <h2>What are your plans for today?</h2>
          <p>This platform is designed to revolutionize the way you organize and access your notes</p>
        </div>
        <div className="top-cards">
          <div className="top-card-wrapper placeholder">
             <div className="top-cardPlus">
                <Plus size={20} color="#4318FF" />
             </div>
          </div>
          <div className="top-card">
            <div className="top-card-illustration">
              <svg width="180" height="180" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-5deg)', overflow: 'visible' }}>
                {/* Background pages for depth */}
                <rect x="18" y="24" width="82" height="82" rx="10" stroke="#1B2559" strokeWidth="1.5" fill="white" />
                <rect x="21" y="27" width="82" height="82" rx="10" stroke="#1B2559" strokeWidth="1.5" fill="white" />
                
                {/* Main calendar sheet */}
                <rect x="24" y="30" width="82" height="82" rx="10" stroke="#1B2559" strokeWidth="2.5" fill="white" />
                
                {/* Purple header section */}
                <path d="M24 40C24 34.4772 28.4772 30 34 30H96C101.523 30 106 34.4772 106 40V50H24V40Z" fill="#7B89F4" stroke="#1B2559" strokeWidth="2.5" />
                
                {/* Binding rings */}
                <path d="M40 18C40 14 43 12 47 12C51 12 54 14 54 18V30H40V18Z" stroke="#1B2559" strokeWidth="2.5" fill="none" />
                <path d="M62 18C62 14 65 12 69 12C73 12 76 14 76 18V30H62V18Z" stroke="#1B2559" strokeWidth="2.5" fill="none" />
                <path d="M84 18C84 14 87 12 91 12C95 12 98 14 98 18V30H84V18Z" stroke="#1B2559" strokeWidth="2.5" fill="none" />
                
                {/* Zigzag tear line */}
                <path d="M24 50L31 44L38 50L45 44L52 50L59 44L66 50L73 44L80 50L87 44L94 50L100 44L106 50" stroke="#1B2559" strokeWidth="2.5" fill="white" />
                
                {/* Content elements */}
                {/* Text box 'A' */}
                <rect x="32" y="58" width="14" height="14" rx="3" stroke="#1B2559" strokeWidth="1.8" />
                <text x="35" y="68" fill="#1B2559" fontSize="10" fontWeight="900" fontFamily="Arial">A</text>
                
                {/* Tool box */}
                <rect x="32" y="76" width="14" height="14" rx="3" stroke="#1B2559" strokeWidth="1.8" />
                <path d="M35 83L39 80L43 83" stroke="#1B2559" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <path d="M39 80V87" stroke="#1B2559" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                
                {/* Purple component placeholder */}
                <rect x="32" y="94" width="28" height="15" rx="4" fill="#7B89F4" stroke="#1B2559" strokeWidth="1.2" />
                <rect x="36" y="97.5" width="8" height="8" rx="2" fill="#1B2559" />
                <rect x="46" y="99.5" width="8" height="8" rx="2" stroke="#1B2559" strokeWidth="1.8" fill="none" />
                
                {/* Big dashed area */}
                <rect x="58" y="58" width="38" height="38" rx="8" stroke="#1B2559" strokeWidth="1.8" strokeDasharray="5 5" fill="none" />
                
                {/* Selection cursor */}
                <path d="M88 80L108 98L100 99L102 108L96 110L94 102L86 105L88 80Z" fill="white" stroke="#1B2559" strokeWidth="2.5" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Stay organized</h3>
            <p>A clear structure for your notes</p>
          </div>
          <div className="top-card">
            <div className="top-card-illustration">
              <svg width="180" height="180" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                {/* Clothesline */}
                <path d="M -10 25 Q 50 60 130 15" stroke="#1B2559" strokeWidth="2" fill="none" />
                
                {/* 1. Left Card */}
                <g transform="translate(10, 50) rotate(-35)">
                  <rect x="0" y="0" width="38" height="52" rx="4" fill="white" stroke="#1B2559" strokeWidth="2" />
                  {/* Clothespin */}
                  <rect x="22" y="-12" width="6" height="16" rx="1" fill="#1B2559" />
                  {/* Lines */}
                  <line x1="8" y1="12" x2="22" y2="12" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                  <line x1="8" y1="20" x2="16" y2="20" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                  <line x1="25" y1="18" x2="32" y2="12" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                  {/* ? */}
                  <text x="12" y="38" fill="#7B89F4" fontSize="16" fontWeight="bold">?</text>
                  {/* Smile */}
                  <path d="M 28 26 Q 34 32 28 38" stroke="#1B2559" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Footer */}
                  <path d="M 0 42 L 38 42 L 38 48 C 38 50.2 36.2 52 34 52 L 4 52 C 1.8 52 0 50.2 0 48 Z" fill="#7B89F4" stroke="#1B2559" strokeWidth="2" />
                  <line x1="8" y1="47" x2="16" y2="47" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* 2. Middle Card */}
                <g transform="translate(40, 25) rotate(-25)">
                  <rect x="25" y="-12" width="6" height="18" rx="1" fill="#1B2559" transform="rotate(10 25 -12)" />
                  <rect x="0" y="0" width="46" height="64" rx="4" fill="white" stroke="#1B2559" strokeWidth="2" />
                  
                  <rect x="4" y="6" width="38" height="16" rx="4" fill="#1B2559" />
                  <text x="8" y="16" fill="white" fontSize="6.5" fontWeight="bold">GOBE R.U</text>
                  
                  <rect x="6" y="26" width="16" height="16" rx="4" fill="#7B89F4" />
                  <circle cx="14" cy="31" r="3" fill="#1B2559" />
                  <path d="M 8 40 Q 14 34 20 40" fill="#1B2559" />
                  
                  <line x1="28" y1="26" x2="40" y2="15" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                  <line x1="25" y1="36" x2="33" y2="30" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                  
                  <path d="M 10 48 L 16 56 M 16 48 L 10 56" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                  
                  <rect x="24" y="44" width="14" height="14" rx="4" fill="white" stroke="#1B2559" strokeWidth="2" />
                  <path d="M26 51 L 29 54 L 35 47" stroke="#7B89F4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  
                  <circle cx="41" cy="44" r="1.5" fill="#1B2559" />
                  <circle cx="39" cy="48" r="1.5" fill="#1B2559" />
                  <circle cx="37" cy="52" r="1.5" fill="#1B2559" />
                </g>

                {/* 3. Right Top Card */}
                <g transform="translate(85, 20) rotate(15)">
                  <rect x="0" y="0" width="36" height="50" rx="4" fill="white" stroke="#1B2559" strokeWidth="2" />
                  
                  <circle cx="18" cy="24" r="10" stroke="#1B2559" strokeWidth="2" fill="white" />
                  <path d="M 14 24 L 17 27 L 23 21" stroke="#1B2559" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  
                  <line x1="10" y1="40" x2="26" y2="40" stroke="#7B89F4" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="45" x2="22" y2="45" stroke="#7B89F4" strokeWidth="2" strokeLinecap="round" />
                  
                  <circle cx="20" cy="8" r="1.5" fill="#1B2559" />
                  <circle cx="25" cy="8" r="1.5" fill="#1B2559" />
                  <circle cx="30" cy="8" r="1.5" fill="#1B2559" />
                  <line x1="6" y1="8" x2="12" y2="8" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                </g>
                <rect x="95" y="8" width="6" height="14" rx="1" fill="#1B2559" transform="rotate(15 95 8)" />

                {/* 4. Bottom Right Card */}
                <g transform="translate(68, 65) rotate(35)">
                  <rect x="0" y="0" width="55" height="40" rx="4" fill="white" stroke="#1B2559" strokeWidth="2" />
                  <rect x="36" y="-12" width="6" height="16" rx="1" fill="#1B2559" transform="rotate(-20 36 -12)" />
                  
                  <text x="6" y="12" fill="#1B2559" fontSize="6.5" fontWeight="bold">GOBERRY</text>
                  <text x="14" y="18" fill="#1B2559" fontSize="3">MAIN</text>
                  <text x="14" y="23" fill="#1B2559" fontSize="4.5" fontWeight="bold">FRESHLY</text>
                  
                  <circle cx="44" cy="14" r="7" fill="#E9EDF7" stroke="#1B2559" strokeWidth="1.5" />
                  <path d="M 41 14 L 43 16 L 47 12" stroke="#1B2559" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  
                  <circle cx="12" cy="30" r="6" stroke="#1B2559" strokeWidth="1.5" fill="white" />
                  <path d="M 9 30 L 11 32 L 15 28" stroke="#1B2559" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  
                  <line x1="24" y1="28" x2="34" y2="28" stroke="#1B2559" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="22" y1="33" x2="32" y2="33" stroke="#1B2559" strokeWidth="1.5" strokeLinecap="round" />
                  
                  <path d="M 38 24 L 55 24 L 55 36 C 55 38.2 53.2 40 51 40 L 38 40 Z" fill="#7B89F4" stroke="#1B2559" strokeWidth="2" />
                  <line x1="42" y1="32" x2="51" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
            <h3>Sync your notes</h3>
            <p>Ensure that notes are synced</p>
          </div>
          <div className="top-card">
            <div className="top-card-illustration">
              <svg width="180" height="180" viewBox="0 -10 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                {/* Top Right Controls */}
                <line x1="72" y1="12" x2="80" y2="12" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 87 6 L 93 6 C 94.5 6 95 6.5 95 8 L 95 14" fill="none" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="83" y="9" width="8" height="8" rx="2" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <path d="M 100 6 L 108 14 M 108 6 L 100 14" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />

                {/* Left Tab */}
                <path d="M 18 25 L 18 16 C 18 13 20 11 23 11 L 30 11 C 33 11 35 13 35 16 L 35 25 Z" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <rect x="21" y="14" width="4" height="3" rx="1.5" fill="#1B2559" />
                <rect x="27" y="14" width="6" height="3" rx="1.5" fill="#1B2559" />

                {/* Right Tab */}
                <path d="M 32 25 L 32 15 C 32 12 34 10 37 10 L 45 10 C 48 10 50 12 50 15 L 50 25 Z" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <rect x="36" y="14" width="10" height="3" rx="1.5" fill="#1B2559" />

                {/* Main Window */}
                <rect x="15" y="25" width="85" height="60" rx="8" fill="white" stroke="#1B2559" strokeWidth="2.5" />

                {/* Purple Header Box */}
                <rect x="25" y="32" width="38" height="20" rx="4" fill="#7B89F4" />

                {/* Lines */}
                <line x1="70" y1="36" x2="88" y2="36" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="70" y1="44" x2="84" y2="44" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />

                {/* Envelope Button with Shadow */}
                <rect x="36" y="58" width="50" height="20" rx="8" fill="#1B2559" />
                <rect x="34" y="54" width="50" height="20" rx="8" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <rect x="49" y="59" width="20" height="10" rx="2" fill="none" stroke="#1B2559" strokeWidth="1.5" />
                <path d="M 49 59 L 59 66 L 69 59" stroke="#1B2559" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* Bottom Lines */}
                <line x1="30" y1="84" x2="86" y2="84" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="30" y1="91" x2="70" y2="91" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />

                {/* UI Scroll / Pill on right */}
                <rect x="104" y="66" width="4" height="16" rx="2" fill="#1B2559" />

                {/* Floating Buttons */}
                {/* Button 1: Pencil */}
                <rect x="40" y="99" width="18" height="14" rx="4" fill="#1B2559" />
                <rect x="42" y="96" width="18" height="14" rx="4" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <path d="M49 100 L53 104 L50 107 L46 107 L46 103 Z" fill="#1B2559" stroke="#1B2559" strokeWidth="1" strokeLinejoin="round" />

                {/* Button 2: 'i' */}
                <rect x="62" y="99" width="18" height="14" rx="4" fill="#1B2559" />
                <rect x="64" y="96" width="18" height="14" rx="4" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <circle cx="73" cy="100.5" r="1.5" fill="#1B2559" />
                <line x1="73" y1="103" x2="73" y2="106" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />

                {/* Button 3: Dash */}
                <rect x="84" y="99" width="30" height="14" rx="4" fill="#1B2559" />
                <rect x="86" y="96" width="30" height="14" rx="4" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <line x1="92" y1="103" x2="110" y2="103" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />

                {/* Button 4: Toggle */}
                <rect x="36" y="117" width="18" height="14" rx="4" fill="#1B2559" />
                <rect x="38" y="114" width="18" height="14" rx="4" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <circle cx="43" cy="121" r="3.5" fill="#1B2559" />
                <line x1="49" y1="121" x2="52" y2="121" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Collaborate and share</h3>
            <p>Share notes with colleagues</p>
          </div>
        </div>
      </section>

      {/* Main Grid Layout */}
      <div className="db-grid">
        {/* Column 1: Notifications & Today Tasks */}
        <div className="db-col">
          <div className="card-v2 notification-panel">
            <div className="panel-header">
              <h2>Notifications</h2>
              <span className="clear-link">
                <Workflow size={14} /> Clear
              </span>
            </div>
            
            <div className="notif-cards-stack">
              {/* Card 1: Upcoming Event */}
              <div className="notif-card active-event">
                <div className="notif-card-main">
                  <div className="notif-top-row">
                    <div className="notif-label">
                      Upcoming event <span className="notif-dot orange"></span>
                    </div>
                    <MoreHorizontal size={18} className="notif-more" />
                  </div>
                  <p className="notif-subtitle">Landing design meeting · Time: 120 min</p>
                  <div className="notif-tags">
                    <div className="notif-tag">
                      <Calendar size={12} /> Sat, 10 May
                    </div>
                    <div className="notif-tag">
                      <History size={12} /> 11 AM – 11:45 AM
                    </div>
                  </div>
                </div>
                <div className="notif-side-actions">
                  <button className="notif-action-btn"><Trash2 size={16} /></button>
                  <button className="notif-action-btn"><Edit2 size={16} /></button>
                </div>
              </div>

              {/* Card 2: Message */}
              <div className="notif-card secondary-message">
                <div className="notif-card-main">
                  <div className="notif-top-row">
                    <div className="notif-label">Message | Product design</div>
                    <MoreHorizontal size={18} className="notif-more" />
                  </div>
                  <div className="notif-sender">
                     <div className="small-avatar">KS</div>
                     <span>Message from Ken Smith</span>
                  </div>
                  <p className="notif-preview">Hey team, just wanted to check in and see how the progress is going...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-v2 tasks-card">
            <div className="card-v2-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2>Today tasks</h2>
                <div className="avatar-group-sm">
                   <div className="avatar-sm">JS</div>
                   <div className="avatar-sm">AL</div>
                   <div className="avatar-sm">+2</div>
                </div>
              </div>
              <div className="card-v2-actions">
                <LayoutGrid size={16} title="Grid view" />
                <ClipboardList size={16} title="List view" />
                <Edit2 size={16} title="Edit tasks" />
                <Share2 size={16} title="Share tasks" />
              </div>
            </div>
            <div className="task-list">
              {[
                { name: 'Conduct research', duration: '02 h 45 m', prog: 90, workers: 4, comments: 16 },
                { name: 'Schedule a meeting', duration: '06 h 55 m', prog: 50, workers: 4, comments: 3 },
                { name: 'Send out reminders', duration: '01 h 30 m', prog: 10, workers: 16, comments: 3 }
              ].map((task, i) => (
                <div key={i} className="task-item-modern">
                  <div className="task-main">
                     <h4>{task.name}</h4>
                     <span className="task-sub">4 May, 09:20 AM</span>
                  </div>
                  <div className="task-timing">
                     <span className="label">Duration</span>
                     <span className="value">{task.duration}</span>
                  </div>
                  <div className="task-progress-v2">
                     <span className="perc">{task.prog}%</span>
                     <div className="bar-bg"><div className="bar-fill" style={{ width: `${task.prog}%` }}></div></div>
                  </div>
                  <div className="task-meta-v2">
                     <span><Users size={12} /> {task.workers}</span>
                     <span><MessageSquare size={12} /> {task.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Assignments & Premium */}
        <div className="db-col">
          <div className="card-v2 assignments-card">
            <div className="card-v2-header">
              <h2>Assignments</h2>
              <span className="card-link"><Edit2 size={12} /> Edit</span>
            </div>
            <div className="assignment-item-modern">
              <div className="tag-row">
                 <span className="tag-cat">Motion design</span>
                 <span className="tag-cat">Logo</span>
                 <MoreHorizontal size={14} />
              </div>
              <h3>Design a packaging concept for a new product</h3>
              <div className="assignment-footer-modern">
                <span className="tag-pill">Package design</span>
                <span className="assign-priority high">High</span>
                <div className="assignee-box">
                   <span>Rachel Lee</span>
                   <div className="avatar-xs">RL</div>
                </div>
              </div>
            </div>
            <button className="btn-add-assignment-modern">
              <div className="plus-box"><Plus size={14} /></div> Add new assignment
            </button>
          </div>

          <div className="premium-card-v3">
            <div className="premium-art">
               <svg width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                  {/* Background Confetti & Sparks */}
                  <rect x="70" y="30" width="12" height="15" rx="2" fill="white" transform="rotate(-15 70 30)" />
                  <rect x="85" y="45" width="8" height="12" rx="1" fill="white" transform="rotate(30 85 45)" />
                  <rect x="190" y="65" width="10" height="12" rx="2" fill="white" transform="rotate(15 190 65)" />
                  <rect x="200" y="80" width="8" height="10" rx="1" fill="white" transform="rotate(-25 200 80)" />
                  <rect x="155" y="20" width="20" height="20" rx="4" fill="white" stroke="#161a49" strokeWidth="2.5" transform="rotate(10 155 20)" />
                  <path d="M160 25 L170 35 M170 25 L160 35" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Swirls and Action Lines */}
                  <path d="M 45 60 L 75 80" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 60 40 L 80 55" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  
                  <path d="M 50 90 C 45 80 40 90 50 100 C 60 110 55 120 45 110 C 35 100 40 85 55 90" stroke="#161a49" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 180 35 C 190 25 205 35 190 50 C 180 60 190 70 200 60 C 210 50 205 35 190 45" stroke="#161a49" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  
                  <line x1="85" y1="85" x2="100" y2="82" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="175" y1="80" x2="195" y2="78" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 195 115 L 205 125 L 200 130 Z" fill="#161a49" />

                  {/* Hands Area */}
                  {/* Left Hand */}
                  <g transform="translate(70, 95) rotate(-25)">
                    <path d="M 0 0 C -10 20 10 70 20 80 C 40 80 45 60 50 40 C 60 20 50 5 40 0 C 30 -5 20 -5 0 0 Z" fill="white" stroke="#161a49" strokeWidth="3" />
                    {/* Fingers */}
                    <path d="M 0 0 C 10 10 20 30 25 50" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 10 -5 C 20 5 30 25 35 45" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 22 -6 C 30 5 40 25 45 40" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 40 -2 C 45 10 50 20 50 30" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </g>

                  {/* Right Hand */}
                  <g transform="translate(145, 95) scale(-1, 1) rotate(-35)">
                    <path d="M 0 0 C -10 20 10 70 20 80 C 40 80 45 60 50 40 C 60 20 50 5 40 0 C 30 -5 20 -5 0 0 Z" fill="white" stroke="#161a49" strokeWidth="3" />
                    {/* Fingers */}
                    <path d="M 0 0 C 10 10 20 30 25 50" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 10 -5 C 20 5 30 25 35 45" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 22 -6 C 30 5 40 25 45 40" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="42" cy="15" r="4" fill="none" stroke="#161a49" strokeWidth="2.5" />
                  </g>

                  {/* The Gift Box */}
                  <g transform="translate(90, 65)">
                    {/* Main Body */}
                    <path d="M 10 15 L 60 15 L 65 50 C 65 60 55 65 45 65 L 25 65 C 15 65 5 60 5 50 L 10 15 Z" fill="#161a49" />
                    
                    {/* Lid */}
                    <rect x="0" y="0" width="70" height="15" rx="3" fill="#161a49" stroke="#161a49" strokeWidth="2" />
                    
                    {/* Ribbon Vertical */}
                    <rect x="35" y="0" width="6" height="65" fill="white" />
                    
                    {/* Ribbon Horizontal */}
                    <rect x="10" y="25" width="52" height="3" fill="white" />
                    
                    {/* Box Icon (Right side document) */}
                    <g transform="translate(45, 30)">
                       <rect x="0" y="0" width="12" height="15" rx="2" fill="#5e61cf" stroke="white" strokeWidth="1.5" />
                       <rect x="-3" y="3" width="12" height="15" rx="2" fill="#5e61cf" stroke="white" strokeWidth="1.5" />
                       <line x1="0" y1="8" x2="6" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                       <line x1="0" y1="11" x2="6" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                       <line x1="0" y1="14" x2="4" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </g>
                    
                    {/* Flowing text scribble (Left side) */}
                    <path d="M 12 50 C 15 45 20 48 18 55 C 20 50 25 48 25 53 C 28 45 32 45 32 50" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                    
                    {/* Bow Leaves */}
                    <path d="M 38 -2 C 38 -15 25 -25 15 -18 C 5 -10 10 0 25 0 Z" fill="white" stroke="#161a49" strokeWidth="2.5" />
                    <path d="M 38 -2 C 38 -15 50 -25 60 -18 C 70 -10 65 0 50 0 Z" fill="white" stroke="#161a49" strokeWidth="2.5" />
                    {/* Bow Knot */}
                    <rect x="34" y="-4" width="8" height="6" rx="3" fill="white" stroke="#161a49" strokeWidth="2" />
                  </g>
               </svg>
            </div>
            <h3>Go premium!</h3>
            <p>Gain access to a range of benefits designed to enhance your user experience</p>
            <button className="btn-premium-v3">Find out more</button>
          </div>
        </div>

        {/* Column 3: Calendar, Stats & Meeting */}
        <div className="db-col">
          <div className="card-v2 calendar-widget">
            <div className="calendar-header-v3">
              <h2>May 2021</h2>
              <div className="cal-arrows">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
              </div>
            </div>
            <div className="cal-days-row">
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((day, i) => (
                <div key={i} className="cal-day-item">
                  <span className="d-name">{day}</span>
                  <span className={`d-num ${i === 4 ? 'active' : ''}`}>{14 + i}</span>
                </div>
              ))}
            </div>
            <div className="meeting-timeline">
               <div className="timeline-item">
                  <span className="time">04:30-05:00 PM</span>
                  <div className="meeting-bubble">
                     <Users size={14} />
                     <div className="m-info">
                        <h4>Team meeting</h4>
                        <p>12:00-12:30 . UX/UI design</p>
                     </div>
                     <MoreVertical size={14} />
                  </div>
               </div>
               <div className="timeline-item">
                  <span className="time">11:30-12:30 PM</span>
                  <div className="meeting-bubble grey">
                     <Building2 size={14} />
                     <div className="m-info">
                        <h4>Meeting with new client</h4>
                        <p>12:30-01:30 PM . Job interview</p>
                     </div>
                     <MoreVertical size={14} />
                  </div>
               </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-card-modern">
                <div className="ring-container">
                   <div className="ring" style={{ "--p": 90 }}>90%</div>
                </div>
                <div className="ring-info">
                   <label>DATA RESEARCH</label>
                   <h4>Marketing</h4>
                   <p>You marked 5/5<br/>All assignments are done!</p>
                </div>
            </div>
            <div className="stat-card-modern">
                <div className="ring-container">
                   <div className="ring orange" style={{ "--p": 65 }}>65%</div>
                </div>
                <div className="ring-info">
                   <label>UX/UI DESIGN</label>
                   <h4>Typography</h4>
                   <p>You marked 3/5<br/>2 assignments left</p>
                   <button className="btn-check-stat">Check</button>
                </div>
            </div>
          </div>

          <div className="card-v2 invitation-card">
            <div className="inv-header">
               <h2>Board meeting</h2>
               <Edit2 size={12} />
            </div>
            <div className="inv-meta">
               <span className="dot blue"></span> March 24 at 4:00 PM
            </div>
            <p className="inv-desc">Meeting with John Smith, 4th floor, room 159</p>
            <div className="inv-actions">
               <button className="btn-reschedule">Reschedule</button>
               <button className="btn-accept">Accept Invite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Star Rating Helper ---
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={14} fill="#FFB800" stroke="#FFB800" />
      ))}
      {hasHalfStar && <StarHalf key="half" size={14} fill="#FFB800" stroke="#FFB800" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={14} fill="none" stroke="#D1D5DB" />
      ))}
      <span className="rating-num">{rating}</span>
    </div>
  );
};

// --- Add Vendor Modal ---
const AddVendorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        
        <div className="modal-header">
          <div className="modal-icon">
            <Building2 size={24} />
          </div>
          <div className="modal-header-text">
            <h3>Add New Vendor</h3>
            <p>Register a new service provider</p>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group full">
            <label>Company Name <span>*</span></label>
            <input type="text" placeholder="e.g. Skyline Logistics" />
          </div>
          <div className="form-group">
            <label>Service Category <span>*</span></label>
            <input type="text" placeholder="Fitness" />
          </div>
          <div className="form-group">
            <label>Rating (Initial)</label>
            <input type="text" placeholder="4.5" />
          </div>
          <div className="form-group">
            <label>Contact Person</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="form-group">
            <label>Registration ID</label>
            <input type="text" placeholder="REG-2024-001" />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-register">Register Vendor</button>
        </div>
      </div>
    </div>
  );
};

// --- Vendor Engagement Page Component ---
const VendorEngagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const vendors = [
    { category: 'Fitness Assessment', initial: 'E', name: 'Elite Fitness', rating: 4.9, status: 'Active', type: 'Fitness' },
    { category: 'Travel & Logistics', initial: 'S', name: 'Sky Travel Ltd', rating: 4.5, status: 'Active', type: 'Travel' },
    { category: 'Mind Wellness Coach', initial: 'M', name: 'Mindful Soul', rating: 4.8, status: 'Pending', type: 'Wellness' },
    { category: 'Sports & Activities', initial: 'A', name: 'AQUA Adventures', rating: 4.7, status: 'Active', type: 'Sports' },
  ];

  return (
    <div className="vendor-engagement">
      <div className="page-header">
        <h2>Vendor Engagement</h2>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} /> New Vendor
        </button>
      </div>

      <div className="vendor-grid">
        {vendors.map((vendor, index) => (
          <div key={index} className="vendor-card">
            <span className="vendor-category">{vendor.category}</span>
            <div className="vendor-main-info">
              <span className="vendor-initial">{vendor.initial}</span>
              <h4 className="vendor-name">{vendor.name}</h4>
            </div>
            <StarRating rating={vendor.rating} />
            
            <div className="vendor-stats">
              <div className="stat-item">
                <label>Status</label>
                <span>{vendor.status}</span>
              </div>
              <div className="stat-item">
                <label>Type</label>
                <span>{vendor.type}</span>
              </div>
            </div>

            <button className="btn-outline">Manage Provider</button>
          </div>
        ))}
      </div>

      <AddVendorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Floating Chat Icon */}
      <div className="floating-chat">
        <MessageSquare size={24} />
        <div className="chat-dot"></div>
      </div>
    </div>
  );
};

// --- New Employee Onboarding Components ---

const OnboardEmployeeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        
        <div className="modal-header">
          <div className="modal-icon blue">
            <Users size={24} />
          </div>
          <div className="modal-header-text">
            <h3>Onboard New Employee</h3>
            <p>Initialize onboarding process</p>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>First Name <span>*</span></label>
            <input type="text" placeholder="Sarah" />
          </div>
          <div className="form-group">
            <label>Last Name <span>*</span></label>
            <input type="text" placeholder="Wilson" />
          </div>
          <div className="form-group full">
            <label>Job Title <span>*</span></label>
            <input type="text" placeholder="Senior Project Manager" />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input type="text" placeholder="Operations" />
          </div>
          <div className="form-group">
            <label>Onboarding Level</label>
            <input type="text" placeholder="Standard" />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-modal-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-modal-primary">Start Onboarding</button>
        </div>
      </div>
    </div>
  );
};

const EmployeeOnboarding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const employees = [
    { initial: 'SW', name: 'Sarah Wilson', role: 'Director of Ops', progress: 100, status: 'Completed', color: '#1B2559' },
    { initial: 'JC', name: 'James Chen', role: 'Senior Developer', progress: 85, status: 'In Progress', color: '#2b3674' },
    { initial: 'ER', name: 'Elena Rodriguez', role: 'HR Manager', progress: 60, status: 'In Progress', color: '#4318FF' },
    { initial: 'MT', name: 'Marcus Thorne', role: 'Lead Designer', progress: 100, status: 'Completed', color: '#01B574' }
  ];

  return (
    <div className="onboarding-page">
      <div className="page-header">
        <h2>Employee Onboarding</h2>
        <div className="header-actions">
           <button className="btn-secondary">
             <Download size={16} /> Export List
           </button>
           <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
             <Plus size={16} /> Onboard New
           </button>
        </div>
      </div>

      <div className="onboarding-card">
        <div className="table-responsive">
          <table className="onboarding-table">
            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>ROLE</th>
                <th>ONBOARDING PROGRESS</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, i) => (
                <tr key={i}>
                  <td>
                    <div className="emp-info">
                      <span className="emp-initial" style={{ backgroundColor: emp.color }}>{emp.initial}</span>
                      <span className="emp-name">{emp.name}</span>
                    </div>
                  </td>
                  <td className="emp-role">{emp.role}</td>
                  <td>
                    <div className="progress-container">
                      <div className="progress-bar-wrap">
                        <div className="progress-bar-fill" style={{ width: `${emp.progress}%`, backgroundColor: emp.color }}></div>
                      </div>
                      <span className="progress-text">{emp.progress}%</span>
                    </div>
                  </td>
                  <td className={`emp-status ${emp.status.toLowerCase().replace(' ', '-')}`}>{emp.status}</td>
                  <td className="emp-action">Details</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="distribution-section">
        <h3>Distribution Channels</h3>
        <div className="dist-grid">
          <div className="dist-card">
            <div className="dist-icon"><Apple size={24} /></div>
            <div className="dist-info">
              <h4>iOS Application</h4>
              <p>750 Total Downloads</p>
              <span>v2.4.0 - Active</span>
            </div>
            <button className="btn-copy" onClick={() => alert('Link copied to clipboard!')}>Copy Link</button>
          </div>
          <div className="dist-card">
            <div className="dist-icon"><Smartphone size={24} /></div>
            <div className="dist-info">
              <h4>Android Application</h4>
              <p>500 Total Downloads</p>
              <span>v2.4.0 - Active</span>
            </div>
            <button className="btn-copy" onClick={() => alert('Link copied to clipboard!')}>Copy Link</button>
          </div>
        </div>
      </div>

      <OnboardEmployeeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

const ActivityPlanning = () => {
  const activities = [
    {
      title: 'Surfing',
      icon: <Waves size={16} />,
      image: '/surfing.png',
      question: '"What is the recommended safety gear for beginners?"',
      objective: 'Builds core strength and mental focus through balance.'
    },
    {
      title: 'Swimming',
      icon: <Zap size={16} />,
      image: '/swimming.png',
      question: '"How to manage breathing during long-distance sessions?"',
      objective: 'Excellent low-impact cardio for full-body wellness.'
    }
  ];

  return (
    <div className="activity-planning">
      <div className="page-header">
        <h2>Activity Planning</h2>
      </div>

      <div className="activity-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <div className="activity-image-wrap">
              <img src={activity.image} alt={activity.title} />
            </div>
            <div className="activity-details">
              <div className="activity-title-row">
                <span className="activity-icon-sm">{activity.icon}</span>
                <h3>{activity.title}</h3>
              </div>
              
              <div className="engagement-box">
                <span className="engagement-label">PRESET ENGAGEMENT QUESTION</span>
                <p className="engagement-question">{activity.question}</p>
              </div>

              <div className="objective-box">
                <span className="objective-label">STRATEGIC OBJECTIVE</span>
                <p className="objective-desc">{activity.objective}</p>
              </div>

              <div className="activity-actions">
                <button className="btn-launch">Launch Activity Plan</button>
                <button className="btn-edit-questions">Edit Questions</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Corporate Meetings Components ---

const ScheduleMeetingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '600px' }} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        
        <div className="modal-header">
          <div className="modal-icon blue">
            <Calendar size={24} />
          </div>
          <div className="modal-header-text">
            <h3>Schedule Corporate Meeting</h3>
            <p>Plan a new priority meeting</p>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group full">
            <label>Meeting Title <span>*</span></label>
            <input type="text" placeholder="Architecture Sync" />
          </div>
          <div className="form-group">
            <label>Date <span>*</span></label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start Time</label>
            <input type="time" />
          </div>
          <div className="form-group">
            <label>End Time</label>
            <input type="time" />
          </div>
          <div className="form-group full">
            <label>Location</label>
            <input type="text" placeholder="Executive Conference Room B" />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-modal-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-modal-schedule">Schedule</button>
        </div>
      </div>
    </div>
  );
};

const CorporateMeetings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="corporate-meetings">
      <div className="page-header">
        <h2>Corporate Meetings</h2>
        <button className="btn-schedule-meeting" onClick={() => setIsModalOpen(true)}>
          <Calendar size={18} /> Schedule Meeting
        </button>
      </div>

      <div className="meetings-grid">
        <div className="main-meeting-card">
          <div className="meeting-header-row">
            <div className="meeting-title-section">
              <div className="meeting-icon-badge">
                <Calendar size={24} />
              </div>
              <div className="meeting-title-content">
                <h2>Final Requirements Meeting</h2>
                <p>Phase: Target Activities & Planning</p>
              </div>
            </div>
            <span className="badge-priority-green">UPCOMING PRIORITY</span>
          </div>

          <div className="meeting-details-inner-card">
            <div className="detail-field">
              <label>DATE</label>
              <span>March 12, 2026</span>
            </div>
            <div className="detail-field">
              <label>TIME</label>
              <span>11:15 AM - 1:00 PM</span>
            </div>
            <div className="detail-field">
              <label>LOCATION</label>
              <span>Tripsxing Executive Wing</span>
            </div>
            <div className="detail-field">
              <label>AUTHORITY</label>
              <span>C-Level Presence</span>
            </div>
          </div>

          <button className="btn-confirm-navy">Confirm Attendance</button>
        </div>

        <div className="recent-meetings-card">
          <h3>Recent Meetings</h3>
          <div className="recent-list-rows">
            {[
              { date: 'Feb 28', title: 'Initial Architecture Sync', status: 'Completed' },
              { date: 'Feb 24', title: 'Vendor Compatibility Audit', status: 'Completed' }
            ].map((meeting, i) => (
              <div key={i} className="recent-row-item">
                <span className="recent-row-date">{meeting.date}</span>
                <span className="recent-row-name">{meeting.title}</span>
                <span className="badge-completed-green">{meeting.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScheduleMeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

// --- User & Role Management (Governance) Components ---

const AddUserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '800px' }} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        
        <div className="modal-header">
          <div className="modal-icon blue">
            <Users size={24} />
          </div>
          <div className="modal-header-text">
            <h3>Add New User</h3>
            <p>Create a new user account</p>
          </div>
        </div>

        <div className="form-grid" style={{ gap: '24px' }}>
          <div className="form-group">
            <label>First Name <span>*</span></label>
            <input type="text" placeholder="John" />
          </div>
          <div className="form-group">
            <label>Last Name <span>*</span></label>
            <input type="text" placeholder="Doe" />
          </div>
          <div className="form-group full">
            <label>Email Address <span>*</span></label>
            <input type="email" placeholder="john.doe@gromaxx.com" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <select style={{ width: '100px', padding: '8px', borderRadius: '8px', border: '1px solid #E9EDF7' }}>
                <option>PL +48</option>
                <option>US +1</option>
                <option>IN +91</option>
              </select>
              <input type="text" placeholder="XXX XXX XXX" style={{ flex: 1 }} />
            </div>
          </div>
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ margin: 0 }}>Assign Role <span>*</span></label>
              <button style={{ background: 'none', border: 'none', color: '#4318FF', fontSize: '11px', fontWeight: 800, cursor: 'pointer' }}>+ Quick Add</button>
            </div>
            <select style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #E9EDF7' }}>
              <option>Select a role</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Employee</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #E9EDF7' }}>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-modal-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-modal-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1B2559', color: 'white', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: 700, cursor: 'pointer' }}>
             Save
          </button>
        </div>
      </div>
    </div>
  );
};

const AddRoleModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '800px' }} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        
        <div className="modal-header">
          <div className="modal-icon blue">
            <Folder size={24} />
          </div>
          <div className="modal-header-text">
            <h3>Add New Role</h3>
            <p>Create a new role with permissions</p>
          </div>
        </div>

        <div className="modal-stepper">
          <div className={`step-item ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`}>
             <div className="step-circle">{step > 1 ? <Check size={14} /> : '1'}</div>
             <span>Role Details</span>
          </div>
          <div className="step-line"></div>
          <div className={`step-item ${step === 2 ? 'active' : ''}`}>
             <div className="step-circle">2</div>
             <span>Permissions</span>
          </div>
        </div>

        {step === 1 ? (
          <div className="form-grid">
            <div className="form-group full">
              <label>Role Name <span>*</span></label>
              <input type="text" placeholder="e.g. Reservation Manager" />
            </div>
            <div className="form-group full">
              <label>Role Description</label>
              <textarea placeholder="Describe the responsibilities of this role..." style={{ width: '100%', height: '120px', padding: '12px', border: '1px solid #E9EDF7', borderRadius: '12px', resize: 'none' }}></textarea>
            </div>
          </div>
        ) : (
          <div className="permissions-container">
             <div style={{ display: 'flex', gap: '40px', marginBottom: '16px', borderBottom: '1px solid #F4F7FE', paddingBottom: '12px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#A3AED0' }}>ALL</span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#1B2559', flex: 1 }}>MODULE</span>
                <div style={{ display: 'flex', gap: '40px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#A3AED0' }}>VIEW</span>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#A3AED0' }}>CREATE</span>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#A3AED0' }}>UPDATE</span>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#A3AED0' }}>DELETE</span>
                </div>
             </div>

             <div className="perm-section-header">COMMAND CENTER</div>
             <div className="perm-row">
                <input type="checkbox" style={{ marginRight: '40px' }} />
                <div className="perm-row-info">
                   <h4>Dashboards</h4>
                   <div className="perm-badges">
                      <span className="perm-badge">Bookings</span>
                      <span className="perm-badge">Front Desk</span>
                      <span className="perm-badge">Inventory</span>
                      <span className="perm-badge">Owner</span>
                   </div>
                </div>
                <div className="perm-checkboxes">
                   <input type="checkbox" />
                   <input type="checkbox" />
                   <input type="checkbox" />
                   <input type="checkbox" />
                </div>
             </div>

             <div className="perm-section-header">FRONT DESK</div>
             <div className="perm-row">
                <input type="checkbox" style={{ marginRight: '40px' }} />
                <div className="perm-row-info">
                   <h4>Front Desk Operations</h4>
                   <div className="perm-badges">
                      <span className="perm-badge">Check In</span>
                      <span className="perm-badge">Check Out</span>
                      <span className="perm-badge">Folio</span>
                      <span className="perm-badge">Night Audit</span>
                   </div>
                </div>
                <div className="perm-checkboxes">
                   <input type="checkbox" />
                   <input type="checkbox" />
                   <input type="checkbox" />
                   <input type="checkbox" />
                </div>
             </div>
          </div>
        )}

        <div className="modal-footer">
          <button className="btn-modal-cancel" onClick={onClose}>Cancel</button>
          {step === 1 ? (
            <button className="btn-modal-primary" onClick={() => setStep(2)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1B2559', color: 'white', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: 700, cursor: 'pointer' }}>
              Next Step <ChevronRight size={18} />
            </button>
          ) : (
            <>
              <button className="btn-modal-cancel" onClick={() => setStep(1)}>Back</button>
              <button className="btn-modal-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1B2559', color: 'white', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: 700, cursor: 'pointer' }}>
                Save Role <CheckCircle2 size={18} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Governance = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isAddRoleOpen, setIsAddRoleOpen] = useState(false);

  return (
    <div className="governance-page">
      <div className="governance-header">
        <div className="governance-toggles">
          <button 
            className={`gov-toggle-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <Users size={16} /> Users
          </button>
          <button 
            className={`gov-toggle-btn ${activeTab === 'roles' ? 'active' : ''}`}
            onClick={() => setActiveTab('roles')}
          >
            <Folder size={16} /> Roles
          </button>
        </div>
        
        {activeTab === 'users' ? (
          <button className="btn-primary" onClick={() => setIsAddUserOpen(true)}>
            <Plus size={18} /> Add User
          </button>
        ) : (
          <button className="btn-primary" onClick={() => setIsAddRoleOpen(true)}>
            <Plus size={18} /> Add Role
          </button>
        )}
      </div>

      {activeTab === 'users' ? (
        <div className="gov-main-grid">
          <div className="user-profile-card">
            <span className="corporate-id-badge">CORPORATE ID: TRP-9920-X</span>
            <div className="user-profile-top">
              <div className="large-avatar">A</div>
              <div className="user-info-text">
                <h2>Admin User</h2>
                <p>Verified Corporate Manager</p>
              </div>
            </div>

            <div className="user-stats-row">
              <div className="stat-group">
                <label>VERIFIED SINCE</label>
                <span>Jan 2026</span>
              </div>
              <div className="stat-group">
                <label>CLEARANCE</label>
                <span>Level 5 (Elite)</span>
              </div>
              <div className="stat-group">
                <label>TRUST SCORE</label>
                <span>99%</span>
              </div>
            </div>

            <div className="decision-powers">
              <h3>AUTHORIZED DECISION POWERS</h3>
              <div className="power-list">
                {[
                  'Finalize Vendor Contracts',
                  'Assign Employee Roles',
                  'Approve Activity Budgets',
                  'Moderate Meeting Logistics'
                ].map((power, i) => (
                  <div key={i} className="power-item">
                    <CheckCircle2 size={18} className="check" />
                    <span>{power}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="authority-actions-card">
            <h3>Recent Authority Actions</h3>
            <div className="action-list">
              <div className="action-item">
                <div className="action-icon-box green"><Zap size={16} /></div>
                <div className="action-info">
                  <p>Approved <strong>Elite Fitness</strong> provider</p>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="action-item">
                <div className="action-icon-box blue"><Users size={16} /></div>
                <div className="action-info">
                  <p>Onboarded <strong>12 new employees</strong></p>
                  <span>Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="roles-grid">
          <div className="role-card">
            <div className="role-card-header">
              <div className="role-initial">SA</div>
              <div className="role-header-text">
                <h3>Super Admin</h3>
                <p>System Administrator with full access to all modules</p>
              </div>
            </div>
            
            <div className="role-details-row">
              <div className="role-detail-stat">
                <label>USERS</label>
                <span>1</span>
              </div>
              <div className="role-detail-stat">
                <label>TYPE</label>
                <span>System</span>
              </div>
            </div>

            <div className="role-card-footer">
              <span className="role-tag">System Role</span>
              <button className="btn-view-role">View</button>
            </div>
          </div>
        </div>
      )}

      <AddUserModal isOpen={isAddUserOpen} onClose={() => setIsAddUserOpen(false)} />
      <AddRoleModal isOpen={isAddRoleOpen} onClose={() => setIsAddRoleOpen(false)} />
    </div>
  );
};

// --- Main Dashboard Entry ---
const Dashboard = () => {
  const [activeNavItem, setActiveNavItem] = useState('dashboard');

  return (
    <div className="app-container">
      <div className="dashboard-wrapper">
        {/* Modern Sidebar Menu */}
        <nav className="nav">
          <ul className="nav__list">
            <button 
              className={`nav__link ${activeNavItem === 'dashboard' ? 'active-link' : ''}`}
              onClick={() => setActiveNavItem('dashboard')}
            >
              <LayoutGrid size={20} />
            </button>

            <button 
              className={`nav__link ${activeNavItem === 'team' ? 'active-link' : ''}`}
              onClick={() => setActiveNavItem('team')}
            >
              <Users size={20} />
            </button>

            <button 
              className={`nav__link ${activeNavItem === 'assignments' ? 'active-link' : ''}`}
              onClick={() => setActiveNavItem('assignments')}
            >
              <ClipboardList size={20} />
            </button>

            <button 
              className={`nav__link ${activeNavItem === 'features' ? 'active-link' : ''}`}
              onClick={() => setActiveNavItem('features')}
            >
              <Sparkles size={20} />
            </button>

            <button 
              className={`nav__link ${activeNavItem === 'schedule' ? 'active-link' : ''}`}
              onClick={() => setActiveNavItem('schedule')}
            >
              <Calendar size={20} />
            </button>

            <button 
              className={`nav__link ${activeNavItem === 'governance' ? 'active-link' : ''}`}
              onClick={() => setActiveNavItem('governance')}
            >
              <Gavel size={20} />
            </button>
          </ul>

          <div className="nav__circle-1"></div>
          <div className="nav__circle-2"></div>
          <div className="nav__square-1"></div>
          <div className="nav__square-2"></div>
        </nav>

        {/* Main Content Area */}
        <main className="main-content" style={{ padding: '32px 40px 40px 112px', flex: 1, height: '100%', overflowY: 'auto' }}>
          <TopNav />
          <div style={{ paddingTop: '40px' }}>
            {activeNavItem === 'dashboard' ? (
              <DashboardContent />
            ) : activeNavItem === 'team' ? (
              <VendorEngagement />
            ) : activeNavItem === 'assignments' ? (
              <EmployeeOnboarding />
            ) : activeNavItem === 'features' ? (
              <ActivityPlanning />
            ) : activeNavItem === 'schedule' ? (
              <CorporateMeetings />
            ) : activeNavItem === 'governance' ? (
              <Governance />
            ) : (
              <div className="empty-state">
                <h2 style={{ color: '#1a1a3d', opacity: 0.5 }}>{activeNavItem.charAt(0).toUpperCase() + activeNavItem.slice(1)} Content coming soon...</h2>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
