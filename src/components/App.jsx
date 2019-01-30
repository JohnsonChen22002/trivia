import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import Answer from './AnswerButton.jsx';
import Reset from './RestButton';
// import ResetButton from './RestButton.jsx';
// import AnswerButton from './AnswerButton.jsx';

// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <Question/>
        <Answer/>
        <Reset/>
      </div>
    );
  }
}

export default App;