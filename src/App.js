import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import Bootstrap from './Bootstrap';
import Bootstrapsrb from './Bootstrapsrb';
import Css from './Css';
import Csssrb from './Csssrb';
import Reactjs from './Reactjs';
import Html from './Html';
import Navbarr from './Navbar';
import Footer from './Footer';
import Pocetna from './Pocetna';
import Htmlsrb from './Htmlsrb'
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
        <Navbarr/>
      <Switch>
        <Route path="/" component={Pocetna} exact/>
        <Route path="/Pocetna" component={Pocetna}/>
          <Route path="/Bootstrap" component={Bootstrap}/>
          <Route path="/Bootstrapsrb" component={Bootstrapsrb}/>
          <Route path="/Css" component={Css}/>
          <Route path="/Csssrb" component={Csssrb}/>
          <Route path="/Htmlsrb" component={Htmlsrb}/>
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
