import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import Course from './Course';
import Course1 from './Course1';
import Course2 from './Course2';
import Course3 from './Course3';
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
          <Route path="Course1" component={Course1}/>
          <Route path="Course2" component={Course2}/>
          <Route path="Course3" component={Course3}/>
      </Switch>
      </div>
      </Router>

    );
}

}

export default App;
