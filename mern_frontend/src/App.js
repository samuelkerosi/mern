import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  clickbutton=()=>{
    fetch()

  }

  render() {
    return ( 
    <div className="App">
      <input onClick={this.clickbutton}/>
    </div>
    );
}
}

export default App;
