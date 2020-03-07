import ReactPlayer from 'react-player';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AdSense from 'react-adsense';
import Iframe from 'react-iframe';




class Bootstrapsrb extends React.Component {
  constructor(){
    super()
    this.videos = [
      'https://youtu.be/hjhzWy7elXk',
      'https://youtu.be/k_1fMOC0X4Y',
      'https://youtu.be/jwBoBMMAAEE',
      'https://youtu.be/xH8322zQW_0',
      'https://youtu.be/w5aLTVCdUbE',
      'https://youtu.be/yhCpGJKpXDI',
      'https://youtu.be/_LE3ez099z0',
      'https://youtu.be/QXIWXiN3RTU',
      'https://youtu.be/tznuRVLeIvs',
      'https://youtu.be/ojiiVt5YT48',
      'https://youtu.be/oADHz_4_EFU',
      'https://youtu.be/cGxqyb8NzjY',
      'https://youtu.be/_yvdshhNrto',
      'https://youtu.be/m593bMg4tgk',
      'https://youtu.be/Zxea8_NIh0M',
      'https://youtu.be/MS7K3oZRN9g',
      'https://youtu.be/BPq2olZAKXo',
      'https://youtu.be/wzBdYv9ic1E',
      'https://youtu.be/k438-mkvqHs',
      'https://youtu.be/GgJfLdbHJCM',
      'https://youtu.be/xwq0VSWgodc',
      'https://youtu.be/FQDBuTJf91c',
      'https://youtu.be/FxbjDZn-HMs',
      'https://youtu.be/MwOAZkk9TAc',
      'https://youtu.be/bulw0bGD3yI',
      'https://youtu.be/wIF0l-hMQc8',
    ]
    this.title = [
      'Bootstrap 3 za početnike - Uvod',
      'Bootstrap 3 za početnike - Priprema',
      'Bootstrap 3 za početnike - Grid Sustav',
      'Bootstrap 3 za početnike - Osnovni CSS',
      'Bootstrap 3 za početnike - CSS Komponente',
      'Bootstrap 3 za početnike - Javascript',
      'Bootstrap 3 za početnike - Web stranica 1.dio - Navigacija i Carousel',
      'Bootstrap 3 za početnike - Web stranica 2.dio - Featured Area',
      'Bootstrap 3 za početnike - Web stranica 3.dio - Poruka i Članci Bloga',
      'Bootstrap 3 za početnike - Web stranica 4.dio - Footer i FontAwesome',
      'Bootstrap 3 za početnike - Web stranica 5.dio - Dodatni CSS',
      'Bootstrap 3 za početnike - Web stranica 6.dio - Korištenje Bootswatch-a',
      'Bootstrap 3 za početnike - LESS i Prepros',
      'Bootstrap 3 za početnike - Mijenjanje weba preko LESS-a',
      'Bootstrap 3 za početnike - Projekt 2 - Priprema',
      'Bootstrap 3 za početnike - Projekt 2 - Navigacija',
      'Bootstrap 3 za početnike - Projekt 2 - Intro',
      'Bootstrap 3 za početnike - Projekt 2 - About',
      'Bootstrap 3 za početnike - Projekt 2 - Portfolio',
      'Bootstrap 3 za početnike - Projekt 2 - Testimonials',
      'Bootstrap 3 za početnike - Projekt 2 - Contact',
      'Bootstrap 3 za početnike - Projekt 2 - Detalji 1.dio',
      'Bootstrap 3 za početnike - Projekt 2 - Detalji 2.dio',
      'Bootstrap 3 za početnike - Projekt 2 - Detalji 3.dio',
      'Bootstrap 3 za početnike - Projekt 2 - Detalji 4.dio',
      'Bootstrap 3 za početnike - Projekt 2 - Detalji 5.dio i kraj',
      
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
          <button disabled={this.state.currentIndex === 25} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
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

export default Bootstrapsrb;
