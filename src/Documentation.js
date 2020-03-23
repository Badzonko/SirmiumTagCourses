import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Iframe from 'react-iframe';




class Documentation extends React.Component {
  
  render(){
    return(
        <div className="Documentation">
            <h1 className="text-center">Documentation page</h1>
            <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12 text-center" id="border">
            <h2>Here is complete documentation you will need powered by <a id="doclink" href="https://devdocs.io/" target="_blank">DevDocs!</a> </h2>
            
        <Iframe id="stajl" url="https://devdocs.io/html/"
      width="100%"
      height="400px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
        
           

            </div>
            </div>
            </div>
        </div>
    );
}

}

export default Documentation;
