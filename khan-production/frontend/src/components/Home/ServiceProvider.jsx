import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Product from './Product'
import { getServiceProvide } from '../../hooks/productHooks'

const ServiceProvider = () => {
  const { data: products, isLoading, error } = getServiceProvide()

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error</h1>
  ) : (
    <div>
      <h2 className=" text-brand">We Are Provider Costomer Service </h2>
      <Row>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </Row>
    </div>
  )
}

export default ServiceProvider
