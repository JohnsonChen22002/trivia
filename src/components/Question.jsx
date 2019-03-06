import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    const color = this.props.color || 'black';
    return (
      <div>

        <h1 style={{color}}>{this.props.questiontext}</h1>
      
      </div>
    );
  }
}

export default Question;