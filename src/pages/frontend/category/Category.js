import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <Fragment>
            <div class="section margin-top-65 padding-bottom-55">
                <div class="container">
                    <div class="row">
                        <div class="utf-categories-container-block">
                            <Link to="jobs-list-layout-leftside.html" class="utf-category-box">
                                <div class="utf-opening-position-counter-item">10 Openings</div>
                                <div class="utf-category-box-icon-item"> <i class="icon-line-awesome-bullhorn"></i> </div>
                                <div class="utf-category-box-content">
                                    <h3>Design, Art & Multimedia</h3>
                                </div>
                                <div class="utf-category-box-counter-item">8,188 Jobs</div>
                            </Link>
                            <Link to="jobs-list-layout-leftside.html" class="utf-category-box">
                                <div class="utf-opening-position-counter-item">15 Openings</div>
                                <div class="utf-category-box-icon-item"> <i class="icon-line-awesome-graduation-cap"></i> </div>
                                <div class="utf-category-box-content">
                                    <h3>Education & Training</h3>
                                </div>
                                <div class="utf-category-box-counter-item">5,244 Jobs</div>
                            </Link>
                            <Link to="jobs-list-layout-leftside.html" class="utf-category-box">
                                <div class="utf-opening-position-counter-item">12 Openings</div>
                                <div class="utf-category-box-icon-item"> <i class="icon-line-awesome-line-chart"></i> </div>
                                <div class="utf-category-box-content">
                                    <h3>Accounting / Finance</h3>
                                </div>
                                <div class="utf-category-box-counter-item">6,258 Jobs</div>
                            </Link>
                            <Link to="jobs-list-layout-leftside.html" class="utf-category-box">
                                <div class="utf-opening-position-counter-item">20 Openings</div>
                                <div class="utf-category-box-icon-item"> <i class="icon-line-awesome-users"></i> </div>
                                <div class="utf-category-box-content">
                                    <h3>Human Resource</h3>
                                </div>
                                <div class="utf-category-box-counter-item">1,224 Jobs</div>
                            </Link>
                            <Link to="jobs-list-layout-leftside.html" class="utf-category-box">
                                <div class="utf-opening-position-counter-item">25 Openings</div>
                                <div class="utf-category-box-icon-item"> <i class="icon-feather-phone-call"></i> </div>
                                <div class="utf-category-box-content">
                                    <h3>Telecommunications</h3>
                                </div>
                                <div class="utf-category-box-counter-item">3,258 Jobs</div>
                            </Link>
                            <Link to="jobs-list-layout-leftside.html" class="utf-category-box">
                                <div class="utf-opening-position-counter-item">18 Openings</div>
                                <div class="utf-category-box-icon-item"> <i class="icon-line-awesome-cutlery"></i> </div>
                                <div class="utf-category-box-content">
                                    <h3>Restaurant / Food Service</h3>
                                </div>
                                <div class="utf-category-box-counter-item">5,138 Jobs</div>
                            </Link>
                            <Link to="jobs-list-layout-leftside.html" class="utf-category-box">
                                <div class="utf-opening-position-counter-item">38 Openings</div>
                                <div class="utf-category-box-icon-item"> <i class="icon-line-awesome-building"></i> </div>
                                <div class="utf-category-box-content">
                                    <h3>Construction / Facilities</h3>
                                </div>
                                <div class="utf-category-box-counter-item">2,580 Jobs</div>
                            </Link>
                            <Link to="jobs-list-layout-leftside.html" class="utf-category-box">
                                <div class="utf-opening-position-counter-item">23 Openings</div>
                                <div class="utf-category-box-icon-item"> <i class="icon-line-awesome-user-md"></i> </div>
                                <div class="utf-category-box-content">
                                    <h3>Health</h3>
                                </div>
                                <div class="utf-category-box-counter-item">2,360 Jobs</div>
                            </Link>
                        </div>
                    </div>
                
                    <div class="clearfix"></div>
                    <div class="utf-pagination-container-aera margin-top-40 margin-bottom-0">
                        <nav class="pagination">
                            <ul>
                                <li class="utf-pagination-arrow"><Link to="#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-left"></i></Link></li>
                                <li><Link to="#" class="ripple-effect current-page">1</Link></li>
                                <li><Link to="#" class="ripple-effect">2</Link></li>
                                <li><Link to="#" class="ripple-effect">3</Link></li>
                                <li class="utf-pagination-arrow"><Link to="#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-right"></i></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Category