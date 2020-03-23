import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Html extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://www.youtube.com/watch?v=Y1BlT4_c_SU&t=36s',
        'https://www.youtube.com/watch?v=cZCq8lQ-vZ0',
        'https://www.youtube.com/watch?v=IJWcX2EDAKg',
        'https://www.youtube.com/watch?v=MnaKa7igX7k',
        'https://www.youtube.com/watch?v=mNRzWMH5xK0',
        'https://www.youtube.com/watch?v=XxZPrn1VFTc',
        'https://www.youtube.com/watch?v=UWdepvkLE8U',
        'https://www.youtube.com/watch?v=OwC4xNWihoM',
        'https://www.youtube.com/watch?v=g6xsNHnAmlE',
        'https://www.youtube.com/watch?v=f8pAb3IuECk',
        'https://www.youtube.com/watch?v=HeQvQEiGMKk',
        'https://www.youtube.com/watch?v=xkF-cKpzREU',
        'https://www.youtube.com/watch?v=-XQlr727A8w',
        'https://www.youtube.com/watch?v=9UNmumTYuq8',
        'https://www.youtube.com/watch?v=Tc4IsPFB01E',
        'https://www.youtube.com/watch?v=Gd0RBdFRvF0',
        'https://www.youtube.com/watch?v=xuA8kt2xnv8',


      ]
      this.title = [
        '1: HTML Introduction',
        '2: What is HTML?',
        '3: HTML Syntax & Structure',
        '4: Your First Web Page',
        '5: Head and Body Tag',
        '6: Headings and Text',
        '7: Heading Structure',
        '8: Default Browser Styles',
        '9: The img Tag',
        '10: HTML Links',
        '11: HTML Lists',
        '12: HR and BR Tags',
        '13: The div Tag',
        '14: ID\'s and Classes',
        '15: Adding CSS to HTML',
        '16: Adding JavaScript to HTML',
        '17: What To Do Next',

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
        <button disabled={this.state.currentIndex === 16} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
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
 
export default Html;