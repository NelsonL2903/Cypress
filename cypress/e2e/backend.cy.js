const {add, multiply, subtract, divide} = require('../../arithmetic.js');

describe('Arithmetic Tests', () => {
    it('2 + 3 = 5', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('3 * 4 = 12', () => {
        expect(multiply(3, 4)).to.equal(12);
    });
    
    it('5 - 6 = -1', () => {
        expect(subtract(5, 6)).to.equal(-1);
    });
    
    it('8 / 4 = 2', () => {
        expect(divide(8, 4)).to.equal(2);
    });
  });