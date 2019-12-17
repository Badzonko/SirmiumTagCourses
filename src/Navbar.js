import React from 'react';
import './App.css';
import Course from './Course';
import {Link} from 'react-router-dom';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='NavigacioniBar'>
                <div className="tabovi"><img src="data:image/png;base64,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"/></div>
                <Link to='/Course'>
                <div className="tabovi"><h3>Course 2</h3></div>
                </Link>
                <div className="tabovi"><h3>Course 3</h3></div>
                <div className="tabovi"><h3>Course 4</h3></div>
                <div className="tabovi"><h3>Course 5</h3></div>
            </div>
         );
    }
}
 
export default Navbar;