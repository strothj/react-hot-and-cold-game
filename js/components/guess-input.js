var React = require('react');

var GuessInput = React.createClass({
    render: function() {
        return (
            <div className="guess-input">
                <form>
                    <input className="guess-input__input"
                        type="text" ref="guess-input"
                        placeholder="Enter your guess"></input>
                    <input className="guess-input__submit"
                        type="submit" value="Guess"></input>
                </form>
            </div>
        );
    }
});

module.exports = GuessInput;
