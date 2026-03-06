import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle2, ShieldCheck } from 'lucide-react';

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const token = searchParams.get('token');

  // For debugging purposes in this demo phase
  React.useEffect(() => {
    if (token) console.log("Account Activation Token:", token);
  }, [token]);

  const strength = password.length > 12 ? 3 : password.length > 8 ? 2 : password.length > 4 ? 1 : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && strength >= 2) {
      setIsSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    }
  };

  if (isSuccess) {
    return (
      <div className="set-password-page">
        <div className="card-set-pw success-view">
          <div className="success-icon-badge">
            <CheckCircle2 size={48} color="#01B574" />
          </div>
          <h2>Password Set Successfully!</h2>
          <p>Your account is now secure. Redirecting you to the login page...</p>
          <button className="btn-primary" onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="set-password-page">
      <div className="card-set-pw">
        <div className="login-logo" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src="/tripsxing-logo.png" alt="Tripsxing" />
        </div>
        
        <div className="login-header" style={{ textAlign: 'center' }}>
          <h1>Set Your Password</h1>
          <p>Create a secure password for your new Tripsxing account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>New Password</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Min. 8 characters" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="password-strength">
              <div className={`strength-bar ${strength >= 1 ? 'active' : ''}`}></div>
              <div className={`strength-bar ${strength >= 2 ? 'active' : ''}`}></div>
              <div className={`strength-bar ${strength >= 3 ? 'active' : ''}`}></div>
            </div>
            <span style={{ fontSize: '11px', color: '#707EAE', marginTop: '8px', display: 'block' }}>
              Tip: Use symbols and numbers for a stronger password.
            </span>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input 
                type="password" 
                placeholder="Repeat password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>
            {confirmPassword && password !== confirmPassword && (
              <span style={{ fontSize: '11px', color: '#EE5D50', marginTop: '4px', display: 'block' }}>
                Passwords do not match.
              </span>
            )}
          </div>

          <button 
            type="submit" 
            className="btn-login" 
            disabled={password !== confirmPassword || strength < 2}
            style={{ opacity: (password === confirmPassword && strength >= 2) ? 1 : 0.6 }}
          >
            Create Account <ShieldCheck size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPassword;
