var React = require('react');
var connect = require('react-redux').connect;

var GuessHistory = React.createClass({
    render: function() {
        var guesses = [];

        for (var i = 0; i < this.props.previousGuesses.length; i += 1) {
            guesses.push(
                <li className="guess-history__guess" key={i}>
                    {this.props.previousGuesses[i]}
                </li>
            );
        }

        return (
            <ul className="guess-history">
                {guesses}
            </ul>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        previousGuesses: state.previousGuesses
    };
};

module.exports = connect(mapStateToProps)(GuessHistory);
