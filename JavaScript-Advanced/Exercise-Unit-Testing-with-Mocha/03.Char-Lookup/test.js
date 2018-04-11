let lookupChar = require('./Char-Lookup');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("lookupChar(str, index)", function() {
    it("test with str = num", function() {
        expect(lookupChar(23, 1)).to.be.equal(undefined);
    });
    it("test with num = str", function() {
        expect(lookupChar("Pesho", 'Gosho')).to.be.equal(undefined);
    });
    it("test with neggative index", function() {
        expect(lookupChar("Pesho", -1)).to.be.equal('Incorrect index');
    });
    it("test with big index", function() {
        expect(lookupChar("Pesho", 5)).to.be.equal('Incorrect index');
    });
    it("test with small inside index", function() {
        expect(lookupChar("Pesho", 0)).to.be.equal('P');
    });
    it("test with big inside index", function() {
        expect(lookupChar("Pesho", 4)).to.be.equal('o');
    });
    it("test with num = str", function() {
        expect(lookupChar("Pesho", NaN)).to.be.equal(undefined);
    });
});