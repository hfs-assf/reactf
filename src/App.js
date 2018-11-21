import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip'
import Navbar from './component/navbar';
import Home from './component/home';
class App extends Component {

  render() {
    return (
      <div>
        <Navbar />  
        <Route exact path="/" component={Home}/>
                     
      </div>
    );
  }
}

export default App;
 
