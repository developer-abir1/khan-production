import { Carousel, Col, Container, Row } from 'react-bootstrap'
import React from 'react'

const Header = () => {
  return (
    <Carousel fade>
      <Carousel.Item className=" caruselColor1">
        <img className="d-block w-25  " src="image/m1.png" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=" caruselColor2">
        <div className=" d-flex justify-content-end">
          <img className="d-block w-25" src="image/m2.png" alt="Second slide" />
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Header
