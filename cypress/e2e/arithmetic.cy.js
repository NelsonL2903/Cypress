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

describe('Arithmetic Tests with Parameters', () => {
    it('a + b = c', () => {
        const array = [[1, 1, 2], [-1, 3, 2], [2, 1, 3]];
        array.forEach(
            (element) => {
                expect(add(element[0], element[1])).to.equal(element[2]);
            },
        );
    });

    it('a * b = c', () => {
        const array = [[7, 4, 28], [-1, 3, -3], [-4, -2, 8]];
        array.forEach(
            (element) => {
                expect(multiply(element[0], element[1])).to.equal(element[2]);
            },
        );
    });
    
    it('a - b = c', () => {
        const array = [[11, 1, 10], [-1, 6, -7], [5, 1, 4]];
        array.forEach(
            (element) => {
                expect(subtract(element[0], element[1])).to.equal(element[2]);
            },
        );
    });

    it('a / b = c', () => {
        const array = [[10, 5, 2], [14, 2, 7], [33, 3, 11]];
        array.forEach(
            (element) => {
                expect(divide(element[0], element[1])).to.equal(element[2]);
            },
        );
    });
});