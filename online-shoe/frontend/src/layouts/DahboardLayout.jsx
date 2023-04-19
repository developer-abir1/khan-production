import React, { useState } from 'react'
import { Container, NavLink } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { Button, ButtonToolbar, Drawer, Sidenav, Nav } from 'rsuite'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import MenuIcon from '@rsuite/icons/Menu'
import Plus from '@rsuite/icons/legacy/Plus'
import { MdAutorenew } from 'react-icons/md'
import { BsListColumns } from 'react-icons/bs'

const DahboardLayout = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Container>
        <header className="mt-2">
          <ButtonToolbar style={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              onClick={() => setOpen(true)}
              startIcon={<MenuIcon style={{ fontSize: '32px' }} />}
            ></Button>
          </ButtonToolbar>
        </header>
        <div
          style={{
            marginTop: '5px',
            height: '100vh',
            borderRadius: '5px',
          }}
          className="colorCode"
        >
          <Outlet />
        </div>
      </Container>

      <Drawer
        size={'xs'}
        open={open}
        onClose={() => setOpen(false)}
        placement="left"
      >
        <Drawer.Header>
          <Drawer.Actions></Drawer.Actions>
          <Drawer.Title>Online Shopping</Drawer.Title>
        </Drawer.Header>

        <Sidenav className=" bg-white">
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                <Link to="/dashboard">Dashboard</Link>
              </Nav.Item>
              <Nav.Item icon={<Plus />}>
                {' '}
                <Link to="addProducts">Add Products </Link>
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Drawer>
    </>
  )
}

export default DahboardLayout
