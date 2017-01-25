var React = require('react');

var Header = require('./header');

var Game = React.createClass({
    render: function() {
        return (
            <div className="game">
                <Header />
            </div>
        );
    }
});

module.exports = Game;
