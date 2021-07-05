const question = require('../question');

const OPTION = require('../constants/option');

test('answer question to valid option', () => {
    const mock = {
        question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb('pedra'))
    };

    expect(question(mock, 'Qual a jogada do player 1? ')).resolves.toBe(OPTION.ROCK);
});

test('answer question to valid option with lowercase and uppercase characters', () => {
    const mock = {
        question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb('PedrA'))
    };

    expect(question(mock, 'Qual a jogada do player 1? ')).resolves.toBe(OPTION.ROCK);
});

test('answer question to invalid option', () => {
    const mock = {
        question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb('rock'))
    };

    expect(question(mock, 'Qual a jogada do player 1? ')).rejects.toBe('Jogada inválida!');
});