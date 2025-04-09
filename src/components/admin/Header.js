import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ClientContext } from '../../services/context/ClientContext';

const Header = () => {
  const { customData, setCustomData } = useContext(ClientContext);
   const Opentab = () =>{
    setCustomData(customData === 'main-sidebar' ? 'main-sidebar' : '');
   }
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item" onClick={Opentab}>
          <Link className="nav-link" data-widget="pushmenu" to="#" role="button">
            <i className="fas fa-bars"></i>
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/dashboard" className="nav-link">Home</Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/contact-us" className="nav-link">Contact</Link>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Navbar Search */}
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown" to="#" role="button">
            <i className="far fa-bell"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-envelope mr-2"></i> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-users mr-2"></i> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-file mr-2"></i> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
          </div>
        </li>


        {/* Control Sidebar Button */}
        <li className="nav-item">
          <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to="#" role="button">
            <i className="fas fa-th-large"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
