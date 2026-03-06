import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/Dashboard';
import VendorsPage from './pages/Vendors';
import OnboardingPage from './pages/Onboarding';
import ActivitiesPage from './pages/Activities';
import MeetingsPage from './pages/Meetings';
import GovernancePage from './pages/Governance';
import ProfilePage from './pages/Profile';
import SettingsPage from './pages/Settings';
import LoginPage from './pages/Login';
import SetPasswordPage from './pages/SetPassword';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/set-password" element={<SetPasswordPage />} />

        {/* Protected Dashboard Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="team" element={<VendorsPage />} />
          <Route path="assignments" element={<OnboardingPage />} />
          <Route path="features" element={<ActivitiesPage />} />
          <Route path="schedule" element={<MeetingsPage />} />
          <Route path="governance" element={<GovernancePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
          
          <Route path="*" element={
            <div className="empty-state">
              <h2 style={{ color: '#1a1a3d', opacity: 0.5 }}>Content coming soon...</h2>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

