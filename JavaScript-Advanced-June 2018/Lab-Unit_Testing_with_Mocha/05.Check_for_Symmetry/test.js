let isSymmetric = require('./Check_for_Symmetry');
let expect = require('chai').expect;

describe("Test my solve", () => {
    it ("Test isSymmetric with not-array", () => {
        expect(isSymmetric('str')).to.equal(false);
    });
    it ("Test isSymmetric with array", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
    });
    it ("Test isSymmetric with array", () => {
        expect(isSymmetric([1, 2, 1, 2, 1])).to.equal(true);
    });
    it ("Test isSymmetric with array", () => {
        expect(isSymmetric([1])).to.equal(true);
    });
    it ("Test isSymmetric with array", () => {
        expect(isSymmetric(['p', 2, 2, 'p'])).to.equal(true);
    });
    it ("Test isSymmetric with array", () => {
        expect(isSymmetric(['p', 2, 't',2, 'p'])).to.equal(true);
    });
    it ("Test isSymmetric with array", () => {
        expect(isSymmetric(['p', 2, {},2, 'p'])).to.equal(true);
    });
    it ("Test isSymmetric with array-false", () => {
        expect(isSymmetric(['1', 2, 't',2, 'p'])).to.equal(false);
    });
    it ("Test isSymmetric with array-false", () => {
        expect(isSymmetric(['1',2, 2, 'p'])).to.equal(false);
    });
    it ("Test isSymmetric with array-false", () => {
        expect(isSymmetric(['1', 'p'])).to.equal(false);
    });
    it ("Test isSymmetric with array-false", () => {
        expect(isSymmetric([true, 1])).to.equal(false);
    });
});