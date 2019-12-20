import React from 'react';
import './App.css';
import App from './App';
import Bootstrap from './Bootstrap';
import Css from './Css';
import Reactjs from './Reactjs';
import Html from './Html';
import {Link} from 'react-router-dom';
import Kurs2 from './Kurs2.png';
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
                                <div className="tabovi"><img src={Kurs2}/></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Bootstrap'>
                <div className="tabovi"><h3>Bootstrap</h3></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Css'>
                <div className="tabovi"><h3>Css</h3></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Reactjs'>
                <div className="tabovi"><h3>React.js</h3></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Html'>
                <div className="tabovi"><h3>Html</h3></div>
                </Link>
            </nav>
         );
    }
}
 
export default Navbar;