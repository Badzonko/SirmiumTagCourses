import React from 'react';
import './App.css';
import App from './App';
import Course from './Course';
import Course1 from './Course1';
import Course2 from './Course2';
import Course3 from './Course3';
import {Link} from 'react-router-dom';
import Kurs2 from './Kurs2.png';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className='NavigacioniBar'>
                <Link style={{ textDecoration: 'none', }} to="/App">
                                <div className="tabovi"><img src={Kurs2}/></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Course'>
                <div className="tabovi"><h3>Bootstrap</h3></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Course1'>
                <div className="tabovi"><h3>Course 3</h3></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Course2'>
                <div className="tabovi"><h3>Course 4</h3></div>
                </Link>
                <Link className="links" style={{ textDecoration: 'none' }} to='/Course3'>
                <div className="tabovi"><h3>Course 5</h3></div>
                </Link>
            </nav>
         );
    }
}
 
export default Navbar;