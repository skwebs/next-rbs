import React from 'react'
import { Navbar,Container,NavDropdown, Nav, Button } from 'react-bootstrap';
import ActiveLink from './ActiveLink'
import Link from 'next/link'

export default function MenuItems() {

  
  return(
<Nav className="ms-auto navbar-nav">
        <ActiveLink activeClassName="active" href="/" passHref><Nav.Link>Home</Nav.Link></ActiveLink>
        <ActiveLink activeClassName="active" href="/admin" passHref><Nav.Link>Admin</Nav.Link></ActiveLink>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <ActiveLink activeClassName="active" href="/" passHref>
          <NavDropdown.Item>Home</NavDropdown.Item>
          </ActiveLink>
             <ActiveLink activeClassName="active" href="/admin" passHref>
              <NavDropdown.Item>Admin</NavDropdown.Item>
            </ActiveLink>
        </NavDropdown>
      </Nav>
)
}