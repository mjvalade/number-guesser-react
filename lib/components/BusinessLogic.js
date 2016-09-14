import React, { Component } from 'react';


const defaultGuess = '';
const formatNumber = (value) => {
  return parseInt(value, 10) || defaultGuess;
};

export default class BusinessLogic extends Component {
  constructor() {
    super();
    this.state = {
      currentGuess: defaultGuess,
      randNum: Math.floor(Math.random()*100),

    };
  }

  clearField() {
    this.setState({ currentGuess: defaultGuess });
  }

  makeGuess() {
    this.props.handleGuess(this.state.currentGuess);
    this.clearField();
  }

  resetGame() {
    this.setState({guess: ''});
    this.numberRandom();
    console.log('reset game');
    console.log(this.state.randNum);
  }

  render() {
    return (
      <div className="Buttons">
        <input
            type="number"
            placeholder="Guess a number"
            // value={this.state.guess}
            onChange={(e) => this.setState({ currentGuess: formatNumber(e.target.value)})}
        />
        <button
          onClick={() => this.makeGuess()}
          disabled={!this.state.currentGuess}
        >
          Guess
        </button>
        <button
          onClick={() => this.clearField()}
          disabled={!this.state.currentGuess}
        >
          Clear
        </button>
        <button
          onClick={() => this.props.onResetGame()}>
          Reset
        </button>
      </div>
    )
  }
}
