import React, { Component } from 'react';

import HintMessage from './HintMessage';
import MakeGuess from './MakeGuess';
import ResetButton from './ResetButton';

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

  componentDidMount() {

  }

  render() {
    const { guess } = this.state;

    return (
      <section className="InputGuess">
        <h1 className="Title">Number Guesser React-style</h1>
        <h1 className="userGuess">
          Your guess: {this.state.guess}
        </h1>
        <HintMessage guess={this.state.guess}/>
        <MakeGuess guess={this.state.guess} setGuess={this.handleGuessChange.bind(this)}/>
        <ResetButton onResetGame={this.handleResetGame.bind(this)}/>
      </section>
    )
  }

}

            //
            //     Application (state: guess) -> props
            //                       : randNum
            // HintMessage MakeGuess --> this.props.guess (R)
            //     current guess
