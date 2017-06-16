import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    // add guest function here
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {{/*??*/}.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="">Remove</button>
              </div>
            )
          })}
        </ul>
        <form
          onSubmit={this.handleSubmit}
          className="add-guest"> Add guest: 
              <input
              value={this.state.text}
              onChange={this.handleInputChange}
              type="" className=""/>
          <button
            type=""
            className="">Add</button>
        </form>
      </div>
    );
  }
}

// mapStateToProps

// connect
