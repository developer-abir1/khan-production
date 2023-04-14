import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../shared/Navbar'
import { Container } from 'react-bootstrap'

const MainLayout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  )
}

export default MainLayout
