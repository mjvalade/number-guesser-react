import React, { Component } from 'react';

import MakeGuess from './MakeGuess';
import BusinessLogic from './BusinessLogic';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      lastGuess: null,
      randNum: Math.floor(Math.random()*100),

    };
  }

  // handleGuess(guess) {
  //   this.setState({guess});
  // }

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
        <MakeGuess guess={this.state.lastGuess} randNum={this.state.randNum}/>
        <BusinessLogic handleGuess={(guess) => this.setState({ lastGuess: guess })}
        onResetGame={this.handleResetGame.bind(this)}
        />
      </section>
    )
  }

}
