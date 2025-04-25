import React, { Fragment } from 'react'
import Banner from '../../../components/home/Banner'
import Categories from '../../../components/home/Categories'
import Latestjobs from '../../../components/home/Latestjobs'
import Iconboxes from '../../../components/home/Iconboxes'
import Testimonials from '../../../components/home/Testimonials'
import Blogposts from '../../../components/home/Blogposts'
import Popularcompanies from '../../../components/home/Popularcompanies'
import Newsletter from '../../../components/home/Newsletter'

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Categories />
      <Latestjobs />
      <Iconboxes />
      <Testimonials />
      <Blogposts />
      <Popularcompanies />
      <Newsletter />
    </Fragment>
  )
}

export default Home