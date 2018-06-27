let createCalculator = require('./Add_Subtract');
let expect = require('chai').expect;

describe("Test my solve", () => {
    let obj;
    beforeEach(() => {
        obj = createCalculator();
    });
    it ("Test createCalculator with value", () => {
        expect(obj.get()).to.equal(0);
    });
    it ("Test createCalculator with add func", () => {
        obj.add(1);
        obj.add(2);
        obj.add(3);
        expect(obj.get()).to.equal(6);
    });
    it ("Test createCalculator with add func", () => {
        obj.add(1);
        obj.add(-22);
        obj.add(3.2);
        expect(obj.get()).to.equal(-17.8);
    });
    it ("Test createCalculator with subtract func", () => {
        obj.subtract(1);
        obj.subtract(22);
        obj.subtract(3.2);
        expect(obj.get()).to.equal(-26.2);
    });
    it ("Test createCalculator with subtract func", () => {
        obj.subtract(1);
        obj.add(22);
        obj.subtract(3.2);
        expect(obj.get()).to.equal(17.8);
    });
    it ("Test createCalculator with subtract func", () => {
        obj.subtract(1);
        obj.add(22);
        obj.subtract('asd');
        expect(obj.get()).to.NaN;
    });
    it ("Test createCalculator with subtract func", () => {
        obj.subtract('123');
        obj.add('2');
        obj.subtract('1');
        expect(obj.get()).to.equal(-122);
    });
});