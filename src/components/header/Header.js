import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.png';
import logo from '../../assets/images/logo.png';
import user_small_1 from '../../assets/images/user_small_1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/AuthSlice';


const menuItems = [
  {
    label: 'Home',
    path: '/',
    allowed: ['admin', 'employer', 'jobseeker'],
  },
  {
    label: 'Jobs',
    allowed: ['jobseeker', 'employer', 'admin'],
    children: [
      {
        label: 'Browse Jobs',
        path: '/jobs-list-layout-leftside',
        children: [
          { label: 'Jobs List Left Sidebar', path: '/jobs-list-layout-leftside' },
          { label: 'Jobs List Right Sidebar', path: '/jobs-list-layout-rightside' },
          { label: 'Jobs List With Map', path: '/jobs-listing-with-map' },
        ],
      },
      { label: 'Browse Companies', path: '/browse-companies' },
      { label: 'Jobs Detail Page', path: '/job-detail' },
      { label: 'Company Profile Detail', path: '/company-profile' },
      {
        label: 'Freelancer Tasks',
        children: [
          { label: 'Freelancer Bidding Task', path: '/freelancers-bidding-tasks' },
          { label: 'Freelancer User List', path: '/freelancers-user-list' },
          { label: 'Freelancer Task Detail', path: '/freelancer-task-detail' },
          { label: 'Freelancer Profile Detail', path: '/freelancer-profile' },
        ],
      },
    ],
  },
  {
    label: 'Companies',
    allowed: ['employer'],
    children: [
      { label: 'Dashboard', path: '/dashboard' },
      { label: 'Manage Jobs Post', path: '/dashboard-jobs-post' },
      { label: 'Manage Jobs', path: '/dashboard-manage-jobs' },
      { label: 'Manage Resume', path: '/dashboard-manage-resume' },
      { label: 'Bookmarks Jobs', path: '/dashboard-bookmarks' },
      {
        label: 'Freelancer Tasks',
        children: [
          { label: 'Freelancer Manage Tasks', path: '/dashboard-freelancer-tasks' },
          { label: 'Freelancer Manage Bidders', path: '/dashboard-manage-bidders' },
          { label: 'Freelancer Active Bids', path: '/dashboard-active-bids' },
          { label: 'Freelancer Post Bids', path: '/dashboard-post-bids' },
        ],
      },
      { label: 'Reviews', path: '/dashboard-reviews' },
      { label: 'My Profile', path: '/dashboard-my-profile' },
    ],
  },
  {
    label: 'Boost Your Profile',
    allowed: ['admin', 'employer', 'jobseeker'],
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Login', path: '/login' },
      { label: 'Sign Up', path: '/register' },
      { label: 'Order Checkout', path: '/checkout' },
      { label: 'Order Confirmation', path: '/order-confirmation' },
      { label: 'Invoice Template', path: '/invoice' },
      { label: 'User Elements', path: '/user-elements' },
      { label: 'Icons Cheatsheet', path: '/icons' },
      { label: 'FAQ Page', path: '/faq' },
      { label: '404 Page', path: '/404' },
    ],
  },
  {
    label: "Degree's",
    allowed: ['admin', 'jobseeker'],
    children: [
      { label: 'Blog List Right Sidebar', path: '/blog-right-sidebar' },
      { label: 'Blog List Left Sidebar', path: '/blog-left-sidebar' },
      { label: 'Blog Detail Right Sidebar', path: '/blog-post-right' },
      { label: 'Blog Detail Left Sidebar', path: '/blog-post-left' },
    ],
  },
  {
    label: 'Contact us',
    path: '/contact-us',
    allowed: ['admin', 'employer', 'jobseeker'],
  },
];

const renderMenu = (items) => {
  return (
    <ul className="dropdown-nav">
      {items.map((item) => {       
        return (
          <li key={item.label}>
            {item.path ? <Link to={item.path}>{item.label}</Link> : <span>{item.label}</span>}
            {item.children && renderMenu(item.children)}
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const userType = user?.user_type || 'guest';
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
                  {
                    menuItems.map((item)=>{
                     return (
                         <li key={item.label}>
                             {item.path ? <Link to={item.path}>{item.label}</Link> : <Link>{item.label}</Link>}
                             {item.children && renderMenu(item.children)}
                          </li>
                     )                      
                    })
                  }
                </ul>
              </nav>
            </div>

            <div className="utf-right-side">
              {!isLoggedIn ? (
                <div className="utf-header-widget-item">
                  <Link to="/login" className="popup-with-zoom-anim log-in-button">
                    <i className="icon-feather-log-in" /> <span>Sign In</span>
                  </Link>
                </div>
              ) : (
                <div className="utf-header-widget-item">
                  <div className={`utf-header-notifications user-menu ${menuOpen ? 'active' : ''}`}>
                    <div className="utf-header-notifications-trigger user-profile-title">
                      <Link onClick={toggleMenu}>
                        <div className="user-avatar status-online">
                          <img src={user_small_1} alt="User" />
                        </div>
                        <div className="user-name">Hi, {user?.name}!</div>
                      </Link>
                    </div>

                    <div className="utf-header-notifications-dropdown-block">
                      <ul className="utf-user-menu-dropdown-nav">                        
                        <li><Link to={`/${userType}/dashboard`}><i className="icon-material-outline-dashboard" /> Dashboard</Link></li>
                        <li><Link to={`/${userType}/profile`}><i className="icon-feather-user" /> My Profile</Link></li>
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
