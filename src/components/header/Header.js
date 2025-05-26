import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.png';
import logo from '../../assets/images/logo.png';
import user_small_1 from '../../assets/images/user_small_1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/AuthSlice';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Fragment>
      <header id="utf-header-container-block" className="fullwidth dashboard-header not-sticky">
        <div id="header">
          <div className="container">
            <div className="utf-left-side">
              <div id="logo">
                <Link to="/">
                  <img src={logo} alt="logo" data-sticky-logo={logo} data-transparent-logo={logo2} />
                </Link>
              </div>

              <nav id="navigation">
                <ul id="responsive">
                  <li><Link to="/" className="current">Home</Link></li>

                  <li>
                    <Link to="/">Find Jobs</Link>
                    <ul className="dropdown-nav">
                      <li>
                        <Link to="/jobs-list-layout-leftside">Browse Jobs</Link>
                        <ul className="dropdown-nav">
                          <li><Link to="/jobs-list-layout-leftside">Jobs List Left Sidebar</Link></li>
                          <li><Link to="/jobs-list-layout-rightside">Jobs List Right Sidebar</Link></li>
                          <li><Link to="/jobs-listing-with-map">Jobs List With Map</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/browse-companies">Browse Companies</Link></li>
                      <li><Link to="/job-detail">Jobs Detail Page</Link></li>
                      <li><Link to="/company-profile">Company Profile Detail</Link></li>
                      <li>
                        <Link to="/freelancer-tasks">Freelancer Tasks</Link>
                        <ul className="dropdown-nav">
                          <li><Link to="/freelancers-bidding-tasks">Freelancer Bidding Task</Link></li>
                          <li><Link to="/freelancers-user-list">Freelancer User List</Link></li>
                          <li><Link to="/freelancer-task-detail">Freelancer Task Detail</Link></li>
                          <li><Link to="/freelancer-profile">Freelancer Profile Detail</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/">User Panel</Link>
                    <ul className="dropdown-nav">
                      <li><Link to="/dashboard">Dashboard</Link></li>
                      <li><Link to="/dashboard-jobs-post">Manage Jobs Post</Link></li>
                      <li><Link to="/dashboard-manage-jobs">Manage Jobs</Link></li>
                      <li><Link to="/dashboard-manage-resume">Manage Resume</Link></li>
                      <li><Link to="/dashboard-bookmarks">Bookmarks Jobs</Link></li>
                      <li>
                        <Link to="/dashboard-manage-tasks">Freelancer Tasks</Link>
                        <ul className="dropdown-nav">
                          <li><Link to="/dashboard-freelancer-tasks">Freelancer Manage Tasks</Link></li>
                          <li><Link to="/dashboard-manage-bidders">Freelancer Manage Bidders</Link></li>
                          <li><Link to="/dashboard-active-bids">Freelancer Active Bids</Link></li>
                          <li><Link to="/dashboard-post-bids">Freelancer Post Bids</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/dashboard-reviews">Reviews</Link></li>
                      <li><Link to="/dashboard-my-profile">My Profile</Link></li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/">Pages</Link>
                    <ul className="dropdown-nav">
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Sign Up</Link></li>
                      <li><Link to="/checkout">Order Checkout</Link></li>
                      <li><Link to="/order-confirmation">Order Confirmation</Link></li>
                      <li><Link to="/invoice">Invoice Template</Link></li>
                      <li><Link to="/user-elements">User Elements</Link></li>
                      <li><Link to="/icons">Icons Cheatsheet</Link></li>
                      <li><Link to="/faq">FAQ Page</Link></li>
                      <li><Link to="/404">404 Page</Link></li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/">Blog</Link>
                    <ul className="dropdown-nav">
                      <li><Link to="/blog-right-sidebar">Blog List Right Sidebar</Link></li>
                      <li><Link to="/blog-left-sidebar">Blog List Left Sidebar</Link></li>
                      <li><Link to="/blog-post-right">Blog Detail Right Sidebar</Link></li>
                      <li><Link to="/blog-post-left">Blog Detail Left Sidebar</Link></li>
                    </ul>
                  </li>

                  <li><Link to="/contact-us">Contact</Link></li>
                </ul>
              </nav>
              <div className="clearfix" />
            </div>
            <div className="utf-right-side">
            { !isLoggedIn ? (
              <div className="utf-header-widget-item">
                <Link to="/login" className="popup-with-zoom-anim log-in-button">
                  <i className="icon-feather-log-in" /> <span>Sign In</span>
                </Link>
              </div>
               ) : (
              <div className="utf-header-widget-item">
                <div className={`utf-header-notifications user-menu ${menuOpen ? 'active' : ''}`}>          
                  <div className="utf-header-notifications-trigger user-profile-title">
                    <Link onMouseUpCapture={toggleMenu}>
                      <div className="user-avatar status-online">
                        <img src={user_small_1} alt="User" />
                      </div>
                      <div className="user-name">Hi, {user?.name}! dasda</div>
                    </Link>
                  </div>

                  <div className="utf-header-notifications-dropdown-block">
                    <ul className="utf-user-menu-dropdown-nav">
                      <li><Link to="/users/dashboard"><i className="icon-material-outline-dashboard" /> Dashboard</Link></li>
                      <li><Link to="/users/jobs-post"><i className="icon-line-awesome-user-secret" /> Manage Jobs Post</Link></li>
                      <li><Link to="/users/manage-jobs"><i className="icon-material-outline-group" /> Manage Jobs</Link></li>
                      <li><Link to="/users/bookmarks"><i className="icon-material-outline-star-border" /> Bookmarks Jobs</Link></li>
                      <li><Link to="/users/my-profile"><i className="icon-feather-user" /> My Profile</Link></li>
                      <li><Link onClick={handleLogout}><i className="icon-material-outline-power-settings-new" /> Logout</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              )}
              <span className="mmenu-trigger">
                <button className="hamburger utf-hamburger-collapse-item" type="button">
                  <span className="utf-hamburger-box-item">
                    <span className="utf-hamburger-inner-item" />
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="clearfix" />
    </Fragment>
  );
};

export default Header;
