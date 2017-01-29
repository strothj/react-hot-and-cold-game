var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Navbar = require('./navbar');

var Header = React.createClass({
    onNewGameClicked: function(event) {
        event.preventDefault();
        this.props.dispatch(actions.startNewGame());
    },

    onInfoClicked: function(event) {
        alert('Game rules go here...');
    },

    render: function() {
        return (
            <header className="header">
                <Navbar
                    onInfoClicked={this.onInfoClicked}
                    onNewGameClicked={this.onNewGameClicked} />
                <h1 className="header__title">HOT or COLD</h1>
            </header>
        );
    }
});

module.exports = connect()(Header);
