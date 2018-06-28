let mathEnforcer = require('./Math_Enforcer');
let expect = require('chai').expect;

describe("Test my solve", () => {
    it ("Test with not-num to addFive", () => {
        expect(mathEnforcer.addFive('car')).to.equal(undefined);
    });
    it ("Test to addFive", () => {
        expect(mathEnforcer.addFive(-4)).to.equal(1);
    });
    it ("Test to addFive", () => {
        expect(mathEnforcer.addFive(3.2)).to.equal(8.2);
    });
    it ("Test to addFive", () => {
        expect(mathEnforcer.addFive(3.6)).to.equal(8.6);
    });
    it ("Test to addFive", () => {
        expect(mathEnforcer.addFive(3)).to.equal(8);
    });
    it ("Test with not-num to subtractTen", () => {
        expect(mathEnforcer.subtractTen('car')).to.equal(undefined);
    });
    it ("Test to subtractTen", () => {
        expect(mathEnforcer.subtractTen(-4)).to.equal(-14);
    });
    it ("Test to subtractTen", () => {
        expect(mathEnforcer.subtractTen(3.2)).to.equal(-6.8);
    });
    it ("Test to subtractTen", () => {
        expect(mathEnforcer.subtractTen(3.6)).to.equal(-6.4);
    });
    it ("Test to subtractTen", () => {
        expect(mathEnforcer.subtractTen(3)).to.equal(-7);
    });
    it ("Test with not-num to sum", () => {
        expect(mathEnforcer.sum('car', 2)).to.equal(undefined);
    });
    it ("Test with not-num to sum", () => {
        expect(mathEnforcer.sum(2, 'car')).to.equal(undefined);
    });
    it ("Test to sum", () => {
        expect(mathEnforcer.sum(2, 2)).to.equal(4);
    });
    it ("Test to sum", () => {
        expect(mathEnforcer.sum(-2, -2)).to.equal(-4);
    });
    it ("Test to sum", () => {
        expect(mathEnforcer.sum(2.2, 2.2)).to.equal(4.4);
    });
    it ("Test to sum", () => {
        expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
    });
});