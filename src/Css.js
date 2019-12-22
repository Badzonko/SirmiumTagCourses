import React, { Component } from 'react'
import './App.css';
import Wallpaper from './Wallpaper.png';

class Css extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div  >
            <img className="bck" src={Wallpaper}/>
        </div>  );
    }
}
 
export default Css;