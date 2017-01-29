var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Alert = React.createClass({
    componentWillReceiveProps(nextProps) {
        if (nextProps.alertMessage) {
            this.props.dispatch(actions.dismissAlert());
            alert(nextProps.alertMessage);
        }
    },

    render: function() {
        return <div />;
    }
});

var mapStateToProps = function(state, props) {
    return {
        alertMessage: state.alertMessage
    };
};

module.exports = connect(mapStateToProps)(Alert);
