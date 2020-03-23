import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Cssflexbox extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/Y8zMYaD1bz0',
        'https://youtu.be/ux4h6pejCSM',
        'https://youtu.be/yPK8cwBEOmg',
        'https://youtu.be/tSdq8amjMso',
        'https://youtu.be/rlZ-fC5eWWk',
        'https://youtu.be/j5RxNRFWMwo',
        'https://youtu.be/2plKBskaKfY',
        'https://youtu.be/8Ls7maJvjwQ',
        'https://youtu.be/8vcSr1yVvXQ',
        'https://youtu.be/WY2itpeUK7Q',
        'https://youtu.be/B_E6Kh9YkFM',
        'https://youtu.be/FPl-7mTW20U',
        
        

      ]
      this.title = [
        '1: Introduction',
        '2: Flex Containers',
        '3: Flex Grow',
        '4: Flex Shrink',
        '5: Flex Wrap',
        '6: Flex Basis',
        '7: Creating a Menu with Flexbox',
        "8: Creating Nested Menu's with Flexbox",
        '9: Axis',
        '10: Align Items on the Cross Axis',
        '11: Grid vs Stacked Layout Example',
        '12: Element Order',
        
        

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
 
export default Cssflexbox;