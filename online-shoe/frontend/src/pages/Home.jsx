import React from 'react'
import Header from '../components/Home/Header'
import Products from '../components/Home/products'
import ServiceProvider from '../components/Home/ServiceProvider'
import Testimonial from '../components/Home/Testimonial'
import Contact from '../components/Home/contact'
import Footer from '../shared/footer'

const HomePages = () => {
  return (
    <div>
      <Header />
      <ServiceProvider />
      <Products />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePages
