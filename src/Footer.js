import React, { Component } from 'react'
import './App.css';
import gmail from './gmail.png';
import dev from './dev.png'
import github from './github.png';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <div>
            <footer>
<div className="footerTabovi"><a target="_blank"href="mailto:badzo997@gmail.com"><img className="footerIkonice" src={gmail}/></a></div>
<div className="footerTabovi"><a target="_blank" href="https://www.badzodev.com/"><img className="footerIkonice"  src={dev} /></a></div>
<div className="footerTabovi"><a target="_blank" href="https://github.com/SirmiumTag"><img className="footerIkonice" src={github} /></a></div>
            </footer>
            </div>
         );
    }
}
 
export default Footer;