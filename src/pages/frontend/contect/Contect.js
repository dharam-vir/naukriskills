import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';


const Contect = () => {
 const[pre, setPre] = useState({
  'fname' : "",
  "lname" : "",
  "email" : "",
  "subject" : "",
  "message" : ""
});

  const formHeandal = (e) => {
   const {name, value} = e.target;
    setPre(pre => ({...pre, [name] : value}))
  }

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(pre);
    setPre({
      'fname': "",
      'lname': "",
      'email': "",
      'subject': "",
      'message': "",

    })
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="utf-contact-location-info-aera margin-bottom-50">
              <div id="utf-single-job-map-container-item">
                <div id="singleListingMap" data-latitude="48.8566" data-longitude="2.3522" data-map-icon="im im-icon-Hamburger" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="utf-boxed-list-headline-item margin-bottom-35">
              <h3><i className="icon-feather-map-pin" /> Office Address</h3>
            </div>
            <div className="utf-contact-location-info-aera margin-bottom-50">
              <div className="contact-address">
                <ul>
                  <li><strong>Phone:-</strong> (+91) 8750 299 299</li>
                  <li><strong>Website:-</strong> <Link to="#">www.naukriskills.com</Link></li>
                  <li><strong>E-Mail:-</strong> <Link to="#">info@naukriskills.com</Link></li>
                  <li><strong>Address:-</strong> C-75 sector 10 noida 201301.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <section id="contact" className="margin-bottom-50">
              <div className="utf-boxed-list-headline-item margin-bottom-35">
                <h3><i className="icon-material-outline-description" /> Contact Form</h3>
              </div>
              <div className="utf-contact-form-item">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="utf-no-border">
                        <input className="utf-with-border" name="fname" type="text" value={pre.fname} onChange={formHeandal} placeholder="Frist Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="utf-no-border">
                        <input className="utf-with-border" name="lname" type="text" value={pre.lname} onChange={formHeandal} placeholder="Last Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="utf-no-border">
                        <input className="utf-with-border" name="email" type="email" value={pre.email} onChange={formHeandal} placeholder="Email Address" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="utf-no-border">
                        <input className="utf-with-border" name="subject" type="text" value={pre.subject} onChange={formHeandal} placeholder="Subject" required />
                      </div>
                    </div>
                  </div>
                  <div>
                    <textarea className="utf-with-border" name="message" cols={40} rows={3} value={pre.message} onChange={formHeandal} placeholder="Message..." required defaultValue={""} />
                  </div>
                  <div className="utf-centered-button margin-top-10">
                    <input type="submit" className="submit button" onClick={formSubmit} defaultValue="Submit Message" />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contect