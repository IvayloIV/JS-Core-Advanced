let mathEnforcer = require('./Math-Enforcer');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("mathEnforcer test", function() {
    it("test addFive", function() {
        expect(typeof mathEnforcer.addFive).to.be.equal('function');
    });
    it("test subtractTen", function() {
        expect(typeof mathEnforcer.subtractTen).to.be.equal('function');
    });
    it("test sum", function() {
        expect(typeof mathEnforcer.sum).to.be.equal('function');
    });
    it("test addFive with string", function() {
        expect(mathEnforcer.addFive('Pesho')).to.be.equal(undefined);
    });
    it("test addFive with NaN", function() {
        expect(mathEnforcer.addFive(NaN)).to.be.NaN;
    });
    it("test addFive with valid nums", function() {
        expect(mathEnforcer.addFive(23)).to.be.equal(28);
    });
    it("test subtractTen with valid string", function() {
        expect(mathEnforcer.subtractTen('Pesho')).to.be.equal(undefined);
    });
    it("test subtractTen with NaN", function() {
        expect(mathEnforcer.addFive(NaN)).to.be.NaN;
    });
    it("test subtractTen with valid nums", function() {
        expect(mathEnforcer.subtractTen(23)).to.be.equal(13);
    });
    it("test sum with invalid num1", function() {
        expect(mathEnforcer.sum('Pesho', 23)).to.be.equal(undefined);
    });
    it("test sum with invalid num2", function() {
        expect(mathEnforcer.sum(2, 'Pesho')).to.be.equal(undefined);
    });
    it("test sum with valid nums", function() {
        expect(mathEnforcer.sum(2, 2)).to.be.equal(4);
    });
    it("test sum with valid nums", function() {
        expect(mathEnforcer.sum(-2, -2)).to.be.equal(-4);
    });
    it("test addFive with valid num", function() {
        expect(mathEnforcer.addFive(-2)).to.be.equal(3);
    });
    it("test subtractTen with valid num", function() {
        expect(mathEnforcer.subtractTen(-2)).to.be.equal(-12);
    });
    it("test subtractTen with valid double num", function() {
        expect(mathEnforcer.subtractTen(2.1)).to.be.equal(-7.9);
    });
    it("test addFive with valid double num", function() {
        expect(mathEnforcer.addFive(2.1)).to.be.equal(7.1);
    });
    it("test sum with valid double num", function() {
        expect(mathEnforcer.sum(1.4, 1.2)).to.be.closeTo(2.6, 0.1);
    });
});