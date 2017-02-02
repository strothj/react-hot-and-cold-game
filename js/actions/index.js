var fetch = require('isomorphic-fetch');

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

var FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
var fetchFewestGuessesSuccess = function(fewestGuesses) {
    return {
        type: FETCH_FEWEST_GUESSES_SUCCESS,
        fewestGuesses: fewestGuesses
    };
};

var FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
var fetchFewestGuessesError = function(error) {
    return {
        type: FETCH_FEWEST_GUESSES_ERROR,
        error: error
    };
};

var verifyResponseCode = function(response) {
    if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
    return response;
}

var parseJson = function(response) { return response.json(); };

var fetchFewestGuesses = function() {
    return function(dispatch) {
        var url = 'http://localhost:3000/fewest-guesses';
        return fetch(url)
        .then(verifyResponseCode)
        .then(parseJson)
        .then(function(data) {
            var fewestGuesses = data.bestGuessCount;
            return dispatch(
                fetchFewestGuessesSuccess(fewestGuesses)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchFewestGuessesError(error)
            );
        });
    };
};

var saveFewestGuesses = function(guessCount) {
    return function(dispatch) {
        var url = 'http://localhost:3000/fewest-guesses';
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({ guessCount: guessCount }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(verifyResponseCode)
        .then(function() {
            return fetchFewestGuesses()(dispatch);
        });
    };
};

module.exports.GUESS_NUMBER = GUESS_NUMBER;
module.exports.guessNumber = guessNumber;
module.exports.START_NEW_GAME = START_NEW_GAME;
module.exports.startNewGame = startNewGame;
module.exports.DISMISS_ALERT = DISMISS_ALERT;
module.exports.dismissAlert = dismissAlert;
module.exports.FETCH_FEWEST_GUESSES_SUCCESS = FETCH_FEWEST_GUESSES_SUCCESS;
module.exports.fetchFewestGuessesSuccess = fetchFewestGuessesSuccess;
module.exports.FETCH_FEWEST_GUESSES_ERROR = FETCH_FEWEST_GUESSES_ERROR;
module.exports.fetchFewestGuessesError = fetchFewestGuessesError;
module.exports.fetchFewestGuesses = fetchFewestGuesses;
module.exports.saveFewestGuesses = saveFewestGuesses;
