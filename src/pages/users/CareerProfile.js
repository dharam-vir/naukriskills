import React, { Fragment } from 'react'

const CareerProfile = () => {
  return (
    <Fragment>
       <div className="row">
        <div className="col-xl-12">
          <div className="dashboard-box margin-top-0 margin-bottom-30">
            <div className="headline">
              <h3>Career Profile</h3>
            </div>
            <div className="content with-padding padding-bottom-0">
              <div className="row">
                <div className="col">
                  <div className="row">                 
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Your Name</h5>
                        <input type="text" className="utf-with-border" defaultValue="John Williams" /> 
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Phone Number</h5>
                        <input type="text" className="utf-with-border" defaultValue="(+22) 1201 123-456" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5>Email Address</h5>
                        <input type="text" className="utf-with-border" defaultValue="demo@example.com" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12">
                      <div className="utf-submit-field">
                        <h5>Notes</h5>
                        <textarea name="notes" className="utf-with-border" cols={20} rows={3} defaultValue={"Lorem Ipsum is simply dummy text of printing and type setting industry Lorem Ipsum been industry standard dummy text ever since."} />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5><i className="icon-brand-facebook" /> Facebook</h5>
                        <input type="text" className="utf-with-border" defaultValue="https://www.facebook.com/" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5><i className="icon-brand-twitter" /> Twitter</h5>
                        <input type="text" className="utf-with-border" defaultValue="https://www.twitter.com/" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5><i className="icon-brand-linkedin" /> Linkedin</h5>
                        <input type="text" className="utf-with-border" defaultValue="https://www.google.com/" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <div className="utf-submit-field">
                        <h5><i className="icon-brand-google" /> Google</h5>
                        <input type="text" className="utf-with-border" defaultValue="https://www.linkedin.com/" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="javascript:void(0);" className="button ripple-effect big margin-top-10 margin-bottom-20">Save Changes</a>
            </div>
          </div>
        </div>      
      </div>
    </Fragment>
  )
}

export default CareerProfile