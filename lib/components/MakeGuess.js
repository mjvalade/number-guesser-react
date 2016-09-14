import React from 'react';
import hintMessage from './Message';

const MakeGuess = (props) => {
  const guess = props.guess;
  const randNum = props.randNum;

  return (
    <div>
      <h1 className="userGuess">Your guess: {guess}</h1>
      <p>{hintMessage(guess, randNum)}</p>
    </div>
  );
}

module.exports = MakeGuess;
