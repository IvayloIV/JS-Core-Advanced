let lookupChar = require('./Char_Lookup');
let expect = require('chai').expect;

describe("Test my solve", () => {
    it ("Test with not-string", () => {
        expect(lookupChar(12, 0)).to.equal(undefined);
    });
    it ("Test with not-integer", () => {
        expect(lookupChar('pesho', 'car')).to.equal(undefined);
    });
    it ("Test with not-string", () => {
        expect(lookupChar('pesho', 2.3)).to.equal(undefined);
    });
    it ("Test with negative num", () => {
        expect(lookupChar('pesho', -1)).to.equal('Incorrect index');
    });
    it ("Test with big num", () => {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index');
    });
    it ("Test with valid inputs", () => {
        expect(lookupChar('pesho', 4)).to.equal('o');
    });
    it ("Test with valid inputs", () => {
        expect(lookupChar('pesho', 0)).to.equal('p');
    });
});