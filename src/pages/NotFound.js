import React, { Fragment } from 'react'
import errorPage from '../assets/images/error-404.png';

const NotFound = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <section id="utf-not-found-item" className="center margin-top-25 margin-bottom-40">
              <div className="utf-error-img"><img src={errorPage} alt="404 page" /></div>
              <h1>Page Not Found</h1>
              <p>Oops!!!! you tried to access a page which is not available. go back to Home</p>
              <div className="utf-centered-button">
                <a href="/" className="button ripple-effect big margin-top-10 margin-bottom-20">Back to Home</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Fragment>

  )
}

export default NotFound