import React, { Component } from 'react';

export default class Buttons extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  clearField() {
    this.setState({ })
  }

  makeGuess() {
    this.props.setGuess(this.state.currentGuess);
    this.clearField();
  }

  render() {
    return (
      <div className="Buttons">
        <button
          onClick={() => this.makeGuess()}
          disabled={!this.state.guess}
        >
          Guess
        </button>
        <button
          onClick={() => this.props.onResetGame()}
          disabled={!this.state.guess}
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
