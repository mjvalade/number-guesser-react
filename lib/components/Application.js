import React, { Component } from 'react';

import MakeGuess from './MakeGuess';
import Buttons from './Buttons';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      guess: '',
      randNum: Math.floor(Math.random()*100),

    };
  }

  handleGuessChange(guess) {
    this.setState({guess});
  }

  handleResetGame() {
    this.setState({guess: ''});
    this.numberRandom();
    console.log('reset game');
    console.log(this.state.randNum);
  }

  numberRandom() {
    this.state.randNum = Math.floor(Math.random()*100);
    console.log(this.state.randNum);
  }

  render() {
    return (
      <section className="InputGuess">
        <h1 className="Title">Number Guesser React-style</h1>
        <MakeGuess guess={this.state.guess} setGuess={this.handleGuessChange.bind(this)}/>
        <input
            type="number"
            placeholder="Guess a number"
            value={this.state.guess}
            onChange={(e) => this.setState({ currentGuess: e.target.value})}
        />
        <Buttons />
      </section>
    )
  }

}
