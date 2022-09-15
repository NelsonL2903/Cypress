const {sum, positive, negative, isPalindrome, isAnagram} = require('../../groups');

describe('testing math utilities', () => {
    let vals;
    let sum_of_vals;
    let pos_vals;
    let neg_vals;

    before(() => {
        pos_vals = [2, 1, 3];
        neg_vals = [-2, -1, -3];
        vals = pos_vals.concat(neg_vals);
        sum_of_vals = vals.reduce((x, y) => x + y, 0);
    })

    it('the sum of vals should be 0', () => {
        expect(sum(vals)).to.equal(sum_of_vals);
    });

    it('should get positive values', () => {
        expect(positive(vals)).to.deep.equal(pos_vals);
    });

    it('should get negative values', () => {
        expect(negative(vals)).to.deep.equal(neg_vals);
    });
});

describe('testing string utilities', () => {
    it('should test words for palindromes', () => {
        const palindromes = ["racecar", "radar", "level", "mom", "refer", "deified", "civic"];
        palindromes.forEach(
            (word) => {
                expect(isPalindrome(word)).to.be.true;
            },
        );
    });

    it('should test words for anagrams', () => {
        const anagrams = [["arc", "car"], ["cat", "act"], ["cider", "cried"], ["dear", "read"]];
        anagrams.forEach(
            (element) => {
                expect(isAnagram(element[0], element[1])).to.be.true;
            },
        );
    });
});