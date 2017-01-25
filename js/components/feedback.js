var React = require('react');

var Feedback = React.createClass({
    getDefaultProps: function() {
        return {
            feedback: 'Make your guess!'
        };
    },

    render: function() {
        return (
            <div className="feedback">
                <h2>{this.props.feedback}</h2>
            </div>
        );
    }
});

module.exports = Feedback;
