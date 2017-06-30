import React from "react";

// Import sub-components
import Form from "./children/Form";
import Results from "./children/Results";

// Helper Function
import helpers from "./helpers.js";

import Query from "./Query.js"

import Results from "./Results.js"



class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryTerm: "",
      startYear: "",
      endYear: "",
      results: {}

  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
};


const componentUpdate = (prevProps, prevState) => {
  // componentUpdate: function(prevProps, prevState)  {

// if statement to help organize the data that comes back for the frontend 
    if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear))
    {
      helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear)

      .then(function(data)  {
        if (data != this.state.results)
        {
          this.setState({
            results: data
          })
        }

      }.bind(this))
    }
  };

const setQuery = (newQuery, newStart, newEnd) => {
  // setQuery: function(newQuery, newStart, newEnd){
// setting for user search
    this.setState({
      queryTerm: newQuery,
      startYear: newStart,
      endYear: newEnd
    })
  }

const render = () => {
  // render: function(){

    return(
// where requested information is supposed to be displayed in the main-container 
      <div className="main-container">

        <Query updateSearch={this.setQuery} />

        <Results results={this.state.results}/>

      </div>

    )
  }



module.exports = Main;
