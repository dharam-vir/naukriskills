import React from 'react';
import { Link } from 'react-router-dom';

const jobCategories = [
    {
        title: "Design, Art & Multimedia",
        jobs: "2,612 Jobs",
        openings: "10 Openings",
        icon: "icon-line-awesome-bullhorn",
        image: "job-category-01.jpg"
    },
    {
        title: "Education & Training",
        jobs: "4,218 Jobs",
        openings: "18 Openings",
        icon: "icon-line-awesome-graduation-cap",
        image: "job-category-02.jpg"
    },
    {
        title: "Accounting / Finance",
        jobs: "2,186 Jobs",
        openings: "25 Openings",
        icon: "icon-line-awesome-line-chart",
        image: "job-category-03.jpg"
    },
    {
        title: "Human Resource",
        jobs: "5,298 Jobs",
        openings: "23 Openings",
        icon: "icon-line-awesome-users",
        image: "job-category-04.jpg"
    },
    {
        title: "Telecommunications",
        jobs: "7,549 Jobs",
        openings: "29 Openings",
        icon: "icon-feather-phone-call",
        image: "job-category-05.jpg"
    },
    {
        title: "Restaurant / Food Service",
        jobs: "2,873 Jobs",
        openings: "36 Openings",
        icon: "icon-line-awesome-cutlery",
        image: "job-category-06.jpg"
    },
    {
        title: "Construction / Facilities",
        jobs: "3,125 Jobs",
        openings: "44 Openings",
        icon: "icon-line-awesome-building",
        image: "job-category-07.jpg"
    },
    {
        title: "Health",
        jobs: "2,445 Jobs",
        openings: "22 Openings",
        icon: "icon-line-awesome-user-md",
        image: "job-category-08.jpg"
    }
];

const Categories = () => {
    return (
        <div className="section margin-top-60 margin-bottom-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                            <span>Jobs Categories</span>
                            <h3>Choose Your Sector</h3>
                            <div className="utf-headline-display-inner-item">Jobs Categories</div>
                            <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
                        </div>
                    </div>

                    {jobCategories.map((category, index) => (
                        <div className="col-xl-3 col-md-6 col-lg-4" key={index}>
                            <Link
                                to="/jobs/list-layout-leftside"
                                className="photo-box photo-category-box small"
                                style={{
                                    backgroundImage: `url(/images/${category.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="utf-opening-position-counter-item">{category.openings}</div>
                                <div className="utf-opening-box-content-part">
                                    <div className="utf-category-box-icon-item">
                                        <i className={category.icon}></i>
                                    </div>
                                    <h3>{category.title}</h3>
                                    <span>{category.jobs}</span>
                                </div>
                            </Link>
                        </div>
                    ))}

                    <div className="col-xl-12 utf-centered-button margin-top-10">
                        <Link to="/jobs-categories" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0">
                            View All Categories <i className="icon-feather-chevron-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
