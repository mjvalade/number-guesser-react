import React, { Component } from 'react';

export default class ResetButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button
      onClick={() => this.props.onResetGame()}>
      Reset
      </button>
    )
  }
}
