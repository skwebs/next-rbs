import React from 'react'
import { Navbar,Container,NavDropdown, Nav, Button } from 'react-bootstrap';
import ActiveLink from './ActiveLink'
import MenuItems from './MenuItems'
import Link from 'next/link'

export default function Menu() {
  const [expanded, setExpanded] = React.useState(false);

  const handleClose = () => setExpanded(false);
  const handleShow = () => setExpanded(true);
  
  return(
<Navbar sticky="top" ariant="dark" expanded={expanded} className="shadow-5-r" expand="md">
  <Container>
    <Navbar.Brand href="#home">NextJS</Navbar.Brand>
    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto navbar-nav">
        <ActiveLink activeClassName="active" href="/" passHref><Nav.Link onClick={() => setExpanded(false)} >Home</Nav.Link></ActiveLink>
        <ActiveLink activeClassName="active" href="/admin" passHref><Nav.Link onClick={() => setExpanded(false)}>Admin</Nav.Link></ActiveLink>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <ActiveLink activeClassName="active" href="/" passHref>
          <NavDropdown.Item onClick={() => setExpanded(false)} >Home</NavDropdown.Item>
          </ActiveLink>
             <ActiveLink activeClassName="active" href="/admin" passHref>
              <NavDropdown.Item onClick={() => setExpanded(false)} >Admin</NavDropdown.Item>
            </ActiveLink>
        </NavDropdown>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
)
}