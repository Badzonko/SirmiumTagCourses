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
import Pocetna from './Pocetna';
import Htmlsrb from './Htmlsrb';
import Documentation from './Documentation';
import Cssgrid from './Css-grid';
import Cssflexbox from './Css-flexbox';
import Javascript from './Javascript';
import Nodejs from './Nodejs';
import Graphql from './Graphql';
import Nexjs from './Nexjs';
import Php from './Php';
import Mongodb from './Mongodb';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavDropdown,  } from 'react-bootstrap';
import phs from './phs.png';
import verified from './verified.png';
import denied from './denied.png'



firebase.initializeApp({
  apiKey:'AIzaSyDvGDv_G6ib0uj-5aFl75301oqPkmax9aI',
  authDomain:'authentication-3e813.firebaseapp.com'
})
 
 
class Login extends React.Component {
 
    state = { isSignedIn:false}
    uiConfig = {
      singInFlow:'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
 
      ],
      callbacks:{
        signInSuccess: () => false
      }
    }

 
 
    componentDidMount = () =>{
      
 
      firebase.auth().onAuthStateChanged(user => {
        this.setState({isSignedIn:!!user})
        console.log('user',user)
        
      })
    }
  
  render() { 
    return ( 
      <div className="sss">
        <div className="App">
      {this.state.isSignedIn ? 
      <span>
      <h3 className="text-center">Welcome {firebase.auth().currentUser.displayName}</h3>
     <div className="text-center"><img className="avatar" src={(firebase.auth().currentUser.photoURL != null) ? firebase.auth().currentUser.photoURL : phs}  alt=""/></div> 
      <small className="text-left">Name: <strong> {firebase.auth().currentUser.displayName}</strong> </small><br/>
      <small className="text-left">Email: <strong>{firebase.auth().currentUser.email}</strong> </small><br/>
      <small className="text-left">Email verified: <img id="verified" src={(firebase.auth().currentUser.emailVerified == true) ? verified : denied }/> </small><br/>
      <small className="text-left">Phone number: {(firebase.auth().currentUser.phoneNumber != null) ? firebase.auth().currentUser.phoneNumber : "Please enter phone number" } </small><br/>

      <button className="text-center btn btn-danger" onClick={()=>firebase.auth().signOut()}>Sign out!</button>
    
      </span>
      : 
      <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>     
      
      }
      </div>
      </div>
     );
  }
}









class Navbarr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      
        return ( 
           
            <Navbar id="NavigacioniBar" className="text-center navbar-light" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="./Pocetna"><Link to="/Pocetna"><img id="navIkonica" src={dev} /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" light />
            <Navbar.Collapse light>
              <Nav className="mr-auto">

                <NavDropdown  title="HTML" id="basic-nav-dropdown">
                  <NavDropdown.Item className="text-center"  href="./Htmlsrb"><Link className="dark" to="/Htmlsrb">HTML (SRB)</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-center" href="./Html"><Link className="dark" to="/Html">HTML (ENG)</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  title="CSS" id="basic-nav-dropdown">
                  <NavDropdown.Item className="text-center"  href="./Csssrb"><Link className="dark" to="/Csssrb">CSS (SRB)</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-center" href="./Css"><Link className="dark" to="/Css">CSS (ENG)</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="./Cssgrid"><Link className="white" to="/Cssgrid">CSS-GRID</Link></Nav.Link>
                <Nav.Link href="./Cssflexbox"><Link className="white" to="/Cssflexbox">CSS-FLEXBOX</Link></Nav.Link>
                <NavDropdown  title="BOOTSTRAP" id="basic-nav-dropdown">
                  <NavDropdown.Item className="text-center"  href="./Bootstrapsrb"><Link className="dark" to="/Bootstrapsrb">BOOTSTRAP (SRB)</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-center" href="./Bootstrap"><Link className="dark" to="/Bootstrap">BOOTSTRAP (ENG)</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  title="JAVASCRIPT" id="basic-nav-dropdown">
                <NavDropdown.Item className="text-center" href="./Javascript"><Link className="dark" to="/Javascript">JAVASCRIPT (ENG)</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-center" href="./Reactjs"><Link className="dark" to="/Reactjs">REACT.JS (ENG)</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-center" href="./Nodejs"><Link className="dark" to="/Nodejs">NODE.JS (ENG)</Link></NavDropdown.Item>
                  <NavDropdown.Item className="text-center" href="./Nexjs"><Link className="dark" to="/Nexjs">NODE.JS + EXPRESS.JS (ENG)</Link></NavDropdown.Item>

                </NavDropdown>
                <Nav.Link href="./Graphql"><Link className="white" to="/Graphql">GRAPHQL</Link></Nav.Link>
                <Nav.Link href="./Php"><Link className="white" to="/Php">PHP</Link></Nav.Link>
                <Nav.Link href="./Mongodb"><Link className="white" to="/Mongodb">MONGODB</Link></Nav.Link>
                <Nav.Link href="./Documentation"><Link className="white" to="/Documentation">DOCUMENTATION</Link></Nav.Link>

                
                <NavDropdown title="PROFILE" id="basic-nav-dropdown">
                <Login/>
                </NavDropdown>
                

      
              </Nav>
               
              
            </Navbar.Collapse>
          </Navbar>
          
        
         );
    }
}
 
export default Navbarr;