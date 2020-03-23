import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Cssgrid extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/T-slCsOrLcc',
        'https://youtu.be/ADDvQlerEx4',
        'https://youtu.be/Z3BZMd4YzVw',
        'https://youtu.be/yznVkCuohGg',
        'https://youtu.be/8_153Zz4YI8',
        'https://youtu.be/yAO5hsNuGZA',
        'https://youtu.be/6UK7ftaqX9U',
        'https://youtu.be/zgwEfAu6BpU',
        'https://youtu.be/MgeZankbkIs',
        'https://youtu.be/9Ji-02JsV0U',
        'https://youtu.be/3e9vz3LiGVw',
        'https://youtu.be/asfqwwrXis4',
        'https://youtu.be/PuhObGdKSDs',
        'https://youtu.be/0s97B824Hec',
        'https://youtu.be/mQ5r8u1bT50',
        'https://youtu.be/xMsckmmd5Dw',
        'https://youtu.be/nxyk6yKD56c',
        'https://youtu.be/rBoveH7tdJU',
        'https://youtu.be/8Nq3GSCtAto',
        'https://youtu.be/OkCnhz__aFM',
        'https://youtu.be/HYji_V2aYa0',
        'https://youtu.be/4h2AOMiQerM',
        'https://youtu.be/FFwgFpyssjo',
        'https://youtu.be/6dzzVGXVflI',
        'https://youtu.be/z9p4ctpvmTs',
        

      ]
      this.title = [
        '1: Welcome',
        '2: Starter Files and Tooling Setup',
        '3: Fundamentals',
        '4: Dev Tools',
        '5: Implicit vs Explicit Tracks',
        '6: grid-auto-flow Explained',
        '7: Sizing tracks in CSS Grid',
        '8: The repeat() function',
        '9: Sizing Grid Items',
        '10: Placing Grid Items ',
        '11: Spanning and Placing Cardio ',
        '12: auto-fit and auto-fill ',
        '13: Using minmax() for Responsive Grids ',
        '14: Grid Template Areas ',
        '15: Naming Lines in CSS Grid ',
        '16: grid-auto-flow dense Block Fitting ',
        '17: Alignment + Centering ',
        '18: Re-ordering Grid Items ',
        '19: Nesting Grid with Album Layout Exercise ',
        '20: Image Gallery Exercise ',
        '21: Flexbox vs CSS Grid ',
        '22: Re-creating Codepen Exercise ',
        '23: Bootstrappy Grid with CSS Variables Exercise ',
        '24: Responisve Website Exercise ',
        '25: Full Bleed Blog Layout Exercise ',

        

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
        <button disabled={this.state.currentIndex === 24} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
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
 
export default Cssgrid;