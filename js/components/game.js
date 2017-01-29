var React = require('react');

var Alert = require('./alert');
var Header = require('./header');
var GameCard = require('./game-card');

var Game = React.createClass({
    render: function() {
        return (
            <div className="game">
                <Alert />
                <Header />
                <GameCard className="game__card" />
            </div>
        );
    }
});

module.exports = Game;
