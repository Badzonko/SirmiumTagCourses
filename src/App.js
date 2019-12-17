import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import Course from './Course';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super()
    
  }
 
  
  render(){
    return(
      <Router>
      <div className='wrapper'>
        <Navbar/>
      <Switch>
          <Route path="/Course" component={Course}/>
      </Switch>
      </div>
      </Router>

    );
}

}

export default App;
