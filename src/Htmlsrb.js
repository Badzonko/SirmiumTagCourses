import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Htmlsrb extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/4irK4a6Lqdo',
        'https://youtu.be/bP4EEL43kFU',
        'https://youtu.be/G0guOeeWE3E',
        'https://youtu.be/wceprb2Vby8',
        'https://youtu.be/kVidtGT9XcQ',
        'https://youtu.be/PeCzog9M8aI',
        'https://youtu.be/s3rsmgKeqb4',
        'https://youtu.be/a8uqbIGArXY',
        'https://youtu.be/oApiHa1Kw4c',
        'https://youtu.be/-uDJZ6jpsG4',
        'https://youtu.be/U15bECGb2PM',
        'https://youtu.be/wQE8uSvQAiE',
        'https://youtu.be/8NZ--ypOG-s',
        'https://youtu.be/Oho_PNA7Cqw',
        'https://youtu.be/dpgxfwhV-8c',
        'https://youtu.be/n_Pg_Z49wPM',
        'https://youtu.be/fZHeHjd1CQg',
        'https://youtu.be/uBmILj3sfl4',
        'https://youtu.be/D9Gww9l5zes',
        'https://youtu.be/uxxcx5rXeAQ',
        'https://youtu.be/wK4IMCZIrtc',
        'https://youtu.be/lwh3Qc9qPdE',
        'https://youtu.be/d2nTEDS-FlA',
        'https://youtu.be/YBZhP2Jf9_8',
        


      ]
      this.title = [
        '1: Uvod i Odabir Editora',
        '2: Snimanje Prve Stranice',
        '3: Tagovi Elementi Atributi',
        '4: UTF-8 Encoding',
        '5: Keywords & Description',
        '6: Headings - [ H1 - H6 ]',
        '7: Paragrafi',
        '8: PRE Tag',
        '9: Umetanje HTML Source-a',
        '10: Font Velicina',
        '11: Font - Boje',
        '12: Font - Tip',
        '13: Komentari',
        '14: Unordered Lista',
        '15: Ordered Lista',
        '16: Definition Lista',
        '17: Ubacivanje Slike u HTML',
        '18: Slika kao Link',
        '19: Tabele',
        '20: Forme',
        '21: Ubacivanje Youtube-a u HTML',
        '22: Eksterni CSS',
        '23: CSS Direktno na Stranici - Head CSS',
        '24: Inline CSS',
        

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
        <button disabled={this.state.currentIndex === 23} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
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
 
export default Htmlsrb;