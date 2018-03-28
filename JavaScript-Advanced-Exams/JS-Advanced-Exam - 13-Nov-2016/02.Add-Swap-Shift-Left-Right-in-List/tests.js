let createList = require('./task');
let expect = require('../../../../Unit tests/node_modules/chai').expect;

describe("Test my solve", () => {
    let currentFunct;
    beforeEach(() => {
        currentFunct = createList();
    });
    it ("Test .add", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.toString()).to.equal("3, 1, 14");
    });
    it ("Test .shiftLeft", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        currentFunct.shiftLeft();
        expect(currentFunct.toString()).to.equal("1, 14, 3");
    });
    it ("Test .shiftLeft", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        currentFunct.shiftRight();
        expect(currentFunct.toString()).to.equal("14, 3, 1");
    });
    it ("Test .swap-flase first is not number", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap('Pesho', 2)).to.be.false;
    });
    it ("Test .swap-flase second is not number", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap(0, 'Pesho')).to.be.false;
    });
    it ("Test .swap-flase first is negative", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap(-1, 1)).to.be.false;
    });
    it ("Test .swap-flase second is negative", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap(0, -1)).to.be.false;
    });
    it ("Test .swap-flase first is big", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap(3, 1)).to.be.false;
    });
    it ("Test .swap-flase second is big", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap(0, 3)).to.be.false;
    });
    it ("Test .swap-flase first second is equal", () => {
        expect(currentFunct.swap(0, 0)).to.be.false;
    });
    it ("Test .swap-true", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap(0, 2)).to.be.true;
    });
    it ("Test .swap-false firstIndex", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap(-1, 0)).to.be.false;
    });
    it ("Test .swap-false secondIndex", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap(0, 4)).to.be.false;
    });
    it ("Test .swap-false equal", () => {
        currentFunct.add(3);
        currentFunct.add(1);
        currentFunct.add(14);
        expect(currentFunct.swap(0, 0)).to.be.false;
    });

    it ("text with normal number", () => {
        currentFunct.add(32);
        currentFunct.add(1);
        currentFunct.swap(0, 1);
        expect(currentFunct.toString()).to.equal("1, 32");
    });
    it ("text with normal number", () => {
        currentFunct.add(32);
        currentFunct.add(1);
        currentFunct.swap(0, 1);
        expect(currentFunct.toString()).to.equal("1, 32");
    });
    it ("text with swap", () => {
        currentFunct.add(32);
        currentFunct.add(1);
        expect(currentFunct.swap(1, 0)).to.equal(true);
    });
});