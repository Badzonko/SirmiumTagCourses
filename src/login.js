{/*import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
 
 
firebase.initializeApp({
  apiKey:'AIzaSyDvGDv_G6ib0uj-5aFl75301oqPkmax9aI',
  authDomain:'authentication-3e813.firebaseapp.com'
})
 
 
class Login extends Component {
 
    state = { isSignedIn:false }
    uiConfig = {
      singInFlow:'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
 
      ],
      callbacks:{
        signInSuccess: () => false
      }
    }
 
 
 
    componentDidMount = () =>{
      
 
      firebase.auth().onAuthStateChanged(user => {
        this.setState({isSignedIn:!!user})
        console.log('user',user)
      })
    }
  
  render() { 
    return ( 
      <div>
        <div className="App text-center">
      {this.state.isSignedIn ? 
      <span>
      <div>Signed in!</div> 
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
      <img src={firebase.auth().currentUser.photoURL} alt=""/><br/>
      <small className="text-left">Name: {firebase.auth().currentUser.displayName} </small><br/>
      <small className="text-left">Email: {firebase.auth().currentUser.email} </small><br/>
      <small className="text-left">Email verified: {firebase.auth().currentUser.emailVerified== true ? "Yes" : "No"} </small><br/>
      <small className="text-left">Phone number: {firebase.auth().currentUser.phoneNumber } </small><br/>

      <button className="btn btn-danger" onClick={()=>firebase.auth().signOut()}>Sign out!</button>
    
      </span>
      : 
      <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>     
      
      }
      </div>
      </div>
     );
  }
}
 
*/}



