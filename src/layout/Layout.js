import React, { Fragment } from 'react'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Newsletter from '../components/home/Newsletter'
import Banner from '../components/home/Banner'
import Titlebar from './../components/titlebar/Titlebar';
const Layout = ({Details}) => {
  return (
    <Fragment>       
      <div className="utf-wrapper-utf-transparent-header-block-part">
      <Header />      
       {Details === 'Details' ? <Banner /> : <Titlebar /> }
      <Outlet />
      <Newsletter />
      <Footer />
      </div>
    </Fragment>
  )
}

export default Layout