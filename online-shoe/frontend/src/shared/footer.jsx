import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="  footer">
      <Row>
        <Col md={4}>
          <h3>Our Address</h3>
          <p>House 12, Road 12, Sector 12, Uttara, Dhaka-1230</p>
        </Col>
        <Col md={4}>
          <h3>Our Contact</h3>
          <p>Phone: 01700000000</p>
          <p>
            Email:
            <a
              href="mailto:
                // eslint-disable-next-line
                "
            >
              // eslint-disable-next-line
            </a>
          </p>
        </Col>
        <Col md={4}>
          <h3>Our Social Media</h3>
          <p>
            {' '}
            <FaFacebookSquare size={20} />
            Facebook
          </p>
          <p>Twitter</p>
          <p>
            {' '}
            <BsInstagram size={30} />
            Instagram
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
