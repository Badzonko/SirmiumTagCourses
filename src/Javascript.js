import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Javascript extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/ItYye9h_RXg',
        'https://youtu.be/ns_L4kpxY8c',
        'https://youtu.be/ZouJQRxgem0',
        'https://youtu.be/AD5hxsFJc4o',
        'https://youtu.be/sjmyfwESv1g',
        'https://youtu.be/FdlBtidhAnE',
        'https://youtu.be/9aGIAL16DL4',
        'https://youtu.be/O9by2KcR2v4',
        'https://youtu.be/FZzyij43A54',
        'https://youtu.be/uli67N4Z03Y',
        'https://youtu.be/N4V0FZASK60',
        'https://youtu.be/r4vyq8vvVY0',
        'https://youtu.be/aM_8WRaBljU',
        'https://youtu.be/Tvu1FqhOUrQ',
        'https://youtu.be/qQEYAOPWDzk',
        'https://youtu.be/hTU1OSbnov8',
        'https://youtu.be/aK_nuUAdr8E',
        'https://youtu.be/ppMlvGMT2qE',
        'https://youtu.be/yytscwxx1pk',
        'https://youtu.be/urol_SD1wz4',
        'https://youtu.be/4uVwGw317QM',
        'https://youtu.be/e1yBONtbTuA',
        'https://youtu.be/M6sA8fvMCuA',
        'https://youtu.be/eYYYxrDkZbQ',
        'https://youtu.be/o9RozigP19c',
        'https://youtu.be/gTfjA95ONSQ',
        'https://youtu.be/t3CWlfZUvL8',
        'https://youtu.be/Qdj3AVBm6Ug',
        'https://youtu.be/tn96BAO25B0',
        'https://youtu.be/fhtJ5dimNQ4',
        'https://youtu.be/2vc9AK-zgXM',
        'https://youtu.be/_2FNww3OwTE',
        'https://youtu.be/mlxi1WUSO_8',
        'https://youtu.be/ZIofG_rpm7A',
        'https://youtu.be/jqU3uaRgQyQ',
        'https://youtu.be/dkLpo4shS6c',
        
        

      ]
      this.title = [
        '1: How to Get Started With JavaScript',
        '2: Which Tools to Use When Developing JavaScript',
        '3: How to Install Extensions For JavaScript Development',
        '4: How to Include JavaScript in Our HTML',
        '5: How to Use the Developer Tool for JavaScript Development',
        '6: Rules for Writing JavaScript Code',
        '7: How to Create Variables in JavaScript',
        "8: Different Data Types in JavaScript",
        '9: Different Types of Operators in JavaScript',
        '10: String Operator in JavaScript Explained',
        '11: How to Create Conditions in JavaScript',
        '12: How to Create Arrays in JavaScript',
        '13: What are JavaScript Properties and Methods',
        '14: How to Create JavaScript Functions',
        '15: Exercises in JavaScript - Calculator',
        '16: JavaScript Scopes',
        '17: Let and Const Variables',
        '18: Hoisting in JavaScript Explained',
        '19: How to Create a Toggle Menu',
        "20: How to Create a Toggle Menu",
        '21: What Are Objects in JavaScript',
        '22: How to Create Object Constructors',
        '23: How To Create A Game Using JavaScript',
        '24: How To Create A Game Using JavaScript',
        '25: How To Create A Game Using JavaScript',
        '26: How To Create A Random Number Using JavaScript',
        '27: What Is The Website DOM In JavaScript',
        '28: Select HTML Elements Using JavaScript',
        '29: How To Change Elements Using JavaScript',
        '30: Create New Content Using JavaScript',
        '31: How To Change CSS Using JavaScript',
        "32: JavaScript Exercise For Beginners",
        '33: What Are JavaScript Events',
        '34: How To Prevent Default Events In JavaScript',
        '35: What Are Event Listeners In JavaScript',
        'Gallery Using HTML, CSS, And JavaScript',
        
        

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
        <button disabled={this.state.currentIndex === 35} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
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
 
export default Javascript;