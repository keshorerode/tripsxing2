import React, { useState } from 'react';
import { Users, Folder, Plus } from 'lucide-react';
import AddUserModal from '../components/modals/AddUserModal';
import AddRoleModal from '../components/modals/AddRoleModal';
import UsersTab from './UsersTab';
import RolesTab from './RolesTab';

const Governance = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isAddRoleOpen, setIsAddRoleOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [roleToEdit, setRoleToEdit] = useState(null);

  const [users, setUsers] = useState([
    { 
      id: 1, 
      firstName: 'Admin', 
      lastName: 'User', 
      email: 'admin@tripsxing.com', 
      role: 'Super Admin', 
      status: 'Active',
      clearance: 'Level 5 (Elite)',
      trustScore: '99%'
    }
  ]);

  const [roles, setRoles] = useState([
    { 
      id: 1, 
      name: 'Super Admin', 
      description: 'System Administrator with full access to all modules', 
      userCount: 1, 
      type: 'System' 
    }
  ]);

  const handleAddUser = (data) => {
    if (data.id) {
      setUsers(users.map(u => u.id === data.id ? { ...u, ...data } : u));
    } else {
      const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
      setUsers([{ ...data, id: newId }, ...users]);
    }
    setIsAddUserOpen(false);
    setUserToEdit(null);
  };

  const handleAddRole = (data) => {
    if (data.id) {
      setRoles(roles.map(r => r.id === data.id ? { ...r, ...data } : r));
    } else {
      const newId = roles.length > 0 ? Math.max(...roles.map(r => r.id)) + 1 : 1;
      setRoles([{ ...data, id: newId }, ...roles]);
    }
    setIsAddRoleOpen(false);
    setRoleToEdit(null);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleDeleteRole = (id) => {
    if (window.confirm('Delete this role?')) {
      setRoles(roles.filter(r => r.id !== id));
    }
  };

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
          <button className="btn-primary" onClick={() => { setUserToEdit(null); setIsAddUserOpen(true); }}>
            <Plus size={18} /> Add User
          </button>
        ) : (
          <button className="btn-primary" onClick={() => { setRoleToEdit(null); setIsAddRoleOpen(true); }}>
            <Plus size={18} /> Add Role
          </button>
        )}
      </div>

      {activeTab === 'users' ? (
        <UsersTab 
          users={users} 
          onEdit={(u) => { setUserToEdit(u); setIsAddUserOpen(true); }}
          onDelete={handleDeleteUser}
        />
      ) : (
        <RolesTab 
          roles={roles} 
          onEdit={(r) => { setRoleToEdit(r); setIsAddRoleOpen(true); }}
          onDelete={handleDeleteRole}
        />
      )}

      <AddUserModal 
        isOpen={isAddUserOpen} 
        onClose={() => { setIsAddUserOpen(false); setUserToEdit(null); }} 
        onAdd={handleAddUser}
        userToEdit={userToEdit}
      />
      <AddRoleModal 
        isOpen={isAddRoleOpen} 
        onClose={() => { setIsAddRoleOpen(false); setRoleToEdit(null); }} 
        onAdd={handleAddRole}
        roleToEdit={roleToEdit}
      />
    </div>
  );
};

export default Governance;


