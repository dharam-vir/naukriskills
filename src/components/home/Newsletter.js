import React, { Fragment, useState } from 'react'
import { toast } from 'react-toastify';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const validateEmail = (email) => {
      // Simple email regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!email) {
        toast.error("Email is required.");
        return;
      }
  
      if (!validateEmail(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }
  
      // Simulate success (you can replace with actual API call)
      toast.success("Subscribed successfully!");
      setEmail('');
    };
    return (
        <Fragment>
            <section className="utf_cta_area_item utf_cta_area2_block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="utf_subscribe_block">
                                <div className="col-xl-8 col-md-7">
                                    <div className="section-heading">
                                        <h2 className="utf_sec_title_item utf_sec_title_item2">Subscribe to Our Newsletter!</h2>
                                        <p className="utf_sec_meta">Subscribe to get latest updates and information.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-5">
                                    <div className="contact-form-action">
                                        <form onSubmit={handleSubmit}>
                                            <i className="icon-material-baseline-mail-outline" />
                                            <input
                                                className="form-control"
                                                type="email"
                                                placeholder="Enter your email"
                                                aria-label="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />                                       
                                            <button className="utf_theme_btn" type="submit">Subscribe</button>
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