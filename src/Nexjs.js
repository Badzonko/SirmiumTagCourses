import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Nexjs extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/k_0ZzvHbNBQ',
        'https://youtu.be/sB3acNJeNKE',
        'https://youtu.be/Ad2ngx6CT0M',
        'https://youtu.be/cVYQEvP-_PA',
        'https://youtu.be/xrxDk1zLKdc',
        'https://youtu.be/lAUncPg_FVw',
        'https://youtu.be/aZ16pkrMkZE',
        'https://youtu.be/rBzCvbA0Dls',
        'https://youtu.be/CrAU8xTHy4M',
        'https://youtu.be/mAOxWf36YLo',
        'https://youtu.be/m-gLLTbBEE4',
        'https://youtu.be/_GSOnHRYSS0',
        
        

      ]
      this.title = [
        '1:  Intro & Environment',
        '2: App Setup & Express Install',
        '3: Pug Template Engine',
        '4: Mongoose & Model Setup',
        '5: Save Articles to MongoDB',
        '6: Bower & Bootstrap',
        '7: Update & Delete Articles',
        "8: Messaging & Validation",
        '9:  User Registration',
        '10: User Login',
        '11: Access Control',
        '12: Deploying Our App',
        
        
        

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
 
export default Nexjs;