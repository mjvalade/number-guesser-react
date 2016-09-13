const React = require('react');

class MakeGuess extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGuess: '',
    };
  }

  makeGuess(e) {
    e.preventDefault();
    this.props.setGuess(this.state.currentGuess);
    // clear input fields when click submit button
  }

  render() {
    console.log('currentGuess', this.state.currentGuess);
    console.log('guess', this.props.guess);
    return (

      <div>
        <form className="MakeGuess" onSubmit={this.makeGuess.bind(this)}>
          <input
            type="number"
            placeholder="Guess a number"
            // value={this.state.guess}
            onChange={(e) => this.setState({ currentGuess: e.target.value})}
          />
          <input
            type="submit" value="Submit Guess"
          />
        </form>
      </div>
    );
  }
}

export default MakeGuess;
