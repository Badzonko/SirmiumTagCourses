import ReactPlayer from 'react-player';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AdSense from 'react-adsense';



class Bootstrap extends React.Component {
  constructor(){
    super()
    this.videos = [
      'https://www.youtube.com/watch?v=zTitoHKsyJg',
      'https://www.youtube.com/watch?v=_xWljJScu70',
      'https://www.youtube.com/watch?v=zTitoHKsyJg',
      'https://www.youtube.com/watch?v=zTitoHKsyJg',
      'https://www.youtube.com/watch?v=zTitoHKsyJg',
      'https://www.youtube.com/watch?v=zTitoHKsyJg',
    ]
    this.title = [
      'Naslov 1',
      'Naslov 2',
      'Naslov 3',
      'Naslov 4',
      'Naslov 5',
      'Naslov 6',
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
          <button disabled={this.state.currentIndex === 5} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
          <button className="invisible"></button>

          </div>
          
          
          <br/>
         

        </div>

    );
}

}

export default Bootstrap;
