let isOddOrEven = require('./Even-or-Odd');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("isOddOrEven(arr)", function() {
    it("test with number", function() {
        expect(isOddOrEven(23)).to.be.equal(undefined);
    });
    it("test with obj", function() {
        expect(isOddOrEven({})).to.be.equal(undefined);
    });
    it("test with evenL", function() {
        expect(isOddOrEven("qwer")).to.be.equal('even');
    });
    it("test with oddL", function() {
        expect(isOddOrEven("qwe")).to.be.equal('odd');
    });
});