import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import footer_logo from '../../assets/images/footer_logo.png';

const footerLinks = [
  {
    title: 'Job Categories',
    links: [
      { name: 'Developement', path: '/jobs/development' },
      { name: 'Designing', path: '/jobs/design' },
      { name: 'Marketing', path: '/jobs/marketing' },
      { name: 'Data Analytics', path: '/jobs/data-analytics' },
      { name: 'Post New Job', path: '/post-job' },
    ],
  },
  {
    title: 'Job Type',
    links: [
      { name: 'Work from Home', path: '/jobs/remote' },
      { name: 'Internship Job', path: '/jobs/internship' },
      { name: 'Freelancer Job', path: '/jobs/freelance' },
      { name: 'Part Time Job', path: '/jobs/part-time' },
      { name: 'Full Time Job', path: '/jobs/full-time' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'My Account', path: '/my-account' },
      { name: 'Support', path: '/support' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Underwriting', path: '/underwriting' },
      { name: 'Employers', path: '/employers' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { name: 'User FAQ', path: '/faq-user' },
      { name: 'About Us', path: '/about-us' },
      { name: 'Contact Us', path: '/contact-us' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Term & Condition', path: '/terms-condition' },
    ],
  },
];

const Footer = () => {
  // const [footerData, setFooterData] = useState({
  //   logo: '',
  //   description: '',
  // });

  // useEffect(() => {
  //   const fetchFooterData = async () => {
  //     try {
  //       const res = await axios.get('/api/footer-content');
  //       setFooterData(res.data);
  //     } catch (err) {
  //       console.error('Failed to fetch footer data:', err);
  //     }
  //   };    
  //   fetchFooterData();
  // }, []);

  return (
    <Fragment>
      <div className="clearfix" />
      <div id="footer">
        <div className="utf-footer-section-item-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-12">
                <div className="utf-footer-item-links">
                  <Link to="/">
                    <img
                      className="footer-logo"
                      src={footer_logo}
                      alt="footer_logo"
                    />
                  </Link>
                  <p>{'Loading footer description...'}</p>
                </div>
              </div>

              {footerLinks.map((section, index) => (
                <div key={index} className="col-xl-2 col-md-3 col-sm-6">
                  <div className="utf-footer-item-links">
                    <h3>{section.title}</h3>
                    <ul>
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link to={link.path}>
                            <i className="icon-feather-chevron-right" /> <span>{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="utf-footer-copyright-item">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                Copyright © 2014 - {new Date().getFullYear()} All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
