import React from 'react';
import { Plus, LayoutGrid, ClipboardList, Edit2, Share2, Users, MessageSquare, Calendar, History, Workflow, MoreHorizontal, Trash2, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const Dashboard = () => {
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
                <rect x="32" y="58" width="14" height="14" rx="3" stroke="#1B2559" strokeWidth="1.8" />
                <text x="35" y="68" fill="#1B2559" fontSize="10" fontWeight="900" fontFamily="Arial">A</text>
                
                <rect x="32" y="76" width="14" height="14" rx="3" stroke="#1B2559" strokeWidth="1.8" />
                <path d="M35 83L39 80L43 83" stroke="#1B2559" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <path d="M39 80V87" stroke="#1B2559" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                
                <rect x="32" y="94" width="28" height="15" rx="4" fill="#7B89F4" stroke="#1B2559" strokeWidth="1.2" />
                <rect x="36" y="97.5" width="8" height="8" rx="2" fill="#1B2559" />
                <rect x="46" y="99.5" width="8" height="8" rx="2" stroke="#1B2559" strokeWidth="1.8" fill="none" />
                
                <rect x="58" y="58" width="38" height="38" rx="8" stroke="#1B2559" strokeWidth="1.8" strokeDasharray="5 5" fill="none" />
                
                <path d="M88 80L108 98L100 99L102 108L96 110L94 102L86 105L88 80Z" fill="white" stroke="#1B2559" strokeWidth="2.5" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Stay organized</h3>
            <p>A clear structure for your notes</p>
          </div>
          <div className="top-card">
            <div className="top-card-illustration">
              <svg width="180" height="180" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M -10 25 Q 50 60 130 15" stroke="#1B2559" strokeWidth="2" fill="none" />
                <g transform="translate(10, 50) rotate(-35)">
                  <rect x="0" y="0" width="38" height="52" rx="4" fill="white" stroke="#1B2559" strokeWidth="2" />
                  <rect x="22" y="-12" width="6" height="16" rx="1" fill="#1B2559" />
                  <line x1="8" y1="12" x2="22" y2="12" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                  <line x1="8" y1="20" x2="16" y2="20" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                  <line x1="25" y1="18" x2="32" y2="12" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" />
                  <text x="12" y="38" fill="#7B89F4" fontSize="16" fontWeight="bold">?</text>
                  <path d="M 28 26 Q 34 32 28 38" stroke="#1B2559" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M 0 42 L 38 42 L 38 48 C 38 50.2 36.2 52 34 52 L 4 52 C 1.8 52 0 50.2 0 48 Z" fill="#7B89F4" stroke="#1B2559" strokeWidth="2" />
                  <line x1="8" y1="47" x2="16" y2="47" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </g>

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
                <line x1="72" y1="12" x2="80" y2="12" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 87 6 L 93 6 C 94.5 6 95 6.5 95 8 L 95 14" fill="none" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="83" y="9" width="8" height="8" rx="2" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <path d="M 100 6 L 108 14 M 108 6 L 100 14" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 18 25 L 18 16 C 18 13 20 11 23 11 L 30 11 C 33 11 35 13 35 16 L 35 25 Z" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <rect x="21" y="14" width="4" height="3" rx="1.5" fill="#1B2559" />
                <rect x="27" y="14" width="6" height="3" rx="1.5" fill="#1B2559" />
                <path d="M 32 25 L 32 15 C 32 12 34 10 37 10 L 45 10 C 48 10 50 12 50 15 L 50 25 Z" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <rect x="36" y="14" width="10" height="3" rx="1.5" fill="#1B2559" />
                <rect x="15" y="25" width="85" height="60" rx="8" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <rect x="25" y="32" width="38" height="20" rx="4" fill="#7B89F4" />
                <line x1="70" y1="36" x2="88" y2="36" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="70" y1="44" x2="84" y2="44" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="36" y="58" width="50" height="20" rx="8" fill="#1B2559" />
                <rect x="34" y="54" width="50" height="20" rx="8" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <rect x="49" y="59" width="20" height="10" rx="2" fill="none" stroke="#1B2559" strokeWidth="1.5" />
                <path d="M 49 59 L 59 66 L 69 59" stroke="#1B2559" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="30" y1="84" x2="86" y2="84" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="30" y1="91" x2="70" y2="91" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="104" y="66" width="4" height="16" rx="2" fill="#1B2559" />
                <rect x="40" y="99" width="18" height="14" rx="4" fill="#1B2559" />
                <rect x="42" y="96" width="18" height="14" rx="4" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <path d="M49 100 L53 104 L50 107 L46 107 L46 103 Z" fill="#1B2559" stroke="#1B2559" strokeWidth="1" strokeLinejoin="round" />
                <rect x="62" y="99" width="18" height="14" rx="4" fill="#1B2559" />
                <rect x="64" y="96" width="18" height="14" rx="4" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <circle cx="73" cy="100.5" r="1.5" fill="#1B2559" />
                <line x1="73" y1="103" x2="73" y2="106" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="84" y="99" width="30" height="14" rx="4" fill="#1B2559" />
                <rect x="86" y="96" width="30" height="14" rx="4" fill="white" stroke="#1B2559" strokeWidth="2.5" />
                <line x1="92" y1="103" x2="110" y2="103" stroke="#1B2559" strokeWidth="2.5" strokeLinecap="round" />
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
                  <rect x="70" y="30" width="12" height="15" rx="2" fill="white" transform="rotate(-15 70 30)" />
                  <rect x="85" y="45" width="8" height="12" rx="1" fill="white" transform="rotate(30 85 45)" />
                  <rect x="190" y="65" width="10" height="12" rx="2" fill="white" transform="rotate(15 190 65)" />
                  <rect x="200" y="80" width="8" height="10" rx="1" fill="white" transform="rotate(-25 200 80)" />
                  <rect x="155" y="20" width="20" height="20" rx="4" fill="white" stroke="#161a49" strokeWidth="2.5" transform="rotate(10 155 20)" />
                  <path d="M160 25 L170 35 M170 25 L160 35" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 45 60 L 75 80" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 60 40 L 80 55" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 50 90 C 45 80 40 90 50 100 C 60 110 55 120 45 110 C 35 100 40 85 55 90" stroke="#161a49" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 180 35 C 190 25 205 35 190 50 C 180 60 190 70 200 60 C 210 50 205 35 190 45" stroke="#161a49" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <line x1="85" y1="85" x2="100" y2="82" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="175" y1="80" x2="195" y2="78" stroke="#161a49" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 195 115 L 205 125 L 200 130 Z" fill="#161a49" />
                  <g transform="translate(70, 95) rotate(-25)">
                    <path d="M 0 0 C -10 20 10 70 20 80 C 40 80 45 60 50 40 C 60 20 50 5 40 0 C 30 -5 20 -5 0 0 Z" fill="white" stroke="#161a49" strokeWidth="3" />
                    <path d="M 0 0 C 10 10 20 30 25 50" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 10 -5 C 20 5 30 25 35 45" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 22 -6 C 30 5 40 25 45 40" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 40 -2 C 45 10 50 20 50 30" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </g>
                  <g transform="translate(145, 95) scale(-1, 1) rotate(-35)">
                    <path d="M 0 0 C -10 20 10 70 20 80 C 40 80 45 60 50 40 C 60 20 50 5 40 0 C 30 -5 20 -5 0 0 Z" fill="white" stroke="#161a49" strokeWidth="3" />
                    <path d="M 0 0 C 10 10 20 30 25 50" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 10 -5 C 20 5 30 25 35 45" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 22 -6 C 30 5 40 25 45 40" stroke="#161a49" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <circle cx="42" cy="15" r="4" fill="none" stroke="#161a49" strokeWidth="2.5" />
                  </g>
                  <g transform="translate(90, 65)">
                    <path d="M 10 15 L 60 15 L 65 50 C 65 60 55 65 45 65 L 25 65 C 15 65 5 60 5 50 L 10 15 Z" fill="#161a49" />
                    <rect x="0" y="0" width="70" height="15" rx="3" fill="#161a49" stroke="#161a49" strokeWidth="2" />
                    <rect x="35" y="0" width="6" height="65" fill="white" />
                    <rect x="10" y="25" width="52" height="3" fill="white" />
                    <g transform="translate(45, 30)">
                       <rect x="0" y="0" width="12" height="15" rx="2" fill="#5e61cf" stroke="white" strokeWidth="1.5" />
                       <rect x="-3" y="3" width="12" height="15" rx="2" fill="#5e61cf" stroke="white" strokeWidth="1.5" />
                       <line x1="0" y1="8" x2="6" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                       <line x1="0" y1="11" x2="6" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                       <line x1="0" y1="14" x2="4" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </g>
                    <path d="M 12 50 C 15 45 20 48 18 55 C 20 50 25 48 25 53 C 28 45 32 45 32 50" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M 38 -2 C 38 -15 25 -25 15 -18 C 5 -10 10 0 25 0 Z" fill="white" stroke="#161a49" strokeWidth="2.5" />
                    <path d="M 38 -2 C 38 -15 50 -25 60 -18 C 70 -10 65 0 50 0 Z" fill="white" stroke="#161a49" strokeWidth="2.5" />
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
                  </div>
               </div>
               <div className="timeline-item">
                  <span className="time">11:30-12:30 PM</span>
                  <div className="meeting-bubble grey">
                     <Building2 size={14} /> {/* Placeholder if Building2 is not here */}
                     <div className="m-info">
                        <h4>Meeting with new client</h4>
                        <p>12:30-01:30 PM . Job interview</p>
                     </div>
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

export default Dashboard;
