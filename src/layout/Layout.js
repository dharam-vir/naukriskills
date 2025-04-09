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
  )
}

export default Layout