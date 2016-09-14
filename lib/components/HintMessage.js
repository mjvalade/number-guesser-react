import React, { Component } from 'react';

export default class HintMessage extends Component {
  constructor(props) {
    super();
  }

  numberRandom() {
    this.state.randNum = Math.floor(Math.random()*100);
    console.log(this.state.randNum);
  }

  compareGuess() {
    if (this.state.guess > this.props.randNum) {
      return (
        <div className="TooHigh">
          <p>Your guess is too high.</p>
        </div>
      );
    }
    if (this.state.guess < this.props.randNum) {
      return (
        <div className="TooLow">
          <p>Your guess is too low.</p>
        </div>
      );
    }
    if (this.state.guess === this.props.randNum) {
      return (
        <div className="Winner">
          <p>You win!</p>
        </div>
      );
    }
  }

  render() {

    // render submit button here
    return (
      // if (this.state.guess > this.props.randNum) {
      //   console.log('too high');
      //   return (
          <div className="TooHigh">
            <p>Your guess is too high. (test)</p>
          </div>
        );
      // }
      // if (this.state.guess < this.props.randNum) {
      //   console.log('too low');
      //   return (
      //     <div className="TooLow">
      //       <p>Your guess is too low.</p>
      //     </div>
      //   );
      // }
      // if (this.state.guess = this.props.randNum) {
      //   console.log('winner');
      //   return (
      //     <div className="Winner">
      //       <p>You win!</p>
      //     </div>
      //   );
      // }
    // )
  }
}
