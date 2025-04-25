import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const Layoutadmin = () => {
  return (
    <Fragment>
        <Header />
        <Outlet />
        <Footer />
    </Fragment>
  )
}

export default Layoutadmin