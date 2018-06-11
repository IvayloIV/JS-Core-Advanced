let sum = require('./Sum-of-Numbers');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("sum(arr)", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return 0 for []", function() {
        expect(sum([])).to.be.equal(0);
    });
    it("should return NaN for ['Pesho', 32]", function() {
        expect(sum(['Pesho', 32])).to.be.NaN;
    });
    it("should return 1 for [1]", function() {
        expect(sum([1])).to.be.equal(1);
    });
});