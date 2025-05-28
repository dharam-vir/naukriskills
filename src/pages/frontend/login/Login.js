import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../features/AuthSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [rememberMe, setRememberMe] = useState(false);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  
  useEffect(() => {
    if (user) {
      if (user.user_type === 'user') {
        navigate('/user/dashboard');
      } else if (user.user_type === 'employer') {
        navigate('/employer/dashboard');
      } else {
        navigate('/admin/dashboard');
      }
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ credentials, rememberMe }));
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3">
            <div className="utf-login-register-page-aera margin-bottom-50">
              <div className="utf-welcome-text-item">
                <h3>Welcome Back Sign in to Continue</h3>
                <span>Don't Have an Account? <Link to="/register">Sign Up!</Link></span>
              </div>
              <form onSubmit={handleSubmit} id="login-form">
                <div className="utf-no-border">
                  <input
                    type="text"
                    className="utf-with-border"
                    name="email"
                    id="emailaddress"
                    placeholder="Email Address"
                    required
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  />
                </div>
                <div className="utf-no-border">
                  <input type="password"
                    className="utf-with-border"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  />
                </div>
                <div className="checkbox margin-top-10">
                  <input
                    type="checkbox"
                    id="two-step"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="two-step"><span className="checkbox-icon" /> Remember Me</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
              </form>
              <button className="button full-width utf-button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form" disabled={loading}> {loading ? 'Logging in...' : 'Log In'} <i className="icon-feather-chevron-right" /></button>

              {error && <div className="alert alert-danger mt-3">{error}</div>}

              <div className="utf-social-login-separator-item"><span>Or Login in With</span></div>
              <div className="utf-social-login-buttons-block">
                <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Facebook</button>
                <button className="google-login ripple-effect"><i className="icon-brand-google" /> Google+</button>
                <button className="twitter-login ripple-effect"><i className="icon-brand-twitter" /> Twitter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  )
}

export default Login