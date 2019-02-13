import React, { Component } from 'react';
import {buildFirebase, getRandomQuestion} from '../clients/firebase';
import '../css/App.css';
import Question from './Question.jsx';
import AnswerButton from './AnswerButton.jsx';
import Reset from './RestButton';
const firebaseDatabase = buildFirebase();
// const question = 'What was the most popular game in 2018?'
// const answers = ["Fortnite", "Red Dead Redemption II", "Tetris", "Legend of Zelda: Breath of the Wild"];
 


class App extends Component {
  constructor(props){
    super(props);
    this.updateState();
    
    this.state = {
      questions : {},
      currentQuestion: {
        question_text: 'Question',
        choices: [],
        correct_choice_index: null,
      }
    }
  }
  
  updateState(){
    firebaseDatabase.ref('/questions').on('value', (snapshot)=> {
      const question = getRandomQuestion(snapshot.val()); 
      console.log(question);
      const nextChoices = question.choices;
      this.setState({
        currentQuestion: {
          choices: nextChoices,
        }
      })
    });

    
  }
  
  onAnswerButtonClicked =(index)=>{
    this.setState({
      selectedAnswer: index === this.state.currentQuestion.correct_choice_index
    })
  }
  
  render() {
    return (
      <div className="app">
        Trivia!
        <Question
          questiontext={this.state.currentQuestion.question_text}
          
        />
        {
          this.state.currentQuestion.choices.map((answer, index)=>{
            return <AnswerButton  
            questionNum={index}
            answertext={answer}
            handleAnswerClick={this.onAnswerButtonClicked}
            />;
          })
        }
        <Reset/>
  
      </div>
    );
  }
}

export default App;