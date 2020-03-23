import React, { Component } from 'react'
import './App.css';
import AdSense from 'react-adsense';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';


class Graphql extends React.Component {
    constructor(){
      super()
      this.videos = [
        'https://youtu.be/Y0lDGjwRYKw',
        'https://youtu.be/bUD6ERbcXrQ',
        'https://youtu.be/g3IBx2RFl38',
        'https://youtu.be/bX2e4FILf78',
        'https://youtu.be/ZOHIZXRfvVY',
        'https://youtu.be/pH02J0U5OBI',
        'https://youtu.be/A8vtRvz-lK0',
        'https://youtu.be/ALqNbTik44o',
        'https://youtu.be/NWod5SFW13s',
        'https://youtu.be/5RGEODLhjhY',
        'https://youtu.be/TkT2aLtX2tc',
        'https://youtu.be/Pe1MgqWFyYE',
        'https://youtu.be/-aQ_Io9m1GQ',
        'https://youtu.be/jflhB57loAU',
        'https://youtu.be/hjctbVNve-A',
        'https://youtu.be/3NdgP6AVYYs',
        'https://youtu.be/sRVPlCCzkww',
        'https://youtu.be/DU77lbBPfBI',
        'https://youtu.be/H8oRezNak2s',
        'https://youtu.be/5Tir_Mp8ccA',
        'https://youtu.be/qU9RiJ_9y_c',
        'https://youtu.be/-IiHDLXipaI',
        'https://youtu.be/TRK_e3FV2IM',
        'https://youtu.be/eEwk7in5uIc',
        'https://youtu.be/8Pyr82Qbjow',
        'https://youtu.be/uyrUI1tgayk',
        'https://youtu.be/0ew4inhopNM',
        'https://youtu.be/M2SWd03Nz44',
        'https://youtu.be/Lx1nxFe1c_Q',
        'https://youtu.be/HWR9nIIgDbg',
        'https://youtu.be/rHw0_A4SJxo',
        'https://youtu.be/Rvx1HLMK1-U',
        'https://youtu.be/07uyIZMqgJM',
        'https://youtu.be/PLZNt5Ov36I',
        'https://youtu.be/v-7a9N-mXkU',
        'https://youtu.be/i_wvap3eiRY',

        

      ]
      this.title = [
        '1: Introduction to GraphQL',
        '2: A Birdseye View of GraphQL',
        '3: Project (stack) Overview',
        '4: Making Queries (front-end preview)',
        '5: Express App Setup',
        '6: Setting up GraphQL',
        '7: GraphQL Schema',
        "8: Root Query",
        '9: The Resolve Function',
        '10: Testing Queries in Graphiql',
        '11: GraphQL ID Type',
        '12: Author Type',
        '13: Type Relations',
        '14: GraphQL Lists',
        '15: More on Root Queries',
        '16: Connecting to mLab',
        '17: Mongoose Models',
        '18: Mutations',
        '19: More on Mutations',
        "20: Updating the Resolve Functions",
        '21: GraphQL NonNull',
        '22: Adding a Front-end',
        '23: Create React App',
        '24: Book List Component',
        '25: Apollo Client Setup',
        '26: Making Queries from React',
        '27: Rendering Data in a Component',
        '28: Add Book Component',
        '29: External Query File',
        '30: Updating Component State',
        '31: Composing Queries',
        "32: Query variables",
        '33: Re-fetching Queries',
        '34: Book Details Component',
        '35: Making a Single Query',
        '36: Styling the App',
        
        

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
        <button disabled={this.state.currentIndex === 35} class = "next" onClick={this.goToNextSlide}>Next lesson</button>
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
 
export default Graphql;