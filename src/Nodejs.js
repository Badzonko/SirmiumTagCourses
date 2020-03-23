import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Nodejs extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/w-7RQ46RgxU',
        'https://youtu.be/1US-P13yKVs',
        'https://youtu.be/86tgU7UaJmU',
        'https://youtu.be/PY-AycMkEAg',
        'https://youtu.be/lK42xIMcA0Y',
        'https://youtu.be/xHLd36QoS4k',
        'https://youtu.be/9UaZtgB5tQI',
        'https://youtu.be/NtrnaTKqFPQ',
        'https://youtu.be/U57kU311-nE',
        'https://youtu.be/Ejgd-la6nSY',
        'https://youtu.be/qSAze9b0wrY',
        'https://youtu.be/lm86czWdrk0',
        'https://youtu.be/GlybFFMXXmQ',
        'https://youtu.be/E3tTzx0Qoj0',
        'https://youtu.be/DvlCT0N7yQI',
        'https://youtu.be/a8W90jDHSho',
        'https://youtu.be/BBOUfdUZIVo',
        'https://youtu.be/QxjVZFa1XUM',
        'https://youtu.be/_zvWeGwVkCY',
        'https://youtu.be/kQ1j0rEI7EI',
        'https://youtu.be/_eRwjuIDJ2Y',
        'https://youtu.be/4N0d8HhU5DE',
        'https://youtu.be/9TSBKO59u0Y',
        'https://youtu.be/MuMs1pLuT7I',
        'https://youtu.be/oZGmHNZv7Sc',
        'https://youtu.be/RczQp3zCPXs',
        'https://youtu.be/CdvSVkF9m_Y',
        'https://youtu.be/-lRgL9kj_h0',
        'https://youtu.be/QTAYRmMsVCI',
        'https://youtu.be/rin7gb9kdpk',
        'https://youtu.be/edOmvng5IQc',
        'https://youtu.be/nleI7IbpGhc',
        'https://youtu.be/NA21dUBfJhw',
        'https://youtu.be/IgAH0NqsJso',
        'https://youtu.be/L4OP8JGKbQU',
        'https://youtu.be/yevfxvt5r7Y',
        'https://youtu.be/yox93sB2PyQ',

        

      ]
      this.title = [
        '1: Introduction',
        '2: Installing Node JS',
        '3: The V8 Engine',
        '4: The Global Object',
        '5: Function Expressions',
        '6: Modules and require()',
        '7: Module Patterns',
        "8: The Node Event Emitter",
        '9: Reading & Writing Files (fs)',
        '10: Creating & Removing Directories',
        '11: Clients & Servers',
        '12: Creating a Server',
        '13: Streams and Buffers',
        '14: Readable Streams',
        '15: Writable Streams',
        '16: Pipes',
        '17: Serving HTML Pages',
        '18: Serving JSON Data',
        '19: Basic Routing',
        "20: The Node Package Manager",
        '21: The package.json File',
        '22: Installing Nodemon',
        '23: Introduction to Express',
        '24: Express Route Params',
        '25: Template Engines',
        '26: Template Engines (part 2)',
        '27: Partial Templates',
        '28: Middleware & Static Files',
        '29: Query Strings',
        '30: Handling POST Requests',
        '31: Making a To-do App (part 1)',
        "32: Making a To-do App (part 2)",
        '33: Making a To-do App (part 3)',
        '34: Making a To-do App (part 4)',
        '35: Intro to NoSQL / MongoDB',
        '36: Making a To-do App (part 5)',
        '37: Making a To-do App (part 6)',
        
        

      ]
      this.state = {
        currentIndex: 0,
      }
  
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
  
    }
    goToPrevSlide () {
      const {currentIndex} = this.state;
      const newPointer = currentIndex === 0 ? this.videos.length -1 : currentIndex - 1;
      this.setState({currentIndex: newPointer});
      const newPointerrr = currentIndex === 0 ? this.title.length -1 : currentIndex - 1;
      this.setState({currentIndex: newPointerrr});
    }
    
    
    goToNextSlide ()  {
      const {currentIndex} = this.state;
      const newPointer = currentIndex === this.videos.length - 1  ? 0 : currentIndex + 1;
      this.setState({currentIndex: newPointer});
      const newPointerr = currentIndex === this.title.length - 1  ? 0 : currentIndex + 1;
      this.setState({currentIndex: newPointerr});
    }
  
    
    render(){
      return(
        <div className="home">
        <div className="video">
        <h2 className="naslov">{this.title[this.state.currentIndex]}</h2>
        <div className="player">
        <div></div>
        <ReactPlayer width='100%'
         url={this.videos[this.state.currentIndex]} controls={true}  />
        <div ></div>
        </div>
        <br/>
        <div className="Buttons">
        <button className="invisible"></button>
        <button  disabled={this.state.currentIndex === 0} class = "prev "  onClick={this.goToPrevSlide}>Previous lesson</button>
        <button disabled={this.state.currentIndex === 11} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
        <button className="invisible"></button>

        </div>
        </div>
        <div className="editor">
        <Iframe id="stajl" url="https://codesandbox.io/"
      width="100%"
      height="700px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
        </div>
        
        
        
        <br/>
        

      </div>
  
  
      );
  }
  
  }
 
export default Nodejs;