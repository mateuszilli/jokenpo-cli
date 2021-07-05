const OPTION = require('./constants/option');

const invalid = (answer) => {
    let invalid = true;

    switch (answer) {
        case OPTION.ROCK:
        case OPTION.PAPER:
        case OPTION.SCISSORS:
            invalid = false;
            break;
    }

    return invalid;
};

const question = (readline, message) => {
    return new Promise((resolve, reject) => {
        readline.question(message, (answer) => {
            const answerLowerCase = String(answer).toLowerCase();

            if (invalid(answerLowerCase)) {
                reject('Jogada inválida!');
            }

            resolve(answerLowerCase);
        })
    })
};

module.exports = question;