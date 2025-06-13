import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import thumb from '../../assets/images/thumb-1.jpg';
import af from "../../assets/images/flags/af.svg";
import us from "../../assets/images/flags/us.svg";
import au from "../../assets/images/flags/au.svg";
import br from "../../assets/images/flags/br.svg";
import Donutchart from '../../components/chart/Donutchart';
import Piechart from '../../components/chart/Piechart';
import LineChart from '../../components/chart/LineChart';

const Dashboard = () => {

  return (
    <Fragment>
      <div className="notification success closeable">
        <p>You are Currently Signed in as <strong>John Williams</strong> Has Been Approved!</p>
        <Link className="close" to="#" />
      </div>
      <div className="utf-funfacts-container-aera">
        <div className="fun-fact" data-fun-fact-color="#2a41e8">
          <div className="fun-fact-icon"><i className="icon-feather-home" /></div>
          <div className="fun-fact-text">
            <h4>1502</h4>
            <span>Companies View</span>
          </div>
        </div>
        <div className="fun-fact" data-fun-fact-color="#36bd78">
          <div className="fun-fact-icon"><i className="icon-feather-briefcase" /></div>
          <div className="fun-fact-text">
            <h4>152</h4>
            <span>Applied Jobs</span>
          </div>
        </div>
        <div className="fun-fact" data-fun-fact-color="#efa80f">
          <div className="fun-fact-icon"><i className="icon-feather-heart" /></div>
          <div className="fun-fact-text">
            <h4>549</h4>
            <span>Favourite Jobs</span>
          </div>
        </div>
        <div className="fun-fact" data-fun-fact-color="#0fc5bf">
          <div className="fun-fact-icon"><i className="icon-brand-telegram-plane" /></div>
          <div className="fun-fact-text">
            <h4>120</h4>
            <span>Subscribe Plan</span>
          </div>
        </div>
        <div className="fun-fact" data-fun-fact-color="#f02727">
          <div className="fun-fact-icon"><i className="icon-feather-trending-up" /></div>
          <div className="fun-fact-text">
            <h4>2250</h4>
            <span>Month Views</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box main-box-in-row">
            <div className="headline">
              <h3>My Daily Activities</h3>
              <div className="sort-by">
                <select className="selectpicker hide-tick">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="content">             
              <Donutchart />             
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box main-box-in-row">
            <div className="headline">
              <h3>My Daily Activities</h3>
              <div className="sort-by">
                <select className="selectpicker hide-tick">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="content">             
              <Piechart />             
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box main-box-in-row">
            <div className="headline">
              <h3>My Daily Activities</h3>
              <div className="sort-by">
                <select className="selectpicker hide-tick">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="content">             
              <LineChart />             
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box main-box-in-row">
            <div className="headline">
              <h3>User Notes Activities</h3>
            </div>
            <div className="content">
              <div className="utf-header-notifications-content">
                <div className="utf-header-notifications-scroll" data-simplebar>
                  <ul className="utf-dashboard-box-list">
                    <li>
                      <span className="notification-icon"><i className="icon-material-outline-group" /></span> <span className="notification-text"><strong>Lorem Ipsum</strong> is simply dummy text of printing and
                        type setting industry. Lorem Ipsum been industry standard dummy text.</span>
                      <div className="utf-buttons-to-right">
                        <Link to="#" className="button green ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></Link>
                        <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                      </div>
                    </li>
                    <li>
                      <span className="notification-icon"><i className="icon-feather-briefcase" /></span> <span className="notification-text"><strong>Lorem Ipsum</strong> is simply dummy text of printing and
                        type setting industry. Lorem Ipsum been industry standard dummy text.</span>
                      <div className="utf-buttons-to-right">
                        <Link to="#" className="button green ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></Link>
                        <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                      </div>
                    </li>
                    <li>
                      <span className="notification-icon"><i className="icon-feather-briefcase" /></span> <span className="notification-text"><strong>Lorem Ipsum</strong> is simply dummy text of printing and
                        type setting industry. Lorem Ipsum been industry standard dummy text.</span>
                      <div className="utf-buttons-to-right">
                        <Link to="#" className="button green ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></Link>
                        <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                      </div>
                    </li>
                    <li>
                      <span className="notification-icon"><i className="icon-material-outline-group" /></span> <span className="notification-text"><strong>Lorem Ipsum</strong> is simply dummy text of printing and
                        type setting industry. Lorem Ipsum been industry standard dummy text.</span>
                      <div className="utf-buttons-to-right">
                        <Link to="#" className="button green ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></Link>
                        <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="#small-dialog" className="popup-with-zoom-anim utf-header-notifications-button ripple-effect utf-button-sliding-icon">User
                Add Notes <i className="icon-feather-chevron-right" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box">
            <div className="headline">
              <h3>Recent Jobs Activities</h3>
            </div>
            <div className="content">
              <ul className="utf-dashboard-box-list">
                <li>
                  <span className="notification-icon"><i className="icon-material-outline-group" /></span> <span className="notification-text"> <strong>John Williams</strong> <Link to="#">iOS Developers</Link> Someone
                    Downloaded Your Resume.</span>
                  <div className="utf-buttons-to-right">
                    <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                  </div>
                </li>
                <li>
                  <span className="notification-icon"><i className="icon-feather-briefcase" /></span> <span className="notification-text"> <strong>John Williams</strong> <Link to="#">iOS Developers</Link> Someone
                    Downloaded Your Resume.</span>
                  <div className="utf-buttons-to-right">
                    <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                  </div>
                </li>
                <li>
                  <span className="notification-icon"><i className="icon-feather-briefcase" /></span> <span className="notification-text"> <strong>John Williams</strong> <Link to="#">Software Engineer</Link>
                    Someone Downloaded Your Resume.</span>
                  <div className="utf-buttons-to-right">
                    <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                  </div>
                </li>
                <li>
                  <span className="notification-icon"><i className="icon-material-outline-group" /></span> <span className="notification-text"> <strong>John Williams</strong> <Link to="#">Logo Designer</Link> Someone
                    Downloaded Your Resume.</span>
                  <div className="utf-buttons-to-right">
                    <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                  </div>
                </li>
                <li>
                  <span className="notification-icon"><i className="icon-material-outline-group" /></span> <span className="notification-text"> <strong>John Williams</strong> <Link to="#">Logo Designer</Link> Someone
                    Downloaded Your Resume.</span>
                  <div className="utf-buttons-to-right">
                    <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                  </div>
                </li>
                <li>
                  <span className="notification-icon"><i className="icon-feather-briefcase" /></span> <span className="notification-text"> <strong>John Williams</strong> <Link to="#">Web Designer</Link> Someone
                    Downloaded Your Resume.</span>
                  <div className="utf-buttons-to-right">
                    <Link to="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="utf-pagination-container-aera margin-top-10 margin-bottom-50">
            <nav className="pagination">
              <ul>
                <li className="utf-pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left" /></Link></li>
                <li><Link to="#" className="current-page ripple-effect">1</Link></li>
                <li><Link to="#" className="ripple-effect">2</Link></li>
                <li><Link to="#" className="ripple-effect">3</Link></li>
                <li className="utf-pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="dashboard-box">
            <div className="headline">
              <h3>All Order Invoices</h3>
              <div className="sort-by">
                <select className="selectpicker hide-tick">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="content">
              <ul className="utf-dashboard-box-list">
                <li>
                  <div className="utf-invoice-list-item">
                    <div className="utf-invoice-user-city">Afghanistan <img className="flag" src={af} alt="thumb" data-tippy-placement="top" title="Afghanistan" data-tippy /></div>
                    <strong>John Williams <span className="paid">Paid Plan</span> </strong>
                    <ul>
                      <li><span>Order ID:</span> 004312641</li>
                      <li><span>Package:</span> Standard</li>
                      <li><span>Date:</span> 12 Jan, 2021</li>
                    </ul>
                  </div>
                  <div className="utf-buttons-to-right"> <Link to="invoice-template.html" className="button gray" title="Invoice" data-tippy-placement="top"><i className="icon-feather-printer" /> Invoice</Link>
                  </div>
                </li>
                <li>
                  <div className="utf-invoice-list-item">
                    <div className="utf-invoice-user-city">United States <img className="flag" src={us} alt="asa" data-tippy-placement="top" title="United States" data-tippy /></div>
                    <strong>John Williams <span className="paid">Paid Plan</span></strong>
                    <ul>
                      <li><span>Order ID:</span> 004312641</li>
                      <li><span>Package:</span> Extended</li>
                      <li><span>Date:</span> 18 Jan, 2021</li>
                    </ul>
                  </div>
                  <div className="utf-buttons-to-right"> <Link to="invoice-template.html" className="button gray" title="Invoice" data-tippy-placement="top"><i className="icon-feather-printer" /> Invoice</Link>
                  </div>
                </li>
                <li>
                  <div className="utf-invoice-list-item">
                    <div className="utf-invoice-user-city">Australia <img className="flag" src={au} alt="au" data-tippy-placement="top" title="Australia" data-tippy /></div>
                    <strong>John Williams <span className="unpaid">Unpaid Plan</span></strong>
                    <ul>
                      <li><span>Order ID:</span> 004312641</li>
                      <li><span>Package:</span> Basic</li>
                      <li><span>Date:</span> 06 Jan, 2021</li>
                    </ul>
                  </div>
                  <div className="utf-buttons-to-right"> <Link to="invoice-template.html" className="button red" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /> Remove</Link>
                  </div>
                </li>
                <li>
                  <div className="utf-invoice-list-item">
                    <div className="utf-invoice-user-city">Brazil <img className="flag" src={br} alt="br" data-tippy-placement="top" title="Brazil" data-tippy /></div>
                    <strong>John Williams <span className="paid">Paid Plan</span></strong>
                    <ul>
                      <li><span>Order ID:</span> 004312641</li>
                      <li><span>Package:</span> Standard</li>
                      <li><span>Date:</span> 25 Jan, 2021</li>
                    </ul>
                  </div>
                  <div className="utf-buttons-to-right"> <Link to="invoice-template.html" className="button gray" title="Invoice" data-tippy-placement="top"><i className="icon-feather-printer" /> Invoice</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="utf-pagination-container-aera margin-top-10 margin-bottom-50">
            <nav className="pagination">
              <ul>
                <li className="utf-pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left" /></Link></li>
                <li><Link to="#" className="current-page ripple-effect">1</Link></li>
                <li><Link to="#" className="ripple-effect">2</Link></li>
                <li><Link to="#" className="ripple-effect">3</Link></li>
                <li className="utf-pagination-arrow"><Link to="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="utf_dashboard_list_box table-responsive recent_booking dashboard-box">
            <div className="headline">
              <h3>Booking Packages</h3>
              <div className="sort-by">
                <select className="selectpicker hide-tick">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="dashboard-list-box table-responsive invoices with-icons">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Profile</th>
                    <th>Plan Package</th>
                    <th>Expiry Plan</th>
                    <th>Payment Type</th>
                    <th>Status</th>
                    <th>View Booking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0431261</td>
                    <td><img alt="thumb" className="img-fluid rounded-circle shadow-lg" src={thumb} width={50} height={50} data-tippy-placement="top" title="John Williams" data-tippy /></td>
                    <td>Standard Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-pill badge-primary text-uppercase">Approved</span></td>
                    <td><Link to="#" className="button gray"><i className="icon-feather-eye" /> View Detail</Link></td>
                  </tr>
                  <tr>
                    <td>0431262</td>
                    <td><img alt="thumb" className="img-fluid rounded-circle shadow-lg" src={thumb} width={50} height={50} data-tippy-placement="top" title="John Williams" data-tippy /></td>
                    <td>Extended Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Credit Card</td>
                    <td><span className="badge badge-pill badge-primary text-uppercase">Approved</span></td>
                    <td><Link to="#" className="button gray"><i className="icon-feather-eye" /> View Detail</Link></td>
                  </tr>
                  <tr>
                    <td>0431263</td>
                    <td><img alt="thumb" className="img-fluid rounded-circle shadow-lg" src={thumb} width={50} height={50} data-tippy-placement="top" title="John Williams" data-tippy /></td>
                    <td>Standard Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-pill badge-danger text-uppercase">Pending</span></td>
                    <td><Link to="#" className="button gray"><i className="icon-feather-eye" /> View Detail</Link></td>
                  </tr>
                  <tr>
                    <td>0431264</td>
                    <td><img alt="thumb" className="img-fluid rounded-circle shadow-lg" src={thumb} width={50} height={50} data-tippy-placement="top" title="John Williams" data-tippy /></td>
                    <td>Basic Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-pill badge-danger text-uppercase">Pending</span></td>
                    <td><Link to="#" className="button gray"><i className="icon-feather-eye" /> View Detail</Link></td>
                  </tr>
                  <tr>
                    <td>0431265</td>
                    <td><img alt="thumb" className="img-fluid rounded-circle shadow-lg" src={thumb} width={50} height={50} data-tippy-placement="top" title="John Williams" data-tippy /></td>
                    <td>Extended Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paywith Stripe</td>
                    <td><span className="badge badge-pill badge-danger text-uppercase">Pending</span></td>
                    <td><Link to="#" className="button gray"><i className="icon-feather-eye" /> View Detail</Link></td>
                  </tr>
                  <tr>
                    <td>0431266</td>
                    <td><img alt="thumb" className="img-fluid rounded-circle shadow-lg" src={thumb} width={50} height={50} data-tippy-placement="top" title="John Williams" data-tippy /></td>
                    <td>Basic Plan</td>
                    <td>12 Dec 2021</td>
                    <td>Paypal</td>
                    <td><span className="badge badge-pill badge-canceled text-uppercase">Canceled</span></td>
                    <td><Link to="#" className="button gray"><i className="icon-feather-eye" /> View Detail</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard