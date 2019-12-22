import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import Bootstrap from './Bootstrap';
import Css from './Css';
import Reactjs from './Reactjs';
import Html from './Html';
import Navbar from './Navbar';
import Footer from './Footer';
import Pocetna from './Pocetna';

import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super()
    
  }
 
  
  render(){
    return(
      
      <div className="Document">
<Router>
      <div className='wrapper'>
        <Navbar/>
      <Switch>
        <Route path="/" component={Pocetna}/>
          <Route path="/Bootstrap" component={Bootstrap}/>
          <Route path="/Css" component={Css}/>
          <Route path="/Reactjs" component={Reactjs}/>
          <Route path="/Html" component={Html}/>
      </Switch>
      </div>
      </Router>
      
      <Footer/>

      </div>

    );
}

}

export default App;
