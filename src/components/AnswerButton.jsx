import React, { Component } from 'react';
// import components


class AnswerButton extends Component {
  
  render() {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <button onClick={()=> this.props.handleAnswerClick(this.props.questionNum)}>{this.props.answerText}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerButton;
