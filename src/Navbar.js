import React from 'react';
import './App.css';
import App from './App';
import Bootstrap from './Bootstrap';
import Css from './Css';
import Csssrb from './Csssrb';
import Reactjs from './Reactjs';
import Html from './Html';
import {Link} from 'react-router-dom';
import dev from './dev.png';
import Quotes from './Pocetna';
import Htmlsrb from './Htmlsrb';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavDropdown,  } from 'react-bootstrap';
class Navbarr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           
            <Navbar id="NavigacioniBar" className="text-center navbar-light" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/Pocetna"><img id="navIkonica" src={dev} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" light />
            <Navbar.Collapse  id="basic-navbar-nav" light>
              <Nav className="mr-auto">
              <NavDropdown  title="HTML" id="basic-nav-dropdown">
                  <NavDropdown.Item className="dark text-center"  href="./Htmlsrb">HTML (SRB)</NavDropdown.Item>
                  <NavDropdown.Item className="dark text-center" href="./Html">HTML (ENG)</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  title="CSS" id="basic-nav-dropdown">
                  <NavDropdown.Item className="dark text-center"  href="./Csssrb">CSS (SRB)</NavDropdown.Item>
                  <NavDropdown.Item className="dark text-center" href="./Css">CSS (ENG)</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  title="BOOTSTRAP" id="basic-nav-dropdown">
                  <NavDropdown.Item className="dark text-center"  href="./Bootstrapsrb">BOOTSTRAP (SRB)</NavDropdown.Item>
                  <NavDropdown.Item className="dark text-center" href="./Bootstrap">BOOTSTRAP (ENG)</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  title="REACT.JS" id="basic-nav-dropdown">
                  <NavDropdown.Item className="dark text-center"  href="">REACT.JS (SRB)</NavDropdown.Item>
                  <NavDropdown.Item className="dark text-center" href="./Reactjs">REACT.JS (ENG)</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
          
        
         );
    }
}
 
export default Navbarr;