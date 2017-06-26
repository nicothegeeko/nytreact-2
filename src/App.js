import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import sub-components
import Form from "./children/Form";
import Results from "./children/Results";

// Helper Function
import helpers from "./utils/helpers";

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



class Main extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      searchTerm: "",
      results: ""
    };

    this.setTerm = this.setTerm.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then((data) => {
        if (data !== this.state.results) {
          console.log(data);

          this.setState({ results: data });
        }
      });
    }
  }

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  render() {

    return (

      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Address Finder!</h2>
            <p className="text-center">
              <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em>
            </p>
          </div>

          <div className="col-md-6">

            <Form setTerm={this.setTerm} />

          </div>

          <div className="col-md-6">

            <Results address={this.state.results} />

          </div>

        </div>

      </div>
    );
  }
}

      
    );
  }
}

render() {
  <div id="app"></div>
}

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(<Main />, document.getElementById("App"));

export default App;
