import {useState} from 'react'
import { Navbar,Container,NavDropdown, Nav, Offcanvas, Button } from 'react-bootstrap';
import ActiveLink from './ActiveLink'
import Link from 'next/link'


export default function Sidebar() {
  const [expand, setExpand] = useState("md");
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const SidebarItems = {
    Home:{
      link:'/'
    },
    'About Us':{
      link:'/about'
    },
    'Contact Us':{
      link:'/contact'
    },
    Admin:{
      link:'/admin'
    }
  }
  return (
<>
    <Navbar bg="light" fixed="top" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">NextJS</Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas show={show} 
        onHide={handleClose}
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Anshu Memorial Academy
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
             {Object.keys(SidebarItems).map((text, index) => (
               	<ActiveLink key={index} activeClassName="active" href={SidebarItems[text].link} passHref><Nav.Link onClick={handleClose}>{text}</Nav.Link></ActiveLink>
               ))
            }
				
		        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
		          <ActiveLink activeClassName="active" href="/" passHref>
		          <NavDropdown.Item>Home</NavDropdown.Item>
		          </ActiveLink>
		             <ActiveLink activeClassName="active" href="/admin" passHref>
		              <NavDropdown.Item>Admin</NavDropdown.Item>
		            </ActiveLink>
		        </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
</>
)
}