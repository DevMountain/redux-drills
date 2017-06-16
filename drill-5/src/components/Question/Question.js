import React, { Component } from 'react';
import './Question.css'

export default function Question(props) {

  const answers = [];

  for (let key in props.question.options) {
    answers.push(props.question.options[key])
  }

  function checkAnswer(question, index) {
    if (question.correct_answer === index + 1) {
      alert('Correct!')
    } else {
      alert('Wrong, try again.')
    }
  }

  return (
    <div className="question-container">
      <h3 className="">{props.question.question}</h3>
      <div className="answer-list">
        {
          answers.map( (answer,i) => <div
          onClick={()=> checkAnswer(props.question, i)}
          className='answer-btn'
          key={i}
          >{ answer }</div>)
        }
      </div>
    </div>
  )
}
