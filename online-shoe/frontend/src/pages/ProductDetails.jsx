import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getProductsQuery } from '../hooks/productHooks'
import { addToDb } from '../utils/localStore'
import { AuthContext } from '../context/AuthProvider'

const ProductDetails = () => {
  const { slug } = useParams()
  const { cart, setCart } = useContext(AuthContext)
  const { data: products = [] } = getProductsQuery()
  const product = products?.find((product) => product.slug === slug)

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

  return (
    <div>
      <Row className="mt-4">
        <Col md={7}>
          <img
            src={product?.img}
            className="rounded"
            alt=""
            width={500}
            height={500}
          />
        </Col>
        <Col md={5}>
          <h2> Name : {product?.name}</h2>
          <p> Price :{product?.price}</p>
          <p> Description: {product.description}</p>
          <Link to={'/cart'}>
            {' '}
            <button
              className="btn-brand"
              onClick={() => handleAddCart(product)}
            >
              Add to cart
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetails
