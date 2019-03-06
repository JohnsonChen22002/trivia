import React, { Component } from 'react';
import { buildFirebase, getRandomQuestion } from '../clients/firebase';
import '../css/App.css';
import Question from './Question.jsx';
import AnswerButton from './AnswerButton.jsx';
import Reset from './RestButton';
const firebaseDatabase = buildFirebase();
// const question = 'What was the most popular game in 2018?'
// const answers = ["Fortnite", "Red Dead Redemption II", "Tetris", "Legend of Zelda: Breath of the Wild"];



class App extends Component {
  constructor(props) {
    super(props);
    this.updateState();

    this.state = {
      questions: {},
      currentQuestion: {
        question_text: 'Question',
        choices: [],
        correct_choice_index: null,
      }
    }
  }

  updateState() {
    firebaseDatabase.ref('/questions').on('value', (snapshot) => {
      const question = getRandomQuestion(snapshot.val());
      console.log(question);
      const nextChoices = question.choices;
      this.setState({
        currentQuestion: question
      })
    });


  }


  resetApp = () => {
    this.updateState();
    this.setState({ showFalse: false });
    this.setState({ showCorrect: false })
    console.log('hello');
  }


  onAnswerButtonClicked = (index) => {
    window.scroll(0, 0)
    this.setState({
      selectedAnswer: index === this.state.currentQuestion.correct_choice_index
    })

    const correctAnswer = index === this.state.currentQuestion.correct_choice_index
    if (correctAnswer) {
      return this.setState({ showCorrect: true });
    }
    else {
      this.setState({ showFalse: true });

    }
  }

  render() {
    if (this.state.showCorrect) {
      return (
        <div className="app">
        Trivia!
        <Question
          questiontext="You're Correct!"
          color='green'
        />
        
        {
          this.state.currentQuestion.choices.map((answer, index)=>{
          })
        }
        
        <Reset
        resetApp={this.resetApp} 
        />
  
      </div>
      );
    }

    if (this.state.showFalse) {
      return (
        <div className="app">
        Trivia!
        <Question
          questiontext="You're Wrong!"
          color='red'
        />
        {
          this.state.currentQuestion.choices.map((answer, index)=>{
          })
        }
        
        <Reset
        resetApp={this.resetApp} 
        />
  
      </div>
      );
    }

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
            answerText={answer}
            handleAnswerClick={this.onAnswerButtonClicked}
            />;
          })
        }
      
         <Reset
        resetApp={this.resetApp} 
        />
        
      </div>
    );
  }
}

export default App;
