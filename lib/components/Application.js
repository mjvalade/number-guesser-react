import React, { Component } from 'react';
import MakeGuess from './MakeGuess';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      guess: '',
      // randNum: Math.floor(Math.random()*100),

    };
  }

  //
  // numberRandom() {
  //   // const { number } = this.state;
  //   this.state.randNum = Math.floor(Math.random()*100);
  //   console.log(this.state.randNum);
  // }

  render() {
    const { guess } = this.state;

    return (
      <section className="InputGuess">
        <h1 className="Title">Number Guesser</h1>
        <h1>React-style</h1>
        <p>Your guess</p>
        <MakeGuess />
      </section>
    )
    // button to reset game
    // h1 show guess
  }

}
