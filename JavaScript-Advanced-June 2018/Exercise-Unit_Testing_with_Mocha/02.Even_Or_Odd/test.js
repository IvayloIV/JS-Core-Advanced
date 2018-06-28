let isOddOrEven = require('./Even_Or_Odd');
let expect = require('chai').expect;

describe("Test my solve", () => {
    it ("Test with not-string", () => {
        expect(isOddOrEven(12)).to.equal(undefined);
    });
    it ("Test with not-string", () => {
        expect(isOddOrEven([])).to.equal(undefined);
    });
    it ("Test with odd string", () => {
        expect(isOddOrEven('pesho')).to.equal('odd');
    });
    it ("Test with even string", () => {
        expect(isOddOrEven('samy')).to.equal('even');
    });
});