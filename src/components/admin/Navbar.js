import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLTELogo from '../../assets/dist/img/AdminLTELogo.png';
import user2 from '../../assets/dist/img/user2-160x160.jpg';

const userType = 'employer';

const navItems = [
    {
        title: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        link: '/dashboard',
        badge: 'New'
       
    },  
    {
        title: 'Events',
        icon: 'fas fa-chart-pie', 
        subItems: [
            { title: 'Reported Incidents', link: '/events/reported-incidents' },
            { title: 'Assigned Incidents', link: '/events/assigned-incidents' },           
        ]
    }, 
    {
        title: 'Compliance',
        icon: 'fas fa-tachometer-alt',
        link: '/compliance'       
    },  
    {
        title: 'ATR(Advisory)',
        icon: 'fas fa-tachometer-alt',
        link: '/advisory'      
    },  
    {
        title: 'Users',
        icon: 'fas fa-chart-pie',
        subItems: [
            { title: 'De Users', link: '/users/de-active' },
            { title: 'Active Users', link: '/users/active' },           
        ]
    },
    {
        title: 'Reports',
        icon: 'fas fa-chart-pie',
        subItems: [
            { title: 'Field Engineer', link: '/report/engineer-report' },
            { title: 'Division Report', link: '/report/division-report' },
            { title: 'Raw Events', link: '/report/devices-distribution-report' },
            { title: 'Security Report', link: '/report/security-report' }
        ]
    }, 
    {
        title: 'Raws Events',
        icon: 'fas fa-tachometer-alt',
        link: '/raws-events',       
    }, 
    {
        section: 'MISCELLANEOUS',
     
    },
    {
        title: 'Document',
        icon: 'fas fa-tachometer-alt',
        link: '/document',       
    }  
  
];


const Navbar = () => {
    // const{ customData } = useContext(ClientContext);
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleMenuClick = (title) => {
        if (activeMenu === title) {
            setActiveMenu(null); // Close the menu if it's already active
        } else {
            setActiveMenu(title);
        }
    };

    const handleSubMenuClick = (subTitle) => {
        if (activeSubMenu === subTitle) {
            setActiveSubMenu(null); // Close the submenu if it's already active
        } else {
            setActiveSubMenu(subTitle);
        }
    };

    return (
        <Fragment>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to="/" className="brand-link">
                    <img src={AdminLTELogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Pratimaan</span>
                </Link>

                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={user2} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <Link to="/profile" className="d-block">Dharam Vir</Link>
                        </div>
                    </div>

                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {navItems.map((item, index) =>
                                item.section ? (
                                    <li className="nav-header" key={index}>
                                        {item.section}
                                    </li>
                                ) : (
                                    <li
                                        className={`nav-item ${activeMenu === item.title ? 'menu-open' : ''}`}
                                        key={index}
                                    >
                                        {item.subItems ? (
                                            <>
                                                <a
                                                    href="#"
                                                    className={`nav-link ${activeMenu === item.title ? 'active' : ''}`}
                                                    onClick={() => handleMenuClick(item.title)}
                                                >
                                                    <i className={`nav-icon ${item.icon}`}></i>
                                                    <p>
                                                        {item.title}
                                                        <i className="right fas fa-angle-left"></i>
                                                    </p>
                                                </a>
                                                <ul className={`nav nav-treeview ${activeMenu === item.title ? 'active' : ''}`}>
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <li
                                                            className={`nav-item ${activeSubMenu === subItem.title ? 'menu-open' : ''}`}
                                                            key={subIndex}
                                                        >

                                                            <a
                                                                href={subItem.link}
                                                                className={`nav-link ${activeSubMenu === subItem.title ? 'active' : ''}`}
                                                                onClick={() => handleSubMenuClick(subItem.title)}
                                                            >
                                                                <i className="far fa-circle nav-icon"></i>
                                                                <p>{subItem.title}</p>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <a
                                                href={item.link}
                                                className={`nav-link ${activeMenu === item.title ? 'active' : ''}`}
                                                onClick={() => handleMenuClick(item.title)}
                                            >
                                                <i className={`nav-icon ${item.icon}`}></i>
                                                <p>
                                                    {item.title}
                                                    {item.badge && <span className="right badge badge-danger">{item.badge}</span>}
                                                </p>
                                            </a>
                                        )}
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                </div>
            </aside>
        </Fragment>
    );
};

export default Navbar;
