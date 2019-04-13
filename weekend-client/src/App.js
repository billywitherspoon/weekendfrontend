import React, { Component } from 'react';
import './App.css';

import AddDestinationForm from './components/AddDestinationForm'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <AddDestinationForm />
      </div>
    );
  }
}

export default App;
