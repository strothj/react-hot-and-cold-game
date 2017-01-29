var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess) {
    return {
        type: GUESS_NUMBER,
        guess: guess
    };
};

var START_NEW_GAME = 'START_NEW_GAME';
var startNewGame = function() {
    return {
        type: START_NEW_GAME
    };
};

var DISMISS_ALERT = 'DISMISS_ALERT';
var dismissAlert = function() {
    return {
        type: DISMISS_ALERT
    };
};

module.exports.GUESS_NUMBER = GUESS_NUMBER;
module.exports.guessNumber = guessNumber;
module.exports.START_NEW_GAME = START_NEW_GAME;
module.exports.startNewGame = startNewGame;
module.exports.DISMISS_ALERT = DISMISS_ALERT;
module.exports.dismissAlert = dismissAlert;
