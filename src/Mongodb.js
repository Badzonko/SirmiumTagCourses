import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Mongodb extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/GtD93tVZDX4',
        'https://youtu.be/0ws3oIyqieY',
        'https://youtu.be/NcW07q9FiAc',
        'https://youtu.be/9RqMh282OGc',
        'https://youtu.be/TCT5ulUzfR8',
        'https://youtu.be/FH4XRY6h8Fg',
        'https://youtu.be/1avpbijGmBw',
        'https://youtu.be/0x7myKJqI44',
        'https://youtu.be/-rcvh5aMyW8',
        'https://youtu.be/dO3sWwJUv04',
        'https://youtu.be/P0iQBL81qrw',
        'https://youtu.be/vj_YkHxzF2s',
        'https://youtu.be/J_L6r_v3hss',
        'https://youtu.be/ilcwtzi92Cs',
        'https://youtu.be/waN5-o1quks',
        'https://youtu.be/WH5GgHaEy7E',
        'https://youtu.be/2Cd8rznMOho',
        'https://youtu.be/_X9UPThjJvg',
        'https://youtu.be/DX15WbKidXY',
        'https://youtu.be/FwMwO8pXfq0',
        
        
        

      ]
      this.title = [
        '1: Introduction to MongoDB + Installing MongoDB',
        '2: Install MongoChef (now Studio 3T) (MongoDB GUI Tool)',
        '3: Create Database and Drop Database',
        '4: Create Collection and Drop Collection',
        '5: Insert Documents',
        '6: Query Document',
        '7: Query Document - AND OR Conditions',
        "8: MongoDB Update Document",
        '9: MongoDB Delete Document',
        '10: MongoDB Projection',
        '11: Using Sort, Skip, and Limit in MongoDB',
        '12: MongoDB Indexing',
        '13: MongoDB Aggregation',
        '14: MongoDB BackUp and Restore',
        '15: MongoDB Tutorial In 90 Minutes',
        '16: How To Install MongoDB on Ubuntu 16.04 LTS',
        '17: Install and Setup MongoDB plugin on IntelliJ IDEA IDE',
        '18: Cmder : A Better Command Prompt Tool for Windows',
        '19: How to install MongoDB on Mac OS X',
        "20: How to Install MongoDB on Windows 10",

        
        
        

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
        <button disabled={this.state.currentIndex === 19} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
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
 
export default Mongodb;