import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPost } from './../../ducks/test';
import './Modal.css';

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      question: '',
      animal: '',
      difficulty: 1,
      options: {
        one: '',
        two: '',
        three: '',
        four: ''
      },
      answer: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newPost(this.state)
    this.props.close();
  }

  render() {
    return (
      <div className="modal-bg">
        <form onSubmit={this.handleSubmit}>
        <div className="modal">
          <div
            onClick={()=> this.props.close()}
            className="close">X</div>
          <h4 className='fix'>Question</h4>
          <input
            required
            onChange={(e)=> this.setState({question: e.target.value})}
            type="" className="modal-input"/>
          <h4 className='fix'>Animal it's about</h4>
          <input
            required
            onChange={(e)=> this.setState({animal: e.target.value})}
            type="" className="modal-input"/>
          <h4 className='fix'>Difficulty</h4>
          <select onChange={
              (e) => this.setState({
              difficulty: e.target.value
            })
          }>
              <option value='1'>Easy</option>
              <option value='2'>Medium</option>
              <option value='3'>Hard</option>
          </select>
          <h4 className='fix'>Options</h4>
          <ol className='modal-options'>
            <li>
              <input
                required
                onChange={(e)=> this.setState({
                  options: Object.assign({}, this.state.options, {one: e.target.value})
                })}
                type="" className="modal-input"/>
            </li>
            <li>
              <input
                required
                onChange={(e)=> this.setState({
                  options: Object.assign({}, this.state.options, {two: e.target.value})
                })}
                type="" className="modal-input"/>
            </li>
            <li>
              <input
                required
                onChange={(e)=> this.setState({
                  options: Object.assign({}, this.state.options, {three: e.target.value})
                })}
                type="" className="modal-input"/>
            </li>
            <li>
              <input
                required
                onChange={(e)=> this.setState({
                  options: Object.assign({}, this.state.options, {four: e.target.value})
                })}
                type="" className="modal-input"/>
            </li>
          </ol>
          <p className='fix'>Correct answer:</p>
          <select
            onChange={
              (e) => this.setState({answer: e.target.value})
            }>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
          </select>
          <div className="btn-wrap">
            <button
              onClick={()=>this.props.close()}
              type="" className="">Cancel</button>
            <button
               type="" className="">Save</button>
          </div>
        </div>
      </form>
      </div>
    )
  }
}

export default connect(null, { newPost })(Modal);
