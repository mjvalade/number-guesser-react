import React, { Component } from 'react';

const HintMessage = (guess, randNum) => {
    if (guess > randNum) { return 'Your guess is too high.'; }
    if (guess < randNum) { return 'Your guess is too low.'; }
    if (guess === randNum) { return 'You win!'; }
};

module.exports = HintMessage;
