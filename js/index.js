require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var Game = require('./components/game');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <Game />
        </Provider>,
        document.getElementById('app')
    );
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
