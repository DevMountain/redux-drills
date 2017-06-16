import React, { Component } from 'react';
import { addGuest, removeGuest } from './ducks/guestList';
import { connect } from 'react-redux';
import EditGuest from './components/EditGuest/EditGuest';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      edit: false,
      guestToEdit: '',
      guestIndex: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editName = this.editName.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  editName(guest, i) {
    this.setState({
      edit: true,
      guestToEdit: guest,
      guestIndex: i
    })
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addGuest(this.state.text);
    this.setState({
      text: ''
    })
  }

  hideModal() {
    this.setState({
      edit: false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <div className="">
                  <button
                    onClick={() => this.editName(guest, i)}
                    type="">Edit</button>
                  <button
                    onClick={()=> this.props.removeGuest(i)}
                    type=""
                    className="">Remove</button>
                </div>
              </div>
            )
          })}
        </ul>
        <form
          onSubmit={this.handleSubmit}
          className="add-guest">
          Add guest: <input
          value={this.state.text}
          onChange={this.handleInputChange}
          type="" className=""/>
          <button
            type=""
            className="">Add</button>
        </form>
        {
           this.state.edit ?
                <EditGuest />
                : null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state
  }
}

export default connect(mapStateToProps,{ addGuest, removeGuest })(App);
