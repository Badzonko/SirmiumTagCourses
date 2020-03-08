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
                  <NavDropdown.Item className="text-center"  href="./Htmlsrb"><Link className="dark" to="/Htmlsrb">HTML (SRB)</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-center" href="./Html"><Link className="dark" to="/Html">HTML (ENG)</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  title="CSS" id="basic-nav-dropdown">
                  <NavDropdown.Item className="text-center"  href="./Csssrb"><Link className="dark" to="/Csssrb">CSS (SRB)</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-center" href="./Css"><Link className="dark" to="/Css">CSS (ENG)</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  title="BOOTSTRAP" id="basic-nav-dropdown">
                  <NavDropdown.Item className="text-center"  href="./Bootstrapsrb"><Link className="dark" to="/Bootstrapsrb">BOOTSTRAP (SRB)</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-center" href="./Bootstrap"><Link className="dark" to="/Bootstrap">BOOTSTRAP (ENG)</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  title="REACT.JS" id="basic-nav-dropdown">
                  <NavDropdown.Item className="text-center" href="./Reactjs"><Link className="dark" to="/Reactjs">REACT.JS (ENG)</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
          
        
         );
    }
}
 
export default Navbarr;