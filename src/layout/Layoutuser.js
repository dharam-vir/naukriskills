import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Menu from '../components/user/navbar/Menu'
import Breadcrumbs from '../components/user/breadcrumbs/Breadcrumbs'
import Footeruser from '../components/footer/Footeruser'
const Layoutuser = () => {
  return (
    <Fragment>
      <Header />
      <div className="utf-dashboard-container-aera">
        <Menu />
        <div className="utf-dashboard-content-container-aera" data-simplebar>
          <Breadcrumbs />
          <div className="utf-dashboard-content-inner-aera">
            <Outlet />
            <Footeruser />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Layoutuser