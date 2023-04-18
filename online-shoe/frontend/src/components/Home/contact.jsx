import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className="contact ">
      <Form
        className=" 
        d-flex flex-column justify-content-center align-items-center
    rounded  
    "
        style={{ height: '30vh' }}
      >
        <p className="  text-white text-center fst-italic">
          Be the first know our latest offers and updates!
        </p>
        <div className=" d-flex justify-content-center   align-items-center  ">
          <Row className="     ">
            <Form.Group controlId="formGridEmail">
              <Form.Control required type="text" placeholder="Email" />
            </Form.Group>
          </Row>
          <Button type="submit" className="  btn-brand border  ">
            Subscrib Now
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Contact
