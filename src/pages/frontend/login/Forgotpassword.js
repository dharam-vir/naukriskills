import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendForgotPasswordEmail } from '../../../features/AuthSlice';
import { toast } from 'react-toastify';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
        toast.error('Email is required');
    } else if (!emailRegex.test(email)) {
        toast.error('Please enter a valid email address');
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const resultAction = await dispatch(sendForgotPasswordEmail({ email }));
    if (sendForgotPasswordEmail.fulfilled.match(resultAction)) {
        setEmail('');
      }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3">
            <div className="utf-login-register-page-aera margin-bottom-50">
              <div className="utf-welcome-text-item">
                <h3>Forgot Your Password?</h3>
                <span>
                  Enter your email address below and we'll send you a password recovery email.
                </span>
              </div>
              <form onSubmit={handleSubmit} id="login-form" noValidate>
                <div className="utf-no-border">
                  <input
                    type="email"
                    className="utf-with-border"
                    name="email"
                    id="emailaddress"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && (
                    <div style={{ color: 'red', fontSize: '14px' }}>{errors.email}</div>
                  )}
                </div>

                <button
                  className="button full-width utf-button-sliding-icon ripple-effect margin-top-10"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Recovery Email'}
                  <i className="icon-feather-chevron-right" />
                </button>
              </form>

              <div className="forget-text margin-top-15">
                <span>
                  Forget it? <Link to="/login">Go back to Sign In</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Forgotpassword;
