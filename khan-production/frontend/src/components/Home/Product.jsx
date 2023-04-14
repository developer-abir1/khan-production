import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Product = ({ product }) => {
  const { name, price, img, description } = product
  console.log(product)
  return (
    <Col lg={4} md={6} sm={6} xs={12} className="px-4  py-4 ">
      <Card>
        <Card.Img
          className="   object-fit-cover   rounded  shadow-sm  bg-body-tertiary  "
          variant="top"
          src={img}
          width={300}
          height={250}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <div className=" d-flex justify-content-between">
            <button className="btn-brand  ">
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
