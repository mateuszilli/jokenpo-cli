const OPTION = require('./constants/option');

const judge = (answer1, answer2) => {
    if (answer1 == answer2) {
        return `Empate: ${answer1} X ${answer2}`;
    }

    if (answer1 == OPTION.ROCK && answer2 == OPTION.SCISSORS) {
        return `Vitória do player 1: ${answer1} X ${answer2}`;
    }

    if (answer1 == OPTION.ROCK && answer2 == OPTION.PAPER) {
        return `Vitória do player 2: ${answer2} X ${answer1}`;
    }

    if (answer1 == OPTION.PAPER && answer2 == OPTION.ROCK) {
        return `Vitória do player 1: ${answer1} X ${answer2}`;
    }

    if (answer1 == OPTION.PAPER && answer2 == OPTION.SCISSORS) {
        return `Vitória do player 2: ${answer2} X ${answer1}`;
    }

    if (answer1 == OPTION.SCISSORS && answer2 == OPTION.PAPER) {
        return `Vitória do player 1: ${answer1} X ${answer2}`;
    }

    if (answer1 == OPTION.SCISSORS && answer2 == OPTION.ROCK) {
        return `Vitória do player 2: ${answer2} X ${answer1}`;
    }
};

module.exports = judge;