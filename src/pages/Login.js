import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { fetchLogin } from '../utils/api/auth';

const Login = () => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

    // Handle input changes and update state accordingly
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const loginForm = () => {
        if (formValue.email && formValue.password) {      
            
            navigate('/dashboard');
        } else {           
            toast("Please check Login Details!");
        }
    };

    const pratimaanHelp = () => {
        toast('Please contect to Right NIC Codinater Mr. Amit Kumar EmailID : amit.kr@nic.in')
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link to="/" className="h1"><b>P</b>ratimaan</Link>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                name="email"
                                value={formValue.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Email"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>

                        <div className="input-group mb-3">
                            <input
                                type="password"
                                name="password"
                                value={formValue.password}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Password"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">                     
                            </div>
                            <div className="col-4">
                                <button
                                    type="button"
                                    onClick={loginForm}
                                    className="btn btn-primary btn-block"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                        <p className="mb-1">
                            <Link onClick={pratimaanHelp}>I forgot my password</Link>
                        </p>
                        
                        <p className="mb-0">
                            <Link onClick={pratimaanHelp} className="text-center">Register a new membership</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
