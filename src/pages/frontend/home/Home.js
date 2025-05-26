import React, { Fragment } from 'react'
import Categories from '../../../components/home/Categories'
import Latestjobs from '../../../components/home/Latestjobs'
import Iconboxes from '../../../components/home/Iconboxes'
import Testimonials from '../../../components/home/Testimonials'
import Blogposts from '../../../components/home/Blogposts'
import Popularcompanies from '../../../components/home/Popularcompanies'

const Home = () => {
  return (
    <Fragment>
      <Categories />
      <Latestjobs />
      <Iconboxes />
      <Testimonials />
      <Blogposts />
      <Popularcompanies />      
    </Fragment>
  )
}

export default Home