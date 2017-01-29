var React = require('react');
var connect = require('react-redux').connect;

var GuessCounter = React.createClass({
    render: function() {
        return (
            <p className="guess-counter">
                Guess #
                <span className="guess-counter__count">
                    {this.props.guessCount}
                </span>
                !
            </p>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        guessCount: state.previousGuesses.length
    };
};

module.exports = connect(mapStateToProps)(GuessCounter);
