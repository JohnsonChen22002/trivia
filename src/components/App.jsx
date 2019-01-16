import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import ResetButton from './RestButton';
import AnswerButton from './AnswerButton.jsx';

// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <Question/>
        
      </div>
    );
  }
}

export default App;