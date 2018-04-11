let isSymmetric = require('./Check-for-Symmetry');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("isSymmetric(arr)", function() {
    it("should return true for [1, 2, 1]", function() {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it("should return false for [1, 2]", function() {
        expect(isSymmetric([1, 2])).to.be.equal(false);
    });
    it("should return false for [1, 1]", function() {
        expect(isSymmetric([1, 1])).to.be.equal(true);
    });
    it("should return false for Pesho", function() {
        expect(isSymmetric('Pesho')).to.be.equal(false);
    });
    it("should return true for ['Gosho', 2, 'Gosho']", function() {
        expect(isSymmetric(['Gosho', 2, 'Gosho'])).to.be.equal(true);
    });
    it("should return false for [true, 0]", function() {
        expect(isSymmetric([true, 1])).to.be.equal(false);
    });
});