import React, { Component } from 'react';
import './EditGuest.css';

class EditGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.guest
    }
    this.update = this.update.bind(this);
  }


  update() {
    // update guest name function
    this.props.hide();
  }



  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <input
            className="modal-input"/>
          <button
            type=""
            className="modal-btn">Update</button>
          <button
            onClick={this.props.hide}
            type=""
            className="modal-btn">Cancel</button>
        </div>
      </div>
    )
  }
}

export default EditGuest;
