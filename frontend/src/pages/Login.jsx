import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LayoutGrid, RefreshCw, Share2 } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token and user data
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="login-page-v4">
      <div className="login-card-v4">
        
        {/* Left Panel: Feature Showcase */}
        <div className="lp-left-panel">
          <div className="lp-brand">
            <img src="/tripsxing-logo.png" alt="Tripsxing" style={{ height: '45px', objectFit: 'contain' }} />
          </div>

          <div className="lp-illustration">
            <img src="/login_illustration.png" alt="Illustration" style={{ width: '220px', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }} />
          </div>

          <div className="lp-feature-list">
            <div className="lp-feature-item">
              <span className="lp-feature-icon">
                <LayoutGrid size={20} color="white" />
              </span>
              <div className="lp-feature-text">
                <div>Stay organized</div>
                <div className="lp-feature-sub">A clear structure for your notes</div>
              </div>
            </div>
            <div className="lp-feature-item">
              <span className="lp-feature-icon">
                <RefreshCw size={20} color="white" />
              </span>
              <div className="lp-feature-text">
                <div>Sync your notes</div>
                <div className="lp-feature-sub">Ensure that notes are synced</div>
              </div>
            </div>
            <div className="lp-feature-item">
              <span className="lp-feature-icon">
                <Share2 size={20} color="white" />
              </span>
              <div className="lp-feature-text">
                <div>Collaborate and share</div>
                <div className="lp-feature-sub">Share notes with colleagues</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Auth Form */}
        <div className="lp-right-panel">
          <div className="lp-greeting">
            <h2>Hi, welcome back! ✨🚀</h2>
            <p>This platform is designed to revolutionize the way you organize and access your notes</p>
            {error && <div style={{ color: '#EE5D50', background: '#FFEBEB', padding: '10px', borderRadius: '8px', marginTop: '16px', fontSize: '13px', fontWeight: 600 }}>{error}</div>}
          </div>

          <form onSubmit={handleLogin}>
            <div className="lp-form-group">
              <label>Email address</label>
              <div className="lp-input-wrap">
                <Mail size={18} className="lp-input-icon" />
                <input 
                  type="email" 
                  placeholder="james@tripsxing.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="lp-form-group">
              <label>Password</label>
              <div className="lp-input-wrap">
                <Lock size={18} className="lp-input-icon" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  className="password-toggle-v4"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#A3AED0',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-options" style={{ marginBottom: '24px' }}>
              <label className="checkbox-container">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="lp-btn-primary" disabled={loading}>
              {loading ? 'Authenticating...' : 'Sign In →'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;


