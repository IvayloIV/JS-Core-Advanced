let sum = require('./Sum_of_Numbers');
let expect = require('chai').expect;

describe("Test my solve", () => {
    it ("Test sum with positive nums", () => {
        expect(sum([2, 3, 4])).to.equal(9);
    });
    it ("Test sum with negative-positive nums", () => {
        expect(sum([-2, -3, 4])).to.equal(-1);
    });
    it ("Test sum with negative-positive nums", () => {
        expect(sum([2.4, 2.2])).to.equal(4.6);
    });
    it ("Test sum with negative-positive nums", () => {
        expect(sum([1])).to.equal(1);
    });
    it ("Test sum with negative-positive nums", () => {
        expect(sum(['pesho', 32])).to.NaN;
    });
});