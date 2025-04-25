import React from 'react';
import company_logo_1 from '../../assets/images/company_logo_1.png';
import company_logo_2 from '../../assets/images/company_logo_2.png';
import company_logo_3 from '../../assets/images/company_logo_3.png';
import company_logo_4 from '../../assets/images/company_logo_4.png';
import company_logo_5 from '../../assets/images/company_logo_5.png';
import company_logo_6 from '../../assets/images/company_logo_6.png';

const jobListings = [
    {
        logo: company_logo_1,
        type: "Full Time",
        typeColor: "green",
        title: "Web Designer, Graphic Designer, UI/UX Designer & Art",
        role: "Graphic Designer",
        salary: "$35000-$38000",
        location: "Drive Potsdam, NY 676",
        time: "15 Minute Ago",
    },
    {
        logo: company_logo_2,
        type: "Full Time",
        typeColor: "green",
        title: "PHP Developer, Team of PHP & IT Co",
        role: "UI/UX Designer",
        salary: "$35000-$38000",
        location: "Drive Potsdam, NY 676",
        time: "25 Minute Ago",
    },
    {
        logo: company_logo_3,
        type: "Part Time",
        typeColor: "yellow",
        title: "Website Developer & Software Developer",
        role: "Software Developer",
        salary: "$35000-$38000",
        location: "Drive Potsdam, NY 676",
        time: "38 Minute Ago",
    },
    {
        logo: company_logo_4,
        type: "Full Time",
        typeColor: "green",
        title: "Application Developer & Web Designer",
        role: "Web Developer",
        salary: "$35000-$38000",
        location: "Drive Potsdam, NY 676",
        time: "55 Minute Ago",
    },
    {
        logo: company_logo_5,
        type: "Full Time",
        typeColor: "green",
        title: "IT Department Manager & Blogger-Entrepreneur",
        role: "Android Developer",
        salary: "$35000-$38000",
        location: "Drive Potsdam, NY 676",
        time: "1 Days Ago",
    },
    {
        logo: company_logo_6,
        type: "Full Time",
        typeColor: "green",
        title: "Frontend/Backend Developer",
        role: "IOS Developer",
        salary: "$35000-$38000",
        location: "Drive Potsdam, NY 676",
        time: "1 Days Ago",
    },
];

const LatestJobs = () => {
    return (
        <section className="section gray padding-top-65 padding-bottom-75">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                            <span>Latest Jobs Post</span>
                            <h3>Latest Job Openings</h3>
                            <div className="utf-headline-display-inner-item">Latest Jobs Post</div>
                            <p className="utf-slogan-text">
                                Lorem Ipsum is simply dummy text printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since an unknown printer took a galley.
                            </p>
                        </div>

                        <div className="utf-listings-container-part compact-list-layout margin-top-35">
                            {jobListings.map((job, index) => (
                                <a href="single-job-page.html" className="utf-job-listing utf-apply-button-item" key={index}>
                                    <div className="utf-job-listing-details">
                                        <div className="utf-job-listing-company-logo">
                                            <img src={job.logo} alt={`company_logo_${index + 1}`} />
                                        </div>
                                        <div className="utf-job-listing-description">
                                            <span className={`dashboard-status-button utf-job-status-item ${job.typeColor}`}>
                                                <i className="icon-material-outline-business-center" /> {job.type}
                                            </span>
                                            <h3 className="utf-job-listing-title">{job.title}</h3>
                                            <div className="utf-job-listing-footer">
                                                <ul>
                                                    <li><i className="icon-feather-briefcase" /> {job.role}</li>
                                                    <li><i className="icon-material-outline-account-balance-wallet" /> {job.salary}</li>
                                                    <li><i className="icon-material-outline-location-on" /> {job.location}</li>
                                                    <li><i className="icon-material-outline-access-time" /> {job.time}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <span className="list-apply-button ripple-effect">
                                            Browse Job <i className="icon-line-awesome-bullhorn" />
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="utf-centered-button margin-top-10">
                            <a href="jobs-list-layout-leftside.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-20">
                                Browse All Jobs <i className="icon-feather-chevron-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestJobs;
