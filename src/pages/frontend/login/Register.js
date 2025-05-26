import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../features/AuthSlice';

const Register = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [formField, setFormField] = useState({
        user_type: 'user',
        gender: 'other',
        username: '',
        email: '',
        password: '',
        rpassword: '',
      });

  
    const handleChange = (e) => {
        setFormField({ ...formField, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formField.password !== formField.rpassword) {
            alert('Passwords do not match!');
            return;
        }
        const { rpassword, ...userData } = formField;
       dispatch(registerUser(userData));
    }

    useEffect(() => {        
        if (user) {
          if (user.user_type === 'user') {
            navigate('/users/dashboard');
          } else if (user.user_type === 'employer') {
            navigate('/employer/dashboard');
          } else {
            navigate('/admin/dashboard');
          }
        }
      }, [user, navigate]);

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3">
                        <div className="utf-login-register-page-aera margin-bottom-50">
                            <div className="utf-welcome-text-item">
                                <h3>Create Your New Account!</h3>
                                <span>Don't Have an Account?
                                    <Link to="/login">Log In!</Link>
                                </span>
                            </div>
                            <form onSubmit={handleSubmit} id="utf-register-account-form">
                                <div className="utf-account-type">                                    
                                    <div>
                                        <input type="radio"
                                            name="user_type"
                                            id="employer-radio"
                                            value="user"
                                            className="utf-account-type-radio"
                                            checked={formField.user_type === 'user'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="employer-radio" title="Candidate" data-tippy-placement="top" className="utf-ripple-effect-dark"><i className="icon-material-outline-account-circle" /> Candidate</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="user_type"
                                            value="employer"
                                            id="freelancer-radio"
                                            className="utf-account-type-radio"
                                            checked={formField.user_type === 'employer'}
                                            onChange={handleChange}
                                            defaultChecked
                                        />
                                        <label htmlFor="freelancer-radio" title="Employer" data-tippy-placement="top" className="utf-ripple-effect-dark"><i className="icon-material-outline-business-center" />Employer </label>
                                    </div>
                                </div>

                                <div className="utf-no-border">
                                    <input
                                        type="text"
                                        className="utf-with-border"
                                        name="username"
                                        id="username"
                                        placeholder="User Name"
                                        value={formField.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="utf-no-border">
                                    <input
                                        type="text"
                                        className="utf-with-border"
                                        name="email"
                                        id="email"
                                        placeholder="Email Address"
                                        value={formField.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>                              
                                <div className="utf-no-border">
                                    <input
                                        type="password"
                                        className="utf-with-border"
                                        name="password"
                                        id="password-register"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={formField.password}
                                        required
                                    />
                                </div>
                                <div className="utf-no-border">
                                    <input
                                        type="password"
                                        className="utf-with-border"
                                        name="rpassword"
                                        id="password-repeat-register"
                                        placeholder="Repeat Password"
                                        value={formField.rpassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="checkbox margin-top-10">
                                    <input type="checkbox" id="terms" required />                                    
                                    <label htmlFor="terms"><span className="checkbox-icon" /> I Have Read and Agree to the
                                        <Link to="/terms-condition">Terms &amp; Conditions</Link>
                                    </label>
                                </div>
                                <button className="button full-width utf-button-sliding-icon ripple-effect margin-top-10" type="submit" disabled={loading}>{loading ? 'Registering...' : 'Create An Account'} <i className="icon-feather-chevron-right" /></button>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Register