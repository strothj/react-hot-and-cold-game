require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Game = require('./components/game');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Game />, document.getElementById('app'));
});

/**
 * Game
 * Header
 * Rules modal
 * Game card
 * Feedback
 * Guess taker
 * Guess counter
 * Previous guesses
 */
