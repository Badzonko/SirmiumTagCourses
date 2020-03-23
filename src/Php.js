import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Php extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/oJbfyzaA2QA',
        'https://youtu.be/6tCWiexc05U',
        'https://youtu.be/0Dp7Lt7iT3A',
        'https://youtu.be/9p9siksrSoU',
        'https://youtu.be/5ggUfM6mvSk',
        'https://youtu.be/ApP1rgZ9OlY',
        'https://youtu.be/x6UDhaHVaeY',
        'https://youtu.be/EHfr-edosmA',
        'https://youtu.be/faknU12cs7Y',
        'https://youtu.be/oVJ0anq8yLA',
        'https://youtu.be/cIFUH3Qnd6s',
        'https://youtu.be/z32BOHVWplU',
        'https://youtu.be/NUq0ZT54zvw',
        'https://youtu.be/pfY9LwcsH3A',
        'https://youtu.be/tJ5eUgOxITE',
        'https://youtu.be/W4rSS4-LdIE',
        'https://youtu.be/RzMjwICWKr4',
        'https://youtu.be/nU0KDn-vLT4',
        'https://youtu.be/sLLZU38Okgo',
        'https://youtu.be/FhbP6bF21Cs',
        'https://youtu.be/IYlDJ2K3MGk',
        'https://youtu.be/9t7AH7lOlL0',
        'https://youtu.be/cIFUH3Qnd6s',
        'https://youtu.be/z32BOHVWplU',
        

      ]
      this.title = [
        '1: Series Introduction',
        '2: PHP7 & Xammp Installation',
        '3: Variables, Constants & Data Types',
        '4: Arrays',
        '5: Loops',
        '6: Functions',
        '7: Conditionals & Comparison',
        "8: Dates & Timestamps",
        '9: Include & Require',
        '10: $_SERVER Superglobal',
        '11: Get & Post Tutorial',
        '12: Common String Functions',
        '13: Ternary & Shorthand Syntax',
        '14: Filters & Validation',
        '15: PHP Contact Form',
        '16: Sessions Tutorial',
        '17: Cookies Tutorial',
        '18: PHP & AJAX',
        '19: File System Functions',
        "20: OOP",
        '21: IFetching Data With MySQLi',
        '22: MySQLi Insert, Update & Delete',
        
        
        

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
        <button disabled={this.state.currentIndex === 21} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
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
 
export default Php;