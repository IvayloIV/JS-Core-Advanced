let makeList = require('./Add-Left-Right');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("Test my solve", () => {
    let list;
    beforeEach(() => {
        list = makeList();
    });
    it ("Is have addLeft.", () => {
        expect(list.hasOwnProperty('addLeft')).to.equal(true);
    });
    it ("Is have addRight.", () => {
        expect(list.hasOwnProperty('addRight')).to.equal(true);
    });
    it ("Is have clear.", () => {
        expect(list.hasOwnProperty('clear')).to.equal(true);
    });
    it ("Is have toString.", () => {
        expect(list.hasOwnProperty('toString')).to.equal(true);
    });
    it ("Is arr is empty", () => {
        expect(list.toString()).to.equal('');
    });
    it ("Test addLeft", () => {
        list.addLeft(3);
        list.addLeft(2);
        expect(list.toString()).to.equal('2, 3');
    });
    it ("Test addRight", () => {
        list.addRight(3);
        list.addRight(2);
        expect(list.toString()).to.equal('3, 2');
    });
    it ("Test clear", () => {
        list.addRight(3);
        list.addRight(2);
        list.addLeft(2);
        list.clear();
        expect(list.toString()).to.equal('');
    });
    it ("Test addLeft - addRight", () => {
        list.addRight(3);
        list.addRight(2);
        list.addLeft(2);
        expect(list.toString()).to.equal('2, 3, 2');
    });
});