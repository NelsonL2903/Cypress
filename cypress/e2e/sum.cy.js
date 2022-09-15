const sum = require('../../sum');

describe("tests sum method", () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).to.equal(3);
    });
      
    it('adds 1 + 4 to not equal 3', () => {
        expect(sum(1, 4)).not.to.equal(3);
    });
});