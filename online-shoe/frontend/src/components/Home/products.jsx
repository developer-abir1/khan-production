import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import { Row } from 'react-bootstrap'
import { getProductsQuery } from '../../hooks/productHooks'
import { addToDb, getDb } from '../../utils/localStore'
import { AuthContext } from '../../context/AuthProvider'
import { Link, useLocation } from 'react-router-dom'

const Products = () => {
  const location = useLocation()
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
      <h4 className="mt-4"> Best Collactions</h4>
      <Row>
        {products.map((product) => (
          <Product
            key={product.slug}
            product={product}
            handleAddCart={handleAddCart}
          />
        ))}
      </Row>
      {location.pathname === '/products' ? (
        ''
      ) : (
        <Link to={'/products'}>
          <div className=" d-flex justify-content-center">
            <button className="sub-brand-btn">Viwe All</button>
          </div>
        </Link>
      )}
    </div>
  )
}

export default Products
