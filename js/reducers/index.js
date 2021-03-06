var actions = require('../actions/index');

var generateRandomNumber = function() {
    var randNum = Math.floor(Math.random() * 100) + 1;
    console.log('Random number: ', randNum);
    return randNum;
};

var ERR_NOT_NUMBER = 'Please enter a whole number';
var ERR_INVALID_GUESS_RANGE = 'Please choose a number between 0 and 100';
var ERR_PREVIOUSLY_GUESSED = 'You guessed this number already';

var GUESS_MESSAGES = {
    NEW_GAME: 'Make your Guess!',
    COLD: 'cold',
    LESS_THAN_WARM: 'less than warm',
    KINDA_HOT: 'kinda hot',
    HOT: 'hot',
    WON: 'You Won. Click new game to play again'
};

var calculateGameMessage = function(secretNumber, guess) {
    var diff = Math.abs(secretNumber - guess);
    if (diff === 0) return GUESS_MESSAGES.WON;
    if (diff < 10) return GUESS_MESSAGES.HOT;
    if (diff < 20) return GUESS_MESSAGES.KINDA_HOT;
    if (diff < 30) return GUESS_MESSAGES.LESS_THAN_WARM;
    return GUESS_MESSAGES.COLD;
};

var initialGameState = {
    secretNumber: generateRandomNumber(),
    guessMessage: GUESS_MESSAGES.NEW_GAME,
    alertMessage: null,
    previousGuesses: [],
    fewestGuesses: 0,
    gameWon: false
};

var gameReducer = function(state, action) {
    var guess;
    var err = null;
    state = state || initialGameState;

    if (action.type === actions.GUESS_NUMBER) {
        guess = action.guess;

        if (guess % 1 !== 0) err = ERR_NOT_NUMBER;
        else if (guess < 0 || guess > 101) err = ERR_INVALID_GUESS_RANGE;
        else if (state.previousGuesses.includes(guess)) err = ERR_PREVIOUSLY_GUESSED;

        if (err) return Object.assign({}, state, { alertMessage: err });

        var guessMessage = calculateGameMessage(state.secretNumber, guess);

        return Object.assign({}, state, {
            previousGuesses: state.previousGuesses.concat(guess),
            guessMessage: guessMessage,
            gameWon: (guessMessage === GUESS_MESSAGES.WON)
        });
    }
    else if (action.type === actions.DISMISS_ALERT) {
        return Object.assign({}, state, { alertMessage: null });
    }
    else if (action.type === actions.START_NEW_GAME) {
        return Object.assign({}, initialGameState, {
            secretNumber: generateRandomNumber()
        });
    }
    else if (action.type === actions.FETCH_FEWEST_GUESSES_SUCCESS) {
        return Object.assign({}, state, {
            fewestGuesses: action.fewestGuesses
        });
    }
    else if (action.type === actions.FETCH_FEWEST_GUESSES_ERROR) {
        return Object.assign({}, state, {
            fewestGuesses: 'N/A'
        });
    }

    return state;
};

module.exports.gameReducer = gameReducer;
