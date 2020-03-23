import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Csssrb extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/lczU6gnOqcs',
        'https://youtu.be/mCCVzFZ8YIs',
        'https://youtu.be/Tvx20cmZPdE',
        'https://youtu.be/ehwIVhNTSuE',
        'https://youtu.be/3rgKBVhhXeY',
        'https://youtu.be/_c68q_aGkdM',
        'https://youtu.be/NtPXAL7Dq14',
        'https://youtu.be/Sm1vTUlq0wI',
        'https://youtu.be/VAbzOHp1IdE',
        'https://youtu.be/RnFy8wmCW_k',
        'https://youtu.be/SlZ5Em0Igx0',
        'https://youtu.be/adO3DeW5qIM',
        'https://youtu.be/EpZhDb7NsHA',
        'https://youtu.be/pE5VkWRCSIs',
        'https://youtu.be/F3OysydHmts',
        'https://youtu.be/rVWEVXH5peQ',
        'https://youtu.be/tQG-TiyshGs',
        'https://youtu.be/c-fS1K4fqMs',
        'https://youtu.be/BMoTE8NGP1U',
        'https://youtu.be/-XpMO9818cE',
        'https://youtu.be/GsnxlK-f9x8',
        'https://youtu.be/ls8-plTf8JM',
        

      ]
      this.title = [
        '1: Uvod',
        '2: Id i Class',
        '3: Body selektor',
        '4: Stilizovanje teksta',
        '5: Font',
        '6: Linkovi',
        '7: Liste',
        '8: Tabele',
        '9: Pozicioniranje',
        '10: Pseudo klase',
        '11: Ribbons ',
        '12: Obavijanje slike ',
        '13: Vise o selektorima ',
        '14: Border radius ',
        '15: Fixed pozicioniranje ',
        '16: Opacity ',
        '17: RGBA ',
        '18: Kolone ',
        '19: Transformacije ',
        '20: Tranzicija ',
        '21: Gradient ',
        '22: Krug ',
        

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
 
export default Csssrb;