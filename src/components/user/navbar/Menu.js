import React, { Fragment, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useravatar from "../../../assets/images/user-avatar-placeholder.png";

const Menu = () => {
  const location = useLocation();
  const { menuItems } = useSelector((state) => state.sidebarMenu);
  const user = useSelector((state) => state.auth.user);

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
    setActiveMenu((prev) => !prev);
  };

  const renderMenuItem = (item) => {
    if (item.allowed && !item.allowed.includes(user.user_type)) return null;

    const resolvedPath = `/${user.user_type}${item.path || ''}`;
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
                const childPath = `/${user.user_type}/${child.path}`;
                const isChildActive = location.pathname === childPath;
                return (
                  <li key={`${item.label}-${child.label}`} className={isChildActive ? 'active' : ''}>
                    <Link to={childPath}>
                      <i className="icon-feather-chevron-right" /> {child.label}
                    </Link>
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
        <Link to={resolvedPath}>
          <i className={item.icon} /> {item.label}
        </Link>
      </li>
    );
  };

  if (!user || !user.user_type) return null;

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
              <span className="trigger-title">Menu</span>
            </Link>

            <div className="utf-dashboard-nav">
              <div className="utf-dashboard-nav-inner">
                <div className="dashboard-profile-box">
                  <span className="avatar-img">
                    <img alt="User Avatar" src={useravatar} className="photo" />
                  </span>
                  <div className="user-profile-text">
                    <span className="fullname">{user.name} {user.lname}</span>
                    <span className="user-role">{user.user_type?.toUpperCase()} PANEL</span>
                  </div>
                </div>

                <div className="clearfix" />
                <ul>
                  {menuItems && menuItems.map(renderMenuItem)}
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
