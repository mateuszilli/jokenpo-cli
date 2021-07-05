const jokenpo = require('../jokenpo');

jest.mock('readline')

test('start the game', () => {
    expect(jokenpo()).toBeTruthy();
});