import React, { Fragment } from 'react'

const Footeruser = () => {
  return (
    <Fragment>
      <div className="utf-dashboard-footer-spacer-aera"></div>
      <div className="utf-small-footer margin-top-15">
        <div className="utf-small-footer-copyrights">Copyright &copy; {new Date().getFullYear() } All Rights Reserved.</div>
      </div>
    </Fragment>
  )
}

export default Footeruser