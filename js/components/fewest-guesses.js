var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var FewestGuesses = React.createClass({
    componentDidMount() {
        this.props.dispatch(
            actions.fetchFewestGuesses()
        );
    },

    componentWillReceiveProps(nextProps) {
        if (this.props.gameWon === nextProps.gameWon) return;
        if (!nextProps.gameWon) return;
        this.props.dispatch(
            actions.saveFewestGuesses(
                nextProps.guessCount
            )
        );
    },

    render: function() {
        return (
            <div className={'fewest-guesses ' + this.props.className}>
                <span>Fewest guesses: {this.props.fewestGuesses}</span>
            </div>
        );
    }
});

var mapPropsToState = function(state, props) {
    return {
        guessCount: state.previousGuesses.length,
        fewestGuesses: state.fewestGuesses,
        gameWon: state.gameWon
    };
};

module.exports = connect(mapPropsToState)(FewestGuesses);
