import React, { Fragment, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useravatar from "../../../assets/images/user-avatar-placeholder.png";

const Menu = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);

  // Auto-expand submenu if current route is under freelancer section
  useEffect(() => {
    const freelancerPaths = [
      "/users/freelancer-manage-tasks-list",
      "/users/manage-bidders-list",
      "/users/freelancer-active-bids",
      "/users/freelancer-add-post-bids"
    ];
    if (freelancerPaths.includes(location.pathname)) {
      setActiveMenu(true);
    }
  }, [location.pathname]);

  const toggleSubMenu = (e) => {
    e.preventDefault(); // prevent navigation
    setActiveMenu(!activeMenu);
  };

  return (
    <Fragment>
      <div className="utf-dashboard-sidebar-item">
        <div className="utf-dashboard-sidebar-item-inner" data-simplebar>
          <div className="utf-dashboard-nav-container">
            <Link to="#" className="utf-dashboard-responsive-trigger-item">
              <span className="hamburger utf-hamburger-collapse-item">
                <span className="utf-hamburger-box-item">
                  <span className="utf-hamburger-inner-item" />
                </span>
              </span>
              <span className="trigger-title">Dashboard Navigation Menu</span>
            </Link>

            <div className="utf-dashboard-nav">
              <div className="utf-dashboard-nav-inner">
                <div className="dashboard-profile-box">
                  <span className="avatar-img">
                    <img alt="photo" src={useravatar} className="photo" />
                  </span>
                  <div className="user-profile-text">
                    <span className="fullname">John Williams</span>
                    <span className="user-role">Software Engineer</span>
                  </div>
                </div>
                <div className="clearfix" />

                <ul>
                  <li className={location.pathname === "/users/dashboard" ? "active" : ""}>
                    <Link to="/users/dashboard"><i className="icon-material-outline-dashboard" /> Dashboard</Link>
                  </li>
                  <li className={location.pathname === "/users/jobs-post" ? "active" : ""}>
                    <Link to="/users/jobs-post"><i className="icon-line-awesome-user-secret" /> Manage Jobs Post</Link>
                  </li>
                  <li className={location.pathname === "/users/manage-jobs" ? "active" : ""}>
                    <Link to="/users/manage-jobs"><i className="icon-material-outline-group" /> Manage Jobs <span className="nav-tag">5</span></Link>
                  </li>
                  <li className={location.pathname === "/users/manage-resume" ? "active" : ""}>
                    <Link to="/users/manage-resume"><i className="icon-material-outline-supervisor-account" /> Manage Resume</Link>
                  </li>
                  <li className={location.pathname === "/users/bookmarks" ? "active" : ""}>
                    <Link to="/users/bookmarks"><i className="icon-feather-heart" /> Bookmarks Jobs</Link>
                  </li>

                  {/* Freelancer Submenu */}
                  <li className={activeMenu ? "active-submenu" : ""}>
                    <Link to="#" onClick={toggleSubMenu}>
                      <i className="icon-line-awesome-file-text" /> Freelancer Tasks
                    </Link>
                    {activeMenu && (
                      <ul className="dropdown-nav">
                        <li className={location.pathname === "/users/freelancer-manage-tasks-list" ? "active" : ""}>
                          <Link to="/users/freelancer-manage-tasks-list"><i className="icon-feather-chevron-right" /> Freelancer Manage Tasks</Link>
                        </li>
                        <li className={location.pathname === "/users/manage-bidders-list" ? "active" : ""}>
                          <Link to="/users/manage-bidders-list"><i className="icon-feather-chevron-right" /> Freelancer Manage Bidders</Link>
                        </li>
                        <li className={location.pathname === "/users/freelancer-active-bids" ? "active" : ""}>
                          <Link to="/users/freelancer-active-bids"><i className="icon-feather-chevron-right" /> Freelancer Active Bids</Link>
                        </li>
                        <li className={location.pathname === "/users/freelancer-add-post-bids" ? "active" : ""}>
                          <Link to="/users/freelancer-add-post-bids"><i className="icon-feather-chevron-right" /> Freelancer Post Bids</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className={location.pathname === "/users/reviews" ? "active" : ""}>
                    <Link to="/users/reviews"><i className="icon-material-outline-rate-review" /> Reviews</Link>
                  </li>
                  <li className={location.pathname === "/users/my-profile" ? "active" : ""}>
                    <Link to="/users/my-profile"><i className="icon-feather-user" /> My Profile</Link>
                  </li>
                  <li className={location.pathname === "/users/dashboard" ? "active" : ""}>
                    <Link to="/users/dashboard"><i className="icon-material-outline-power-settings-new" /> Logout</Link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
