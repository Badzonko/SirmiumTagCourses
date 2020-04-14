import React,{Component} from 'react';
import Login from './login';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

<div className="dashWrapper">
{this.state.isLogedIn ? <Login/> : <unknownUser/>}

</div>

         );
    }
}
 
export default Dashboard;