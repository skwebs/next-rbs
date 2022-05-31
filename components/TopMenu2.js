import {useState} from 'react'
import {Button, Offcanvas} from 'react-bootstrap'
import MenuItems from './MenuItems'
export default function Menu (){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MenuItems/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
