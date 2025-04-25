<<<<<<< HEAD
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
=======
import React from 'react'
import Header from '../components/admin/Header'
import Navbar from '../components/admin/Navbar'
import Footer from '../components/admin/Footer'
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
>>>>>>> 1940ff8529de678b03eebe85d12aafcfc1dc35c8
  )
}

export default Layout