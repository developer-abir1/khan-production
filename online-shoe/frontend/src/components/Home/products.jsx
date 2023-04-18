import React, { useContext, useState } from 'react'
import Product from './Product'
import { Row } from 'react-bootstrap'
import { getProductsQuery } from '../../hooks/productHooks'
import { addToDb } from '../../utils/localStore'
import { AuthContext } from '../../context/AuthProvider'

const Products = () => {
  const { cart, setCart } = useContext(AuthContext)
  const { data: products, isLoading, error } = getProductsQuery()

  const handleAddCart = (product) => {
    const exist = cart.find((pd) => pd.slug === product.slug)
    let newCart = []
    if (exist) {
      const rest = cart.filter((pd) => pd.slug !== product.slug)
      exist.quantity = exist.quantity + 1
      newCart = [...rest, exist]
    } else {
      product.quantity = 1
      newCart = [...cart, product]
    }
    setCart(newCart)

    addToDb(product.slug)
  }

  return isLoading ? (
    <div>loading</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div>
      <h1>Total Products </h1>
      <Row>
        {products.map((product) => (
          <Product
            key={product.slug}
            product={product}
            handleAddCart={handleAddCart}
          />
        ))}
      </Row>
      <div className=" d-flex justify-content-center">
        <button className="sub-brand-btn">Viwe All</button>
      </div>
    </div>
  )
}

export default Products
