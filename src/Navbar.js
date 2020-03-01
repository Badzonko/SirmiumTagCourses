import React from 'react';
import './App.css';
import App from './App';
import Bootstrap from './Bootstrap';
import Css from './Css';
import Reactjs from './Reactjs';
import Html from './Html';
import {Link} from 'react-router-dom';
import dev from './dev.png';
import Quotes from './Pocetna';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className='NavigacioniBar'>
                <Link style={{ textDecoration: 'none', }} to="/Pocetna">
                                <div className="tabovi"><img className="logotip" src={dev}/></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Bootstrap'>
                <div className="tabovi"><span>Bootstrap</span></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Css'>
                <div className="tabovi"><span>Css</span></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Reactjs'>
                <div className="tabovi"><span>React.js</span></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Html'>
                <div className="tabovi"><span>Html</span></div>
                </Link>
            </nav>
         );
    }
}
 
export default Navbar;