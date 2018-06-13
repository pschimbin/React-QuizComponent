import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  render() {
    return (
      <div>
       
          {/* {quizData.quiz_questions[this.state.quiz_position - 1]} */}
         <QuizQuestion quiz_question={quizData.quiz_questions[0]} />
        {/* <div className="QuizQuestion">{ quizData.quiz_questions[0].instruction_text }</div> */}
      </div>
    );
  }
}

export default Quiz;
