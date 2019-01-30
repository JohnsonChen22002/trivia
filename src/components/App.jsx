import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import AnswerButton from './AnswerButton.jsx';
import Reset from './RestButton';
const question = 'What was the most popular game in 2018?'
const answers = ["Fortnite", "Red Dead Redemption II", "Tetris", "Legend of Zelda: Breath of the Wild"];
 


class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <Question questiontext={question}/>
        {
          answers.map(function(answer){
            return <AnswerButton  answertext={answer}/>;
          })
        }
        <Reset/>
      </div>
    );
  }
}

export default App;