import { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BsCart4 } from 'react-icons/bs'
import { Dropdown } from 'react-bootstrap'
import { AuthContext } from '../context/AuthProvider'
import { Link } from 'react-router-dom'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 100)
    })
  }, [])
  const { cart } = useContext(AuthContext)

  return (
    <Navbar
      expand="lg"
      className={`sticky-top  ${isScrolled ? 'navBg1' : 'navBg2'}`}
    >
      <Container>
        <Link to={'/'}>
          <Navbar.Brand to="/" className="fw-bold">
            Shoe Market
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className=" bg-white border-0"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={'/'}>
              <Nav.Link className="text-white">Home</Nav.Link>
            </Link>
            <Nav.Link href="#action1" className="text-white">
              Products
            </Nav.Link>
            {cart.length > 0 && (
              <Link to={'/cart'}>
                <Nav.Link href="#action1" className="text-white">
                  <BsCart4 size={20} />{' '}
                  <span className=" bg-danger rounded py-2 px-2">
                    {cart?.length}
                  </span>
                </Nav.Link>
              </Link>
            )}
            <Nav.Link href="#action1" className="text-white">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
