import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { CiDeliveryTruck } from 'react-icons/ci'
import { BsCashCoin } from 'react-icons/bs'
import { MdSupportAgent } from 'react-icons/md'
const services = [
  {
    id: 1,
    name: 'Home Delivery Service',
    icon: <CiDeliveryTruck size={30} />,
    bgcolor: '#400368',
  },
  {
    id: 2,
    name: 'Cash On Delivery',
    icon: <BsCashCoin size={30} />,
    bgcolor: '#2a0307',
  },
  {
    id: 3,
    name: '24/7 Support',
    icon: <MdSupportAgent size={30} />,
    bgcolor: '#400368',
  },
]

const ServiceProvider = () => {
  return (
    <div>
      <Row>
        {services.map((service) => (
          <Col key={service.id} md={4} className=" my-2">
            <Card
              className=" my-2  d-flex justify-content-center align-items-center h-100 my-4 server-card"
              style={{ background: `${service.bgcolor}`, color: 'white' }}
            >
              <div className=" d-flex align-items-center justify-content-evenly w-75   ">
                <div className="  ">
                  <span className=" ">{service.icon}</span>
                </div>
                <div className=" ">
                  <span>{service.name}</span>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ServiceProvider
