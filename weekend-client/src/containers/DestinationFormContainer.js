import React, { Component } from 'react';
import AutocompleteSearch from '../components/AutocompleteSearch';
<<<<<<< HEAD
import AddDestinationTag from '../components/AddDestinationTag'

class DestinationFormContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: "",
      sessionToken: this.createSessionToken(),
      latLng: {},
      addTags: false,
      tags: [],
      tagCount: 0,
      destination: ""
    }

  }

  createSessionToken = () => {
    let token = Math.random()*1000000000000000000
    console.log("TOKEN:", token)
    return token
  }

  handleSubmit = (ev) => {
    debugger;
    ev.preventDefault();
    console.log("Handling form submit.")
  }

  setLatLng = (latLng) => {
    console.log("Setting lat/lon state in form.")
    this.setState((prevState) => {
      return {latLng: latLng, addTags: true}
    })
  }

  setDestination = (destination) => {
    this.setState({destination})
  }

  renderTagForm = () => {
    let tempArray = []
    for(let i=0; i< this.state.tagCount; i++){
      tempArray.push("item")
    };
    return(
      tempArray.map((item) => {
        return <AddDestinationTag persistTag={this.persistTag}/>}
    ))
  }

  addNewTagForm = () => {
    this.setState((prevState) => {
      return{tagCount: prevState.tagCount + 1, addTags: false}
    })
  }

  persistTag = (ev) => {
    ev.preventDefault();
    let string = ev.target.value
    let hashTag = ("#" + string.split(" ").join(""))
    this.state.tags.push(hashTag)
    this.setState({addTags: true, tagCount: 0})
  }



  render() {
    return (
      <div>
        <h3>Add New Destination:</h3>
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          {this.state.destination === ""
          ?
          <AutocompleteSearch setLatLng={this.setLatLng} setDestination={this.setDestination}/>
          :
          <div>
            <h2>{this.state.destination}</h2>
            <h3>{this.state.tags.join(' ')}</h3>
          </div>
          }
          {this.renderTagForm()}
          {this.state.addTags? <button onClick={(ev) => {this.addNewTagForm(ev)}}>Add Tag</button> : null}
          <br/>
          <input type="submit"></input>
        </form>

      </div>
    );
  }
=======
import AddDestinationTags from '../components/AddDestinationTags';

class DestinationFormContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userInput: '',
			sessionToken: this.createSessionToken(),
			latLng: {},
			addTags: false,
			tags: []
		};
	}

	createSessionToken = () => {
		let token = Math.random() * 1000000000000000000;
		console.log('TOKEN:', token);
		return token;
	};

	handleSubmit = (ev) => {
		ev.preventDefault();
		console.log('Handling form submit.');
	};

	setLatLng = (latLng) => {
		console.log('Setting lat/lon state in form.');
		this.setState({ latLng, addTags: true }, console.log('Here.'));
	};

	addTag = (tag) => {
		console.log('Adding a tag.');
	};

	render() {
		return (
			<div>
				<h3>Add New Destination:</h3>
				<form onSubmit={(ev) => this.handleSubmit(ev)}>
					<AutocompleteSearch setLatLng={this.setLatLng} />
					{true ? <AddDestinationTags tags={this.state.tags} addTag={this.addTag} /> : null}
					<input type="submit" />
				</form>
			</div>
		);
	}
>>>>>>> bb5de6a67c5302c322f0c7353c188867df4b9a84
}

export default DestinationFormContainer;
