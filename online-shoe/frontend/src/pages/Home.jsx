import React from 'react'
import Header from '../components/Home/Header'
import Products from '../components/Home/products'
import ServiceProvider from '../components/Home/ServiceProvider'
import Testimonial from '../components/Home/Testimonial'

const HomePages = () => {
  return (
    <div>
      <Header />
      <ServiceProvider />
      <Products />
      <Testimonial />
    </div>
  )
}

export default HomePages
