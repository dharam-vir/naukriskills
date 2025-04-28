import React, { Fragment } from 'react'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
const Layout = () => {
  return (
    <Fragment>
      <div className="utf-wrapper-utf-transparent-header-block-part">
      <Header />
      <Outlet />
      <Footer />
      </div>
    </Fragment>
  )
}

export default Layout