var React = require('react');

var Feedback = require('./feedback');
var GuessInput = require('./guess-input');

var GameCard = React.createClass({
    render: function() {
        var className = 'game-card ';
        if (this.props.className) className += this.props.className;

        return (
            <section className={className}>
                <Feedback />
                <GuessInput />
            </section>
        );
    }
});

module.exports = GameCard;
