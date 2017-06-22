import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Include the Main React Dependencies
// import React from "react";
import ReactDOM from "react-dom";

// Include the Main Component
import Main from "./Main.js";



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to The Official New York Times Api React Application</h1>
          <h2>Otherwise Known as: TONYTARA</h2>

        </div>
        <p className="App-intro">
          To get started, edit <code> src/App.js </code> and save to reload.
        </p>
      </div>
    );
  }
}

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(<Main />, document.getElementById("App"));

export default App;
