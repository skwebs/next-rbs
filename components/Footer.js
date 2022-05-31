import {Nav} from 'react-bootstrap'
import {Youtube, Facebook, Instagram, Twitter} from 'react-bootstrap-icons'
export default function Footer(){
  return(
    <>
    <div className="bg-dark text-center text-muted footer shadow-shorter-r">
      <div className="bg-primary py-2">
        <Nav className="justify-content-center" >
           <Nav.Item>
           <Nav.Link>
              <Youtube className="ftr-sc-icon"   />
           </Nav.Link>
          </Nav.Item>
          <Nav.Item>
           <Nav.Link>
              <Facebook className="ftr-sc-icon"   />
           </Nav.Link>
          </Nav.Item>
           <Nav.Item>
           <Nav.Link>
              <Twitter className="ftr-sc-icon"   />
           </Nav.Link>
          </Nav.Item> <Nav.Item>
           <Nav.Link>
              <Instagram className="ftr-sc-icon"   />
           </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="p-5">
      
      </div>
    <div className="copyright p-3">
    Copyright &copy; <span  className="">Anshu Memorial Academy</span>
    </div>
    </div>
    </>
    )
}