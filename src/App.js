import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import helpers from './helpers.js';
import Main from "./Main.js";

const App = () => {
  return (<div className="App">

<div className="main-container">


        <div className="container">

          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">TONY TARA FOR LIFE</a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#/search">Search</a></li>
                  <li><a href="#/saved">Saved Articles</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron">
            <h2 className="text-center"><strong>Welcome to the New York Times Article App aka TONY TARA</strong></h2>
          </div>

          

        </div>
      </div>
 
    </div>);
};

export default App;
