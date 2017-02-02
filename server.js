const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let bestGuessCount;

const api = express.Router();
api.use(bodyParser.json());
api.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

api.get('/', function(req, res) {
    if (!bestGuessCount) {
        res.sendStatus(404);
        return;
    }
    res.send({ bestGuessCount: bestGuessCount });
});

api.post('/', function(req, res) {
    if (req.body && req.body.guessCount) {
        var guessCount = parseInt(req.body.guessCount, 10);
        if (!bestGuessCount) {
            bestGuessCount = guessCount;
        }
        else if (guessCount < bestGuessCount) {
            bestGuessCount = guessCount;
        }
        res.sendStatus(204);
    } else {
        res.sendStatus(400);
        return;
    }
});

app.use('/fewest-guesses', api);
app.listen(3000, function() {
    console.log('Server started on port 3000');
});
