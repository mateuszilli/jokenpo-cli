module.exports = {
    createInterface: jest.fn().mockReturnValue({
        question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb("y")),
        write: jest.fn().mockImplementationOnce(() => undefined),
        close: jest.fn().mockImplementationOnce(() => undefined)
    })
};