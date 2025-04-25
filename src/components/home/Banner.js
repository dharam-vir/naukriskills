import React, { Fragment } from 'react';
import background from '../../assets/images/home-video-background.jpg';
import video from '../../assets/images/home-video.mp4';
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/jobs-list-layout-leftside');
  };

  return (
    <Fragment>
      <div className="intro-banner dark-overlay big-padding">
        <div className="utf-transparent-header-block-spacer" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="utf-banner-headline-text-part">
                <h3>Find The Job That Fits Your Life</h3>
                <span>
                  Each month, more than 7 million jobseekers turn to our website in their search for work, every day.
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="utf-intro-banner-search-form-block margin-top-40">
                <div className="utf-intro-search-field-item">
                  <div className="utf-input-with-icon">
                    <i className="icon-material-outline-gps-fixed" />
                    <input type="text" placeholder="Select Location" />
                  </div>
                </div>
                <div className="utf-intro-search-field-item">
                  <i className="icon-feather-search" />
                  <input type="text" placeholder="Search Jobs Keywords..." />
                </div>
                <div className="utf-intro-search-field-item">
                  <select className="selectpicker default" data-live-search="true" title="All Categories">
                    <option>Customer Service</option>
                    <option>Data Analytics</option>
                    <option>Web Designing</option>
                    <option>Software Developing</option>
                    <option>Networking</option>
                    <option>Sales & Marketing</option>
                  </select>
                </div>
                <div className="utf-intro-search-button">
                  <button className="button ripple-effect" onClick={handleSearchClick}>
                    <i className="icon-material-outline-search" /> Search Jobs
                  </button>
                </div>
              </div>

              <p className="utf-trending-silver-item">
                <span className="utf-trending-black-item">Trending Jobs Keywords:</span>{' '}
                <Link to="/">Web Designer</Link>{' '}
                <Link to="/">Web Developer</Link>{' '}
                <Link to="/">Graphic Designer</Link>{' '}
                <Link to="/">PHP Developer</Link>{' '}
                <Link to="/">IOS Developer</Link>{' '}
                <Link to="/">Android Developer</Link>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ul className="intro-stats margin-top-45 hide-under-992px">
                <li>
                  <i className="icon-material-outline-business-center" />
                  <sub className="counter_item">
                    <strong className="counter">18,955</strong>
                    <span>Live Jobs Posted</span>
                  </sub>
                </li>
                <li>
                  <i className="icon-material-outline-assignment" />
                  <sub className="counter_item">
                    <strong className="counter">11,088</strong>
                    <span>Jobs Candidate</span>
                  </sub>
                </li>
                <li>
                  <i className="icon-material-outline-library-books" />
                  <sub className="counter_item">
                    <strong className="counter">10,758</strong>
                    <span>Companies Jobs</span>
                  </sub>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="utf-video-container-block"
          style={{ backgroundImage: `url(${background})` }}
        >
          <video loop autoPlay muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="clearfix" />
    </Fragment>
  );
};

export default Banner;
