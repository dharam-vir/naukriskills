import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.png';
import logo from '../../assets/images/logo.png';
import user_small_1 from '../../assets/images/user_small_1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/AuthSlice';
// import axios from 'axios';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [menuItems, setMenuItems] = useState([]);
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const userType = user?.user_type || 'guest';

  const menuItems = [
  {
    label: 'Home',
    path: '/',
    allowed: ['admin', 'employer', 'jobseeker'],
  },
  {
    label: 'Jobs',
    allowed: ['jobseeker', 'employer', 'admin'],
    path: '/jobs/Jobs',
    children: [
      { label: 'Recent', path: '/jobs/recent' },
      { label: 'Featured', path: '/jobs/featured' },
      { label: 'Remote', path: "/jobs/remote" },
      { label: 'Full-Time', path: '/jobs/full-time' },
      { label: 'Part-Time', path: '/jobs/part-time' },
      { label: 'Internships', path: '/jobs/internships' }
    ],
  },
  {
    label: 'Categories',
    path: '/jobs/categories',
    children: [
      { label: 'Information Technology', path: '/jobs/categories/it' },
      { label: 'Marketing', path: '/jobs/categories/marketing' },
      { label: 'Design & Creative', path: '/jobs/categories/design' },
      { label: 'Finance', path: '/jobs/categories/finance' },
      { label: 'Human Resources', path: '/jobs/categories/hr' },
      { label: 'Sales', path: '/jobs/categories/sales' },
      { label: 'Education', path: '/jobs/categories/education' },
      { label: 'Healthcare', path: '/jobs/categories/healthcare' },
      { label: 'Engineering', path: '/jobs/categories/engineering' },
      { label: 'Legal', path: '/jobs/categories/legal' }
    ],
  },
  {
    label: 'Companies',
    allowed: ['employer'],
    path: '/jobs/employer',
    children: [
      { label: "Featured Companies", path: "/featured" },
      { label: "Hiring Now", path: "/hiring-now" },
      { label: "Top Rated", path: "/top-rated" },
      { label: "Startups", path: "/startups" },
      { label: "Enterprises", path: "/enterprise" },
      { label: "Browse by Location", path: "/by-location" },
      { label: "Browse by Industry", path: "/industries" }
    ],
  },
  {
    label: 'Boost Your Profile',
    allowed: ['admin', 'employer', 'jobseeker'],
    path: '/boost-your-profile'
  },
  {
    label: "Degree's",
    allowed: ['admin', 'jobseeker'],
    path: '/degrees'
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

  // const FetchMenu = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/menu/${userType}`);
  //     setMenuItems(response.data); // Assuming the response is the menu items
  //   } catch (error) {
  //     console.error('Error fetching menu:', error);
  //   }
  // };

  // useEffect(() => {
  //   FetchMenu();
  // }, []);

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
                  {menuItems.map((item) => {
                    return (
                      <li key={item.label}>
                        {item.path ? <Link to={item.path}>{item.label}</Link> : <span>{item.label}</span>}
                        {item.children && renderMenu(item.children)}
                      </li>
                    );
                  })}
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
                        <li>
                          <Link to={`/${userType}/dashboard`}>
                            <i className="icon-material-outline-dashboard" /> Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link to={`/${userType}/profile`}>
                            <i className="icon-feather-user" /> My Profile
                          </Link>
                        </li>
                        <li>
                          <Link onClick={handleLogout}>
                            <i className="icon-material-outline-power-settings-new" /> Logout
                          </Link>
                        </li>
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
