import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import TestQuestionsAnswers from './TestQuestionsAnswers';
//import TestQuestions from './TestQuestions';
//import { getQuestions } from '../../actions/questions';

export default class TestQuestionsContainer extends Component {
  // componentDidMount() {
  //   this.props.getQuestions();
  // }

  render() {
    return (
      <div>
        {/* <TestQuestions question={this.props.question} />; */}
        <TestQuestionsAnswers />
      </div>
    );
  }
}
