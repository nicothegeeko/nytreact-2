import React from "react";


class Query extends React.Component ({

const getInitialState = () => {
    return {
      search: "",
      start: "",
      end: ""
    }
  }


const handleChange = (event) => {

      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    }

const handleSubmit = () => {

    this.props.updateSearch(this.state.search, this.state.start, this.state.end);
    return false;
  }


  const render = () => {

    return(
      <div className ="main-container">

          <div className="row">
            <div className="col-lg-12">

              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
                </div>
                <div className="panel-body">

                  <form>
                    <div className="form-group">
                      <h4 className=""><strong>Topic</strong></h4>
                      <input type="text" value={this.state.value} className="form-control " id="search" onChange= {this.handleChange} required/>

                      <h4 className=""><strong>Start Year (Required)</strong></h4>
                      <input value={this.state.value} className="form-control " id="start" onChange= {this.handleChange} required/>

                      <h4 className=""><strong>End Year (Required)</strong></h4>
                      <input value={this.state.value} className="form-control " id="end" onChange= {this.handleChange} required/>

                    </div>

                    <div className="pull-right">
                      <button type="button" className="btn btn-primary" onClick={this.handleSubmit}><h4>Submit</h4></button>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>

      </div>

    )
  }
});

export default Query;