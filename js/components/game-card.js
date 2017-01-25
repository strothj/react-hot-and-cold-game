var React = require('react');

var Feedback = require('./feedback');

var GameCard = React.createClass({
    render: function() {
        var className = 'game-card ';
        if (this.props.className) className += this.props.className;

        return (
            <section className={className}>
                <Feedback />
            </section>
        );
    }
});

module.exports = GameCard;
