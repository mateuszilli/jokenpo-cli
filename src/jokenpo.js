const { createInterface } = require('readline');

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = require('./question');
const judge = require('./judge');
  
const jokenpo = async () => {
    readline.write('Jokenpô: pedra, papel, tesoura\n\n');

    try {
        const answer1 = await question(readline, 'Qual a jogada do player 1? ');
        const answer2 = await question(readline, 'Qual a jogada do player 2? ');

        const result = judge(answer1, answer2);
        readline.write(`${result}\n`);
    } catch (error) {
        readline.write(`${error}\n`);
    }

    readline.close();
};

module.exports = jokenpo;