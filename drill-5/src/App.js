import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getQuestions } from './ducks/test';
import Question from './components/Question/Question';
import Modal from './components/Modal/Modal';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      working: [],
      showModal: false
    }

    this.closeModal = this.closeModal.bind(this);
  }

componentDidMount() {
  this.props.getQuestions();
}

questionCheck(obj, num) {
  if (obj.correct_answer === num) {
    alert('Correct')
  } else {
    alert('Wrong, try again.')
  }
}

closeModal() {
  this.setState({
    showModal: false
  })
}

  render() {
    return (
      <div className="App">
        <button
          onClick={()=> this.setState({showModal: true})}
          type=""
          className="create-btn"
          >Add New Question</button>
        {
          this.state.showModal ?
          <Modal close={this.closeModal} />
          : null
        }
        <h1 className='dm-header'>DevMountain Trivia</h1>
          {
            this.props.questions.map((obj,i) => {
              return (
                <div key={i} className="">
                  <Question
                    check={this.questionCheck}
                    question={obj} />
                </div>
              )
            })
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

export default connect(mapStateToProps, {getQuestions})(App);
