import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';


class Css extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://www.youtube.com/watch?v=qKoajPPWpmo',
        'https://www.youtube.com/watch?v=UO0ZPL8yMpU',
        'https://www.youtube.com/watch?v=JT0gyzbpD2U',
        'https://www.youtube.com/watch?v=hCoMjvtsyPA',
        'https://www.youtube.com/watch?v=Bj2ZCfDPP2A',
        'https://www.youtube.com/watch?v=u4dLB9NP3IA',
        'https://www.youtube.com/watch?v=KULYFC545qY',
        'https://www.youtube.com/watch?v=bWDtPnNkutw',
        'https://www.youtube.com/watch?v=DFgXjen2JS0',
        'https://www.youtube.com/watch?v=QT_lIti-8Zk',
        'https://www.youtube.com/watch?v=kp9CWRRLjAM',
        'https://www.youtube.com/watch?v=XtgrFq5_QQM',

      ]
      this.title = [
        'CSS Tutorial for Beginners - 01 - Introduction to CSS',
        'CSS Tutorial for Beginners - 02 - Changing font type, color, and size',
        'CSS Tutorial for Beginners - 03 - Multiple selectors and writing rule for more than one element',
        'CSS Tutorial for Beginners - 04 - Add a line to header and border property',
        'CSS Tutorial for Beginners - 05 - Inheritance and overriding',
        'CSS Tutorial for Beginners - 06 - Using Classes in CSS',
        'CSS Tutorial for Beginners - 07 - More on Classes in CSS',
        'CSS Tutorial for Beginners - 08 - Font Family',
        'CSS Tutorial for Beginners - 09 - The Font Weight Property',
        'CSS Tutorial for Beginners - 10 - Using an external style sheet',
        'CSS Tutorial for Beginners - 11 - Text-decoration property',
        'CSS Tutorial for Beginners - 12 - Italic fonts',

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
            
            
            <br/>
           
  
          </div>
  
      );
  }
  
  }
 
export default Css;