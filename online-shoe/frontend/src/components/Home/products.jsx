import React from 'react'
import Product from './Product'
import { ButtonToolbar, Row } from 'react-bootstrap'
import {
  getExtaCollactionQuery,
  getProductsQuery,
} from '../../hooks/productHooks'

const Products = () => {
  const { data: products, isLoading, error } = getProductsQuery()
  const {
    data: extacollaction,
    isLoading: exLodding,
    error: exError,
  } = getExtaCollactionQuery()
  return isLoading || exLodding ? (
    <h1>Loading...</h1>
  ) : error || exError ? (
    <h1>Error</h1>
  ) : (
    <div>
      <h2 className="h2 mt-4 text-brand"> Your Best Choice</h2>
      <Row>
        {products.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </Row>
      <div className=" d-flex justify-content-center">
        <button className="sub-brand-btn">Viwe All</button>
      </div>

      <h2 className="h2 mt-4  text-brand"> Your Best Choice</h2>
      <Row>
        {extacollaction.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </Row>
    </div>
  )
}

export default Products
