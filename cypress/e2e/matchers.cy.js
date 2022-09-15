const {robotIsWorking} = require('../../matchers');

describe("tests using hooks", () => {
    it('Checks that robot is working', () => {
    expect(() => robotIsWorking()).to.throw();
    expect(() => robotIsWorking()).to.throw('The robot stopped working');
    });
});