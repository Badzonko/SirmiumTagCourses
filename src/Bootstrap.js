import ReactPlayer from 'react-player';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AdSense from 'react-adsense';
import Iframe from 'react-iframe';




class Bootstrap extends React.Component {
  constructor(){
    super()
    this.videos = [
      'https://www.youtube.com/watch?v=QAgrHLtG1Yk&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv',
      'https://www.youtube.com/watch?v=N77ZsKq4esI&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=2',
      'https://www.youtube.com/watch?v=4G4aBvRB3B4&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=3',
      'https://www.youtube.com/watch?v=E7R23erzuGg&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=4',
      'https://www.youtube.com/watch?v=CGpWqSIjCbQ&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=5',
      'https://www.youtube.com/watch?v=rvlvpX-rbgc&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=6',
      'https://www.youtube.com/watch?v=9Lpxzhzjy9w&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=7',
      'https://www.youtube.com/watch?v=WWKuaUtgNBI&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=8',
      'https://www.youtube.com/watch?v=Izc-0yF4EA0&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=9',
      'https://www.youtube.com/watch?v=YRLOf5V1eHo&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=10',
      'https://www.youtube.com/watch?v=g3iipbujyDg&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=11',
      'https://www.youtube.com/watch?v=AeCFqEz5Whs&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv&index=12',
    ]
    this.title = [
      'Bootstrap 4 Tutorial #1 - Introduction',
      'Bootstrap 4 Tutorial #2 - Installing Bootstrap 4',
      'Bootstrap 4 Tutorial #3 - Bootstrap Reboot',
      'Bootstrap 4 Tutorial #4 - Containers',
      'Bootstrap 4 Tutorial #5 - Grid Basics',
      'Bootstrap 4 Tutorial #6 - Flex Grid',
      'Bootstrap 4 Tutorial #7 - Jumbotrons',
      'Bootstrap 4 Tutorial #8 - Utilities and Typography',
      'Bootstrap 4 Tutorial #9 - Cards',
      'Bootstrap 4 Tutorial #10 - Bootstrap Navs',
      'Bootstrap 4 Tutorial #11 - Responsive Navbars',
      'Bootstrap 4 Tutorial #12 - Tooltips',
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

export default Bootstrap;
