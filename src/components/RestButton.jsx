import React, { Component } from 'react';
// import components


class ResetButton extends Component {
  
  render() {
    return (
      <button onClick={this.props.resetApp} id='restBtn'>
        Next
      </button>
    );
  }
}

export default ResetButton;