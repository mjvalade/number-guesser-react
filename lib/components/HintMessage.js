import React, { Component } from 'react';
// const $ = require('jquery');

export default class HintMessage extends Component {
  constructor(props) {
    super();
    this.state = {
      guess: props.guess,
      randNum: Math.floor(Math.random()*100),

    };
  }


  numberRandom() {
    // const { number } = this.state;
    this.state.randNum = Math.floor(Math.random()*100);
    console.log(this.state.randNum);
  }


  getInputValues() {
    // if statements here
  }

  render() {

    // render submit button here
    // return (
      // if (this.state.guess > this.props.randNum) {
      //   console.log('too high');
        return (
          <div>{this.state.guess}</div>
      //     <div className="TooHigh">
      //       <p>Your guess is too high.</p>
      //     </div>
      //   );
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
    //     );
    //   }
    )
  }
}
