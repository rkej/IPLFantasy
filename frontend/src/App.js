import React, { Component } from 'react';
import NavBar from './NavBar';

const bg ={backgroundColor: 'black'};

class App extends Component {
  render() {
    return  <div className="bg">
        
        <NavBar />
        <style>{'body { background-color: black; }'}
        </style>
    </div>
    
  }
}
export default App;
