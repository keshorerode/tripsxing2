import React, { useState } from 'react';
import { Download, Plus, Apple, Smartphone, Search } from 'lucide-react';
import OnboardEmployeeModal from '../components/modals/OnboardEmployeeModal';
import EmployeeDetailModal from '../components/modals/EmployeeDetailModal';

const Onboarding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [employees, setEmployees] = useState([
    { id: 1, initial: 'SW', name: 'Sarah Wilson', role: 'Director of Ops', progress: 100, status: 'Completed', color: '#1B2559', department: 'Operations', level: 'Executive' },
    { id: 2, initial: 'JC', name: 'James Chen', role: 'Senior Developer', progress: 85, status: 'In Progress', color: '#2b3674', department: 'Engineering', level: 'Advanced' },
    { id: 3, initial: 'ER', name: 'Elena Rodriguez', role: 'HR Manager', progress: 60, status: 'In Progress', color: '#4318FF', department: 'Human Resources', level: 'Standard' },
    { id: 4, initial: 'MT', name: 'Marcus Thorne', role: 'Lead Designer', progress: 100, status: 'Completed', color: '#01B574', department: 'Design', level: 'Advanced' }
  ]);

  const handleAddEmployee = (newEmp) => {
    if (newEmp.id) {
      // Update existing
      setEmployees(employees.map(e => e.id === newEmp.id ? newEmp : e));
    } else {
      // Create new
      const id = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1;
      setEmployees([...employees, { ...newEmp, id }]);
    }
    setIsModalOpen(false);
    setEmployeeToEdit(null);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(e => e.id !== id));
    setSelectedEmployee(null);
  };

  const handleEditEmployee = (emp) => {
    setEmployeeToEdit(emp);
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         emp.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="onboarding-page">
      <div className="page-header">
        <div className="header-titles">
          <h2>Employee Onboarding</h2>
          <p>Track and manage new team member orientations</p>
        </div>
        <div className="header-actions">
           <div className="search-box-v2" style={{ marginRight: '16px', maxWidth: '300px' }}>
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search employees..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
           <button className="btn-secondary">
             <Download size={16} /> Export List
           </button>
           <button className="btn-primary" onClick={() => { setEmployeeToEdit(null); setIsModalOpen(true); }}>
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
              {filteredEmployees.map((emp) => (
                <tr key={emp.id}>
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
                  <td>
                    <span className={`status-tag-v2 ${emp.status.toLowerCase().replace(' ', '-')}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="emp-action">
                    <button className="details-link-v2" onClick={() => setSelectedEmployee(emp)}>
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredEmployees.length === 0 && (
            <div className="empty-results-v2">
               <p>No employees found matching your search.</p>
            </div>
          )}
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

      <OnboardEmployeeModal 
        isOpen={isModalOpen} 
        onClose={() => { setIsModalOpen(false); setEmployeeToEdit(null); }} 
        onAdd={handleAddEmployee}
        employeeToEdit={employeeToEdit}
      />
      
      <EmployeeDetailModal 
        employee={selectedEmployee}
        isOpen={!!selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
        onDelete={handleDeleteEmployee}
        onEdit={handleEditEmployee}
      />
    </div>
  );
};

export default Onboarding;

