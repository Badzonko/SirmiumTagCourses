import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';


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
        'HTML Tutorial for Beginners 01 - HTML Introduction',
        'HTML Tutorial for Beginners 02 - What is HTML?',
        'HTML Tutorial for Beginners 03 - HTML Syntax & Structure',
        'HTML Tutorial for Beginners 04 - Your First Web Page',
        'HTML Tutorial for Beginners 05 - Head and Body Tag',
        'HTML Tutorial for Beginners 06 - Headings and Text',
        'HTML Tutorial for Beginners 07 - Heading Structure',
        'HTML Tutorial for Beginners 08 - Default Browser Styles',
        'HTML Tutorial for Beginners 09 - The img Tag',
        'HTML Tutorial for Beginners 10 - HTML Links',
        'HTML Tutorial for Beginners 11 - HTML Lists',
        'HTML Tutorial for Beginners 12 - HR and BR Tags',
        'HTML Tutorial for Beginners 13 - The div Tag',
        'HTML Tutorial for Beginners 14 - ID\'s and Classes',
        'HTML Tutorial for Beginners 15 - Adding CSS to HTML',
        'HTML Tutorial for Beginners 16 - Adding JavaScript to HTML',
        'HTML Tutorial for Beginners 17 - What To Do Next',

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
            <button disabled={this.state.currentIndex === 16} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
            <button className="invisible"></button>
  
            </div>
            
            
            <br/>
           
  
          </div>
  
      );
  }
  
  }
 
export default Html;