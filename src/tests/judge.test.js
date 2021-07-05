const judge = require('../judge');

const OPTION = require('../constants/option');

test('ROCK X ROCK to equals draw', () => {
    const answer1 = OPTION.ROCK;
    const answer2 = OPTION.ROCK;

    expect(judge(answer1, answer2)).toBe(`Empate: ${answer1} X ${answer2}`);
});

test('PAPER X PAPER to equals draw', () => {
    const answer1 = OPTION.PAPER;
    const answer2 = OPTION.PAPER;

    expect(judge(answer1, answer2)).toBe(`Empate: ${answer1} X ${answer2}`);
});

test('SCISSORS X SCISSORS to equals draw', () => {
    const answer1 = OPTION.SCISSORS;
    const answer2 = OPTION.SCISSORS;

    expect(judge(answer1, answer2)).toBe(`Empate: ${answer1} X ${answer2}`);
});

test('ROCK X SCISSORS to equals answer1 win', () => {
    const answer1 = OPTION.ROCK;
    const answer2 = OPTION.SCISSORS;

    expect(judge(answer1, answer2)).toBe(`Vitória do player 1: ${answer1} X ${answer2}`);
});

test('ROCK X PAPER to equals answer2 win', () => {
    const answer1 = OPTION.ROCK;
    const answer2 = OPTION.PAPER;

    expect(judge(answer1, answer2)).toBe(`Vitória do player 2: ${answer2} X ${answer1}`);
});

test('PAPER X ROCK to equals answer1 win', () => {
    const answer1 = OPTION.PAPER;
    const answer2 = OPTION.ROCK;

    expect(judge(answer1, answer2)).toBe(`Vitória do player 1: ${answer1} X ${answer2}`);
});

test('PAPER X SCISSORS to equals answer2 win', () => {
    const answer1 = OPTION.PAPER;
    const answer2 = OPTION.SCISSORS;

    expect(judge(answer1, answer2)).toBe(`Vitória do player 2: ${answer2} X ${answer1}`);
});

test('SCISSORS X PAPER to equals answer1 win', () => {
    const answer1 = OPTION.SCISSORS;
    const answer2 = OPTION.PAPER;

    expect(judge(answer1, answer2)).toBe(`Vitória do player 1: ${answer1} X ${answer2}`);
});

test('SCISSORS X ROCK to equals answer2 win', () => {
    const answer1 = OPTION.SCISSORS;
    const answer2 = OPTION.ROCK;

    expect(judge(answer1, answer2)).toBe(`Vitória do player 2: ${answer2} X ${answer1}`);
});