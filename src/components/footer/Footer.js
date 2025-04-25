import React, { Fragment } from 'react'
import footer_logo from '../../assets/images/footer_logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
      <div className="clearfix"></div>
      <div id="footer">
        <div className="utf-footer-section-item-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-12">
                <div className="utf-footer-item-links">
                  <Link to="/"><img className="footer-logo" src={footer_logo} alt="footer_logo" /></Link>
                  <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when unknown printer took a galley type scrambled.</p>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Job Categories</h3>
                  <ul>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Developement</span></Link></li>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Designing</span></Link></li>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Marketing</span></Link></li>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Data Analytics</span></Link></li>
                    <li><Link to="#"><i className="icon-feather-chevron-right" /> <span>Post New Job</span></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Job Type</h3>
                  <ul>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Work from Home</span></Link></li>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Internship Job</span></Link></li>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Freelancer Job</span></Link></li>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Part Time Job</span></Link></li>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Full Time Job</span></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Resources</h3>
                  <ul>
                    <li><Link to="#"><i className="icon-feather-chevron-right" /> <span>My Account</span></Link></li>
                    <li><Link to="#"><i className="icon-feather-chevron-right" /> <span>Support</span></Link></li>
                    <li><Link to="#"><i className="icon-feather-chevron-right" /> <span>How It Works</span></Link></li>
                    <li><Link to="#"><i className="icon-feather-chevron-right" /> <span>Underwriting</span></Link></li>
                    <li><Link to="#"><i className="icon-feather-chevron-right" /> <span>Employers</span></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right" /> <span>Jobs Listing</span></Link></li>
                    <li><Link to="/about-us"><i className="icon-feather-chevron-right" /> <span>About Us</span></Link></li>
                    <li><Link to="/contact-us"><i className="icon-feather-chevron-right" /> <span>Contact Us</span></Link></li>
                    <li><Link to="/privacy-policy"><i className="icon-feather-chevron-right" /> <span>Privacy Policy</span></Link></li>
                    <li><Link to="/terms-condition"><i className="icon-feather-chevron-right" /> <span>Term &amp; Condition</span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <div className="utf-footer-copyright-item">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">Copyright © 2014 - {new Date().toLocaleDateString(undefined, { year: 'numeric' })} All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer