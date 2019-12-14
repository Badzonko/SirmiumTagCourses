import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';

class App extends React.Component {
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
  }
  
  goToNextSlide ()  {
    const {currentIndex} = this.state;
    const newPointer = currentIndex === this.videos.length - 1 ? 0 : currentIndex + 1;
    this.setState({currentIndex: newPointer});
  }
  
  render(){
    return(
        <div className="home">
          <ReactPlayer url={this.videos[this.state.currentIndex]} controls={true}  />
          <br/>
          <button class = "prev" onClick={this.goToPrevSlide}>Previous lesson</button>
          <button class = "next" onClick={this.goToNextSlide}>Next lesson</button>
          <br/>
          Index {this.state.currentIndex}
        </div>

    );
}

}

export default App;
