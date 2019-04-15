import React, { Component } from 'react';

class AddDestinationTags extends Component {
  constructor(props){
    super(props)
    this.setState = {currentTag: ""}
  }

  handleTagSubmit = (ev) => {
    ev.preventDefault();
    console.log("Handling tag submit.", ev.target)
  }

  updateState = (ev) => {
    ev.preventDefault();
    console.log("updating tag state.")
    this.setState({currentTag: ev.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={(ev) => this.handleTagSubmit(ev)}>
          <h5>Add Tags for This Destination:</h5>
          <input type="text" onChange={this.updateState}></input>
        </form>
      </div>
    );
  }
}

export default AddDestinationTags;
