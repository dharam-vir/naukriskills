import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './../../../features/jobs/jobSlice';
import JobTypeFilter from '../../../components/jobs/JobTypeFilter';
import ExperienceFilter from '../../../components/jobs/ExperienceFilter';
import SkillsFilter from '../../../components/jobs/SkillsFilter';
import banner from '../../../assets/images/banner-add-2.jpg';
import JobSortHeader from '../../../components/jobs/JobSortHeader';

const Joblisting = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs);
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    gender: '',
    jobTypes: [],
    experience: [],
    skills: [],
  });

  useEffect(() => {
    dispatch(fetchJobs(filters));
  }, [filters, dispatch]);

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleJobTypeChange = (updatedTypes) => {
    setFilters({ ...filters, jobTypes: updatedTypes });
  };

  const handleExperienceChange = (updatedExperience) => {
    setFilters({ ...filters, experience: updatedExperience });
  };

  const handleSkillsChange = (updatedSkills) => {
    setFilters({ ...filters, skills: updatedSkills });
  };

  const handleSortChange = (value) => {
    console.log('Selected sort:', value);
    // You can integrate sorting logic here if required
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="utf-sidebar-container-aera">
              <div className="utf-sidebar-widget-item">
                <div className="utf-quote-box utf-jobs-listing-utf-quote-box">
                  <div className="utf-quote-info">
                    <h4>Make a Difference with Online Resume!</h4>
                    <p>Your Resume in Minutes with Jobs Resume Assistant is Ready!</p>
                    <Link to="/register" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0">
                      Create Account <i className="icon-feather-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="utf-sidebar-widget-item">
                <h3>Search Keywords</h3>
                <div className="utf-input-with-icon">
                  <input
                    type="text"
                    name="keyword"
                    value={filters.keyword}
                    onChange={handleInputChange}
                    placeholder="Search Keywords..."
                  />
                  <i className="icon-material-outline-search" />
                </div>
              </div>
              <div className="utf-sidebar-widget-item">
                <h3>Category</h3>
                <select name="category" onChange={handleInputChange} value={filters.category}>
                  <option value="">Select Category</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Software Developing">Software Developing</option>
                  <option value="IT & Networking">IT & Networking</option>
                  <option value="Translation">Translation</option>
                  <option value="Sales & Marketing">Sales & Marketing</option>
                </select>
              </div>
              <div className="utf-sidebar-widget-item">
                <h3>Gender</h3>
                <select name="gender" onChange={handleInputChange} value={filters.gender}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <JobTypeFilter selectedTypes={filters.jobTypes} onChange={handleJobTypeChange} />
              <div className="clearfix" />
              <ExperienceFilter selectedExperience={filters.experience} onChange={handleExperienceChange} />
              <div className="clearfix" />
              <SkillsFilter selectedSkills={filters.skills} onChange={handleSkillsChange} />
              <div className="utf-sidebar-widget-item">
                <div className="utf-detail-banner-add-section">
                  <Link to="#">
                    <img src={banner} alt="banner-add" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-8">
            <div className="utf-inner-search-section-title">
              <h4><i className="icon-material-outline-search" /> Search Jobs Listing Results</h4>
            </div>
            <JobSortHeader totalJobs={jobs?.length || 0} shownJobs={10} onSortChange={handleSortChange} />
            {loading ? (
              <p>Loading jobs...</p>
            ) : (
               <div className="utf-listings-container-part compact-list-layout margin-top-35">
               { 
               Array.isArray(jobs) && jobs.map((job, index)=>{
                  return(
                    <Link to={`/job/${job.slug || 'job-id'}`} key={index} className="utf-job-listing">
                    <div className="utf-job-listing-details">
                      <div className="utf-job-listing-company-logo">
                        <img src="images/company_logo_1.png" alt="Company Logo" />
                      </div>
                      <div className="utf-job-listing-description">
                        <span className="dashboard-status-button utf-job-status-item green">
                          <i className="icon-material-outline-business-center" /> {job.company || 'Unknown Company'}
                        </span>
                        <h6 className="utf-job-listing-title">
                          Company Name: <Link to={`/company/${job.companySlug || 'company-name'}`}>{job.company}</Link>
                        </h6>
                        <h3 className="utf-job-listing-title">
                          {job.title} <span className="utf-verified-badge" title="Verified Employer" data-tippy-placement="top" />
                        </h3>
                        <div className="utf-job-listing-footer">
                          <ul>
                            <li><i className="icon-feather-briefcase" /> {job.category}</li>
                            <li><i className="icon-material-outline-account-balance-wallet" /> ${job.salary}</li>
                            <li><i className="icon-material-outline-location-on" /> {job.location}</li>
                            <li><i className="icon-material-outline-access-time" /> {job.postedTime}</li>
                          </ul>
                        </div>
                      </div>
                      <span className="bookmark-icon" />
                    </div>
                  </Link>
                  )
                })
               }
              </div>   
            )}
            {/* Pagination */}
            <div className="clearfix" />
            <div className="row">
              <div className="col-md-12">
                <div className="utf-pagination-container-aera margin-top-30 margin-bottom-60">
                  <nav className="pagination">
                    <ul>
                      <li className="utf-pagination-arrow">
                        <Link to="#">
                          <i className="icon-material-outline-keyboard-arrow-left" />
                        </Link>
                      </li>
                      <li><Link to="#" className="current-page">1</Link></li>
                      <li><Link to="#">2</Link></li>
                      <li><Link to="#">3</Link></li>
                      <li className="utf-pagination-arrow">
                        <Link to="#">
                          <i className="icon-material-outline-keyboard-arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Joblisting;
