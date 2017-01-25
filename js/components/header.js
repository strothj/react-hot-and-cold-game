var React = require('react');

var Navbar = require('./navbar');

var Header = React.createClass({
    render: function() {
        return (
            <header className="header">
                <Navbar
                    onInfoClicked={this.props.onInfoClicked}
                    onNewGameClicked={this.props.onNewGameClicked} />
                <h1 className="header__title">HOT or COLD</h1>
            </header>
        );
    }
});

module.exports = Header;
