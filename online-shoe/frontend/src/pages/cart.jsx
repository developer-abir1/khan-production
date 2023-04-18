import React, { useContext, useState } from 'react'
import { Col, Row, TabPane, Table } from 'react-bootstrap'
import { AuthContext } from '../context/AuthProvider'
import { addToDb, removeFromDb, removeQuantity } from '../utils/localStore'
import { BsPlusCircleFill, BsDashCircleFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
const Cart = () => {
  const { cart, setCart } = useContext(AuthContext)

  const [shipping, setShipping] = useState(false)

  const comperData = (a, b) => {
    if (a.slug < b.slug) {
      return -1
    }
    if (a.slug > b.slug) {
      return 1
    }
    return 0
  }
  const sortedCart = cart.sort(comperData)

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

  const handleRemoveCart = (product) => {
    const exist = cart.find((pd) => pd.slug === product.slug)
    let newCart = []
    if (exist.quantity === 1) {
      const rest = cart.filter((pd) => pd.slug !== product.slug)
      newCart = [...rest]
    } else {
      const rest = cart.filter((pd) => pd.slug !== product.slug)
      exist.quantity = exist.quantity - 1
      newCart = [...rest, exist]
    }
    setCart(newCart)
    removeQuantity(product.slug)
  }

  const handleDelete = (product) => {
    const rest = cart.filter((pd) => pd.slug !== product.slug)
    setCart(rest)
    removeFromDb(product.slug)
  }

  const totalText =
    cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ) * 0.1

  return cart.length === 0 ? (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <h1>Cart is Empty</h1>
      <Link to={'/products'}>
        <p>countinu shopping</p>
      </Link>
    </div>
  ) : (
    <div>
      <Row className=" mt-4">
        <Col lg={8}>
          <Table hover size="md">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>

            {sortedCart?.map((product, index) => (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img src={product.img} width={50} alt="" />
                  </td>
                  <td>
                    <Link to={`/product/${product.slug}`}>
                      {' '}
                      <h5>{product.name}</h5>
                    </Link>
                  </td>
                  <td>
                    <p>{product.price * product.quantity}</p>
                  </td>
                  <td className="">
                    <button
                      onClick={() => handleAddCart(product)}
                      className=" btn"
                    >
                      <BsPlusCircleFill size={30} />
                    </button>{' '}
                    {product.quantity}
                    <button
                      onClick={() => handleRemoveCart(product)}
                      className="btn border-0  "
                      disabled={product.quantity === 1}
                    >
                      <AiFillMinusCircle size={30} />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => handleDelete(product)}
                    >
                      <MdDelete size={30} className=" text-danger" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
        <Col lg={4}>
          <div className=" border  rounded  p-3 ">
            <h3 className=" text-center  ">Order Summary</h3>
            <div
              className=" ml-8"
              style={{
                marginLeft: '20px',
              }}
            >
              <p>Items Ordered: {cart.length}</p>
              <p>
                Total Product Qunatity :
                {cart.reduce((total, product) => total + product.quantity, 0)}
              </p>
              <p>
                <span className=" fw-bold"> 10% tex : </span>
                {totalText.toFixed(2)}
              </p>
              <p className=" fw-bold fs-4">
                Total Price:{' '}
                {shipping
                  ? cart.reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    ) + 20
                  : cart.reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    )}
              </p>
              <h6>
                <input
                  type="checkbox"
                  onChange={(e) => setShipping(e.target.checked)}
                />
                <span> shipping raper $20</span>
              </h6>
            </div>

            <div className=" d-flex justify-content-center align-items-center">
              <button className="btn-brand"> Processed Checkout</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Cart
