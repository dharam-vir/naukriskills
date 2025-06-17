import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PersonalDetails = () => {
  const [popUp, setPopUp] = useState(false);
  const [personalPopUp, setPersonalPopUp] = useState(false);
  const [socialAccountsPopUp, setSocialAccountsPopUp] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const updateGeneralInfo = () => {
    setPopUp(!popUp);
  };
   const updatePersonalDetail = () => {
    setPersonalPopUp(!personalPopUp);
  };
  
const updateSocialAccounts = () => {
   setSocialAccountsPopUp(!socialAccountsPopUp);
}
  return (
    <Fragment>
      <div className="row">

        {/* General Information */}
        <div className="col-xl-12">
          <div className="dashboard-box">
            <div className="headline d-flex justify-content-between align-items-center">
              <h3>General Information</h3>
              <Link to="#" onClick={updateGeneralInfo}>
                {popUp ? 'Close' : 'Update'}
              </Link>
            </div>

            <div className="content with-padding padding-bottom-10">
              {!popUp ? (
                <div className="row">
                  <div className="col-xl-6">
                    <p><strong>First Name:</strong> {user?.name || '-'}</p>
                  </div>
                  <div className="col-xl-6">
                    <p><strong>Last Name:</strong> {user?.lastName || '-'}</p>
                  </div>
                  <div className="col-xl-6">
                    <p><strong>Email Address:</strong> {user?.email || '-'}</p>
                  </div>
                  <div className="col-xl-6">
                    <p><strong>Phone Number:</strong> {user?.mobilno || '-'}</p>
                  </div>
                  <div className="col-xl-6">
                    <p><strong>Designation:</strong> {user?.designation || '-'}</p>
                  </div>
                  <div className="col-xl-6">
                    <p><strong>Location:</strong> {user?.location || '-'}</p>
                  </div>
                  <div className="col-xl-6">
                    <p><strong>Preferred Location:</strong> {user?.preLocation || '-'}</p>
                  </div>
                  <div className="col-xl-6">
                    <p><strong>Address:</strong> {user?.address || '-'}</p>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-xl-6">
                    <label>First Name</label>
                    <input className="utf-with-border" type="text" defaultValue={user?.name} />
                  </div>
                  <div className="col-xl-6">
                    <label>Last Name</label>
                    <input className="utf-with-border" type="text" defaultValue={user?.lastName} />
                  </div>
                  <div className="col-xl-6">
                    <label>Email Address</label>
                    <input className="utf-with-border" type="email" defaultValue={user?.email} />
                  </div>
                  <div className="col-xl-6">
                    <label>Phone Number</label>
                    <input className="utf-with-border" type="text" defaultValue={user?.mobilno} />
                  </div>
                  <div className="col-xl-6">
                    <label>Designation</label>
                    <input className="utf-with-border" type="text" defaultValue={user?.designation} />
                  </div>
                  <div className="col-xl-6">
                    <label>Location</label>
                    <input className="utf-with-border" type="text" defaultValue={user?.location} />
                  </div>
                  <div className="col-xl-6">
                    <label>Preferred Location</label>
                    <input className="utf-with-border" type="text" defaultValue={user?.preLocation} />
                  </div>
                  <div className="col-xl-6">
                    <label>Address</label>
                    <input className="utf-with-border" type="text" defaultValue={user?.address} />
                  </div>

                  <div className="col-xl-12 text-end mt-3">
                    <button className="button utf-ripple-effect-dark" onClick={updateGeneralInfo}>
                      Save & Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* Personal Detail & Address */}
        <div className="col-xl-12">
          <div className="dashboard-box">
            <div className="headline d-flex justify-content-between align-items-center">
              <h3>Personal Detail & Address</h3>
              <Link onClick={updatePersonalDetail}>
                {personalPopUp ? 'Close' : 'Update'}
              </Link>
            </div>           
            <div className="content with-padding padding-bottom-10">
              {!personalPopUp ? (
                <div>sdadasd</div>
              ) : (
                <div className="row">
                <div className="col-xl-6">
                  <label>Birth Date</label>
                  <input className="utf-with-border" type="date" />
                </div>
                <div className="col-xl-6">
                  <label>Address</label>
                  <input className="utf-with-border" type="text" placeholder="Address" />
                </div>
                <div className="col-xl-6">
                  <label>City</label>
                  <select className="selectpicker utf-with-border">
                    <option>Allahabad</option>
                    <option>Faizabad</option>
                  </select>
                </div>
                <div className="col-xl-6">
                  <label>State</label>
                  <select className="selectpicker utf-with-border">
                    <option>Uttar Pradesh</option>
                    <option>Delhi</option>
                  </select>
                </div>
                <div className="col-xl-6">
                  <label>Country</label>
                  <select className="selectpicker utf-with-border">
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>
                <div className="col-xl-6">
                  <label>Zip Code</label>
                  <input className="utf-with-border" type="text" placeholder="110001" />
                </div>
                <div className="col-xl-6">
                  <label>Father Name</label>
                  <input className="utf-with-border" type="text" placeholder="Father's Name" />
                </div>
                <div className="col-xl-6">
                  <label>Hobbies (comma-separated)</label>
                  <input className="utf-with-border" type="text" placeholder="Reading, Traveling" />
                </div>
                <div className="col-xl-12">
                  <label>Job Description</label>
                  <textarea className="utf-with-border" rows={3} placeholder="Describe job responsibilities..."></textarea>
                </div>
              </div>
              )}             
            </div>
          </div>
        </div>

        {/* Social Accounts d-flex justify-content-between align-items-center */}
        <div className="col-xl-12">
          <div className="dashboard-box">
            <div className="headline d-flex justify-content-between align-items-center">
              <h3>Social Accounts</h3>
              <Link onClick={updateSocialAccounts}>{ socialAccountsPopUp ? 'Close' : 'Update'}</Link>
            </div>
            <div className="content with-padding padding-bottom-10">
              {!socialAccountsPopUp ? (
                <div>sdsdsdsdsds</div>
              ) : (
                <div className="row">
                {[
                  { label: 'Facebook', icon: 'icon-brand-facebook', placeholder: 'https://www.facebook.com/' },
                  { label: 'Twitter', icon: 'icon-brand-twitter', placeholder: 'https://twitter.com/' },
                  { label: 'LinkedIn', icon: 'icon-brand-linkedin', placeholder: 'https://www.linkedin.com/' },
                  { label: 'Google+', icon: 'icon-brand-google', placeholder: 'https://www.google.com/' },
                  { label: 'Pinterest', icon: 'icon-brand-pinterest', placeholder: 'https://www.pinterest.com/' },
                  { label: 'Instagram', icon: 'icon-feather-instagram', placeholder: 'https://www.instagram.com/' },
                ].map((social, index) => (
                  <div className="col-xl-6" key={index}>
                    <label><i className={social.icon}></i> {social.label}</label>
                    <input type="text" className="utf-with-border" placeholder={social.placeholder} />
                  </div>
                ))}
              </div>
              )}
             
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="utf-centered-button">
          <button className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0">
            Submit Jobs <i className="icon-feather-plus" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default PersonalDetails;
