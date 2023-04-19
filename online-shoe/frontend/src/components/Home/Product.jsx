import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Product = ({ product, handleAddCart }) => {
  const { name, price, img, description, slug } = product

  return (
    <Col lg={4} md={6} sm={6} xs={12} className="px-4  py-4 ">
      <Card>
        <Link to={`/product/${slug}`}>
          <Card.Img
            className="   object-fit-cover   rounded  shadow-sm  bg-body-tertiary  "
            variant="top"
            src={img}
            width={300}
            height={250}
          />
        </Link>
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <div className=" d-flex justify-content-between">
            <button
              className="btn-brand  "
              onClick={() => handleAddCart(product)}
            >
              <i className="fas fa-shopping-cart"></i>
              Add Card
            </button>

            <p>${price}</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product
