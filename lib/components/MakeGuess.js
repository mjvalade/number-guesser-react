const React = require('react');
import HintMessage from './HintMessage';

class MakeGuess extends React.Component {
  constructor(props) {
    super();
    this.state = {
      guess: '',
    };
  }

  makeGuess(e) {
    e.preventDefault();

    const { guess } = this.state;
    this.setState({ guess: ''});
    console.log(this.state.guess)
  }
  sendGuess(){

  }

  render() {
    return (

      <div>
      <HintMessage guess={this.sendGuess()}/>
      <form className="MakeGuess" onSubmit={this.makeGuess.bind(this)}>
        <input
          type="number"
          placeholder="Guess a number"
          value={this.state.guess}
          onChange={(e) => this.setState({ guess: e.target.value})}
        />
        <input type="submit" value="Submit Guess" />
      </form>
      </div>
    );
  }
}

export default MakeGuess;
