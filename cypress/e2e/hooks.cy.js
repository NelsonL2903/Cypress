const {add, multiply, subtract, divide} = require('../../hooks');

describe("tests using hooks", () => {
    var input1 = 0
    var input2 = 0
    var test_num = 0;
   
    before(() => {
        cy.log("Starting hooks.test.js...");
    });
   
    after(() => {
        cy.log("...Finished hooks.test.js");
    });
    
    beforeEach(() => {
        ++test_num;
        cy.log(`Starting hooks.test.js test #${test_num}`);
        input1 = 1;
        input2 = 2;
    });
    
    afterEach(() => {
        cy.log(`Completed hooks.test.js test #${test_num}`);
    });
   
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
})