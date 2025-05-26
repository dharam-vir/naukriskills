import React, { Fragment, useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeUser } from '../../features/subscriptionSlice';

const Newsletter = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.subscription);

    const [formData, setFormData] = useState({
        email: '',
    });

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        if (!formData.email) {
            toast.error('Email is required');
        } else if (!validateEmail(formData.email)) {
            toast.error('Invalid email address');
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            dispatch(subscribeUser(formData));
        }
    };
    return (
        <Fragment>
            <section className="utf_cta_area_item utf_cta_area2_block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="utf_subscribe_block">
                                <div className="col-xl-6 col-md-7">
                                    <div className="section-heading">
                                        <h2 className="utf_sec_title_item utf_sec_title_item2">Subscribe to Our Newsletter!</h2>
                                        <p className="utf_sec_meta">Subscribe to get latest updates and information.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-5">
                                    <div className="contact-form-action">
                                        <form onSubmit={handleSubmit} noValidate>
                                            <i className="icon-material-baseline-mail-outline" />
                                            <input
                                                className="form-control"
                                                type="email"
                                                placeholder="Enter your email"
                                                aria-label="Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <button className="utf_theme_btn" type="submit">{loading ? 'Subscribing...' : 'Subscribe'}</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default Newsletter