/**
 * Guess a number.
 * Generate random number.
 * Increment guess count.
 * Reset guess count.
 * Update guess cold/hot status.
 * Append past guess list.
 * Start new game.
 */

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess) {
    return {
        type: GUESS_NUMBER,
        guess: guess
    };
};

var GENERATE_RANDOM_NUMBER = 'GENERATE_RANDOM_NUMBER';
var generateRandomNumber = function() {
    return {
        type: GENERATE_RANDOM_NUMBER
    };
};

var INCREMENT_GUESS_COUNT = 'INCREMENT_GUESS_COUNT';
var incrementGuessCounter = function() {
    return {
        type: INCREMENT_GUESS_COUNT
    };
};

var RESET_GUESS_COUNT = 'RESET_GUESS_COUNT';
var resetGuessCount = function() {
    return {
        type: RESET_GUESS_COUNT
    };
};

var UPDATE_GUESS_CLOSENESS = 'UPDATE_GUESS_CLOSENESS';
var updateGuessCloseness = function(closeness) {
    return {
        type: UPDATE_GUESS_CLOSENESS,
        closeness: closeness
    };
};

var APPEND_GUESS_LIST = 'APPEND_GUESS_LIST';
var appendGuessList = function(guess) {
    return {
        type: APPEND_GUESS_LIST,
        guess: guess
    };
};

var RESET_GUESS_LIST = 'RESET_GUESS_LIST';
var resetGuessList = function() {
    return {
        type: RESET_GUESS_LIST
    };
};

var START_NEW_GAME = 'START_NEW_GAME';
var startNewGame = function() {
    return {
        type: START_NEW_GAME
    };
};

module.exports.GUESS_NUMBER = GUESS_NUMBER;
module.exports.guessNumber = guessNumber;
module.exports.GENERATE_RANDOM_NUMBER = GENERATE_RANDOM_NUMBER;
module.exports.generateRandomNumber = generateRandomNumber;
module.exports.INCREMENT_GUESS_COUNT = INCREMENT_GUESS_COUNT;
module.exports.incrementGuessCounter = incrementGuessCounter;
module.exports.RESET_GUESS_COUNT = RESET_GUESS_COUNT;
module.exports.resetGuessCount = resetGuessCount;
module.exports.UPDATE_GUESS_CLOSENESS = UPDATE_GUESS_CLOSENESS;
module.exports.updateGuessCloseness = updateGuessCloseness;
module.exports.APPEND_GUESS_LIST = APPEND_GUESS_LIST;
module.exports.appendGuessList = appendGuessList;
module.exports.RESET_GUESS_LIST = RESET_GUESS_LIST;
module.exports.resetGuessList = resetGuessList;
module.exports.START_NEW_GAME = START_NEW_GAME;
module.exports.startNewGame = startNewGame;
