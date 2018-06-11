let createCalculator = require('./Add-Subtract');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("isSymmetric(arr)", function() {
    let myFunc;
    beforeEach(() => {
        myFunc = createCalculator();
    });
    it("test add", function() {
        expect(typeof myFunc.add).to.be.equal('function');
    });
    it("test subtract", function() {
        expect(typeof myFunc.subtract).to.be.equal('function');
    });
    it("test get", function() {
        expect(typeof myFunc.get).to.be.equal('function');
    });
    it("test value", function() {
        expect(myFunc.get()).to.be.equal(0);
    });
    it("test add num", function() {
        myFunc.add(3);
        expect(myFunc.get()).to.be.equal(3);
    });
    it("test add string", function() {
        myFunc.add('Pesho');
        expect(myFunc.get()).to.be.NaN;
    });
    it("test subtract number", function() {
        myFunc.subtract(4);
        expect(myFunc.get()).to.be.equal(-4);
    });
    it("test subtract string", function() {
        myFunc.subtract('Pesho');
        expect(myFunc.get()).to.be.NaN;
    });
    it("test value", function() {
        expect(myFunc.value).to.be.equal(undefined);
    });
    it("test Number()", function() {
        myFunc.add(23);
        myFunc.add(23);
        myFunc.subtract(3);
        expect(myFunc.get()).to.be.equal(43);
    });
    it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
        myFunc.add(10);
        myFunc.subtract('7');
        myFunc.add('-2');
        myFunc.subtract(-1);
        let value = myFunc.get();
        expect(value).to.be.equal(2);
    });
});