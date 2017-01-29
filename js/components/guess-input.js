var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var GuessInput = React.createClass({
    submitGuess: function(event) {
        event.preventDefault();
        var guess = this.refs['input'].value;
        this.props.dispatch(actions.guessNumber(guess));
        this.refs['input'].value = '';
    },

    componentDidMount: function() {
        this.refs['input'].focus();
    },

    render: function() {
        return (
            <div className="guess-input">
                <form onSubmit={this.submitGuess}>
                    <input className="guess-input__input"
                        type="text" ref="input"
                        placeholder="Enter your guess"
                        required></input>
                    <input className="guess-input__submit"
                        type="submit" value="Guess"></input>
                </form>
            </div>
        );
    }
});

module.exports = connect()(GuessInput);
