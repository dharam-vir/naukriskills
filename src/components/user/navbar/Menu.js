import React, { Fragment, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useravatar from "../../../assets/images/user-avatar-placeholder.png";

const Menu = () => {
  const location = useLocation();
  const {menuItems} = useSelector((state) => state.sidebarMenu);
  const userType = useSelector((state) => state.auth.user?.user_type);
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    if (
      location.pathname.includes('freelancer-manage-tasks-list') ||
      location.pathname.includes('manage-bidders-list') ||
      location.pathname.includes('freelancer-active-bids') ||
      location.pathname.includes('freelancer-add-post-bids')
    ) {
      setActiveMenu(true);
    }
  }, [location.pathname]);

  const toggleSubMenu = (e) => {
    e.preventDefault();
    setActiveMenu(!activeMenu);
  };

  const renderMenuItem = (item) => {
    if (item.allowed && !item.allowed.includes(userType)) return null;

    const resolvedPath = `/${userType}${item.path || ''}`;
    const isActive = location.pathname === resolvedPath;

    if (item.children) {
      const isFreelancerMenu = item.label === 'Freelancer Tasks';
      return (
        <li key={item.label} className={isFreelancerMenu && activeMenu ? 'active-submenu' : ''}>
          <Link to="#" onClick={toggleSubMenu}>
            <i className={item.icon} /> {item.label}
          </Link>
          {isFreelancerMenu && activeMenu && (
            <ul className="dropdown-nav">
              {item.children.map((child) => {
                const childPath = `${userType}/${child.path}`;
                return (
                  <li key={child.label} className={location.pathname === childPath ? 'active' : ''}>
                    <Link to={childPath}><i className="icon-feather-chevron-right" /> {child.label}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={item.label} className={isActive ? 'active' : ''}>
        <Link to={resolvedPath}><i className={item.icon} /> {item.label}</Link>
      </li>
    );
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
                    <img alt="User Avatar" src={useravatar} className="photo" />
                  </span>
                  <div className="user-profile-text">
                    <span className="fullname">John Williams</span>
                    <span className="user-role">Software Engineer</span>
                  </div>
                </div>

                <div className="clearfix" />
                <ul>{menuItems.map(renderMenuItem)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
