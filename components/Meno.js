
import { Navbar,Container,NavDropdown, Nav, Button, Offcanvas } from 'react-bootstrap';
import ActiveLink from './ActiveLink'
import Link from 'next/link'


export default function Menu() {
  const expand = "md";
  return (
<>
    <Navbar bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar bg="light" expand="md">
            <Nav className="justify-content-end flex-grow-1 pe-3 navbar-light">
            
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
            </Navbar>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
</>
)
}