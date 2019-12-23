import React, { Component } from 'react'
import './App.css';
import Wallpaper from './Wallpaper.png';

class Html extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div  >
            <img className="bck" src={Wallpaper}/>
            <div className="space">

         </div>
        </div>  );
    }
}
 
export default Html;