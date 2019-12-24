import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';

import ReactPlayer from 'react-player';


class Reactjs extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://www.youtube.com/watch?v=-AbaV3nrw6E',
        'https://www.youtube.com/watch?v=2NLgQMs2hOw',
        'https://www.youtube.com/watch?v=OzqR10jG1pg',
        'https://www.youtube.com/watch?v=z14df09bWfc',
        'https://www.youtube.com/watch?v=i1PLMgtG5Qo',
        'https://www.youtube.com/watch?v=bH7UXQTCfm4',
        'https://www.youtube.com/watch?v=5tT8FXeE1Y8',
        'https://www.youtube.com/watch?v=g6a5yC_v70c',
        'https://www.youtube.com/watch?v=TWzA2Ir1ZJc',
        'https://www.youtube.com/watch?v=bBiITqaO08E',
        'https://www.youtube.com/watch?v=GBoJOVNzc_0',
        'https://www.youtube.com/watch?v=szmS_M-BMls',
        'https://www.youtube.com/watch?v=OKRu7i49X54',
        

      ]
      this.title = [
        'React JS Tutorials for Beginners - 1 - Getting Started',
        'React JS Tutorials for Beginners - 2 - Simple Demo',
        'React JS Tutorials for Beginners - 3 - Components',
        'React JS Tutorials for Beginners - 4 - Rendering Multiple Components',
        'React JS Tutorials for Beginners - 5 - Props',
        'React JS Tutorials for Beginners - 6 - Event Handling',
        'React JS Tutorials for Beginners - 7 - State',
        'React JS Tutorials for Beginners - 8 - Adding State to Components',
        'React JS Tutorials for Beginners - 9 - refs',
        'React JS Tutorials for Beginners - 10 - Multiple Child Components',
        'React JS Tutorials for Beginners - 11 - Updating State and Removing Components',
        'React JS Tutorials for Beginners - 12 - Passing Function as Props',
        'React JS Tutorials for Beginners - 13 - Creating New Components',
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
            <h2 className="naslov">{this.title[this.state.currentIndex]}</h2>
            <div className="player">
            <div><AdSense.Google
  client='ca-pub-3668151765421542'
  slot='7806394673'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
  layoutKey='-gw-1+2a-9x+5c'
/></div>
            <ReactPlayer width='100%'
             url={this.videos[this.state.currentIndex]} controls={true}  />
            <div ><AdSense.Google
  client='ca-pub-3668151765421542'
  slot='7806394673'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
  layoutKey='-gw-1+2a-9x+5c'
/></div>
            </div>
            <br/>
            <div className="Buttons">
            <button className="invisible"></button>
            <button  disabled={this.state.currentIndex === 0} class = "prev "  onClick={this.goToPrevSlide}>Previous lesson</button>
            <button disabled={this.state.currentIndex === 12} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
            <button className="invisible"></button>
  
            </div>
            
            
            <br/>
           
  
          </div>
  
      );
  }
  
  }
 
export default Reactjs;