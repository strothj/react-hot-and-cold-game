var React = require('react');
var connect = require('react-redux').connect;

var Feedback = React.createClass({
    render: function() {
        return (
            <div className="feedback">
                <h2>{this.props.feedback}</h2>
            </div>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        feedback: state.guessMessage
    };
};

module.exports = connect(mapStateToProps)(Feedback);
