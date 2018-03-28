let list = require('./add-delete');
let expect = require('../../../../Unit tests/node_modules/chai/').expect;

describe("Test my solve", () => {
    let helper;
    beforeEach(() => {
        helper = list();
    });
    it ("Is have .add", () => {
        expect(helper.hasOwnProperty('add')).to.equal(true);
    });
    it ("Is have .delete", () => {
        expect(helper.hasOwnProperty('delete')).to.equal(true);
    });
    it ("Is have .toString", () => {
        expect(helper.hasOwnProperty('toString')).to.equal(true);
    });
    it ("Is have arr is empty", () => {
        expect(helper.toString()).to.equal('');
    });
    it ("Test add", () => {
        helper.add(2);
        helper.add(1);
        helper.add(5);
        expect(helper.toString()).to.equal('2, 1, 5');
    });
    it ("Test delete with NaN", () => {
        expect(helper.delete('Gosho')).to.equal(undefined);
    });
    it ("Test delete with neggative index", () => {
        expect(helper.delete(-1)).to.equal(undefined);
    });
    it ("Test delete with normal index", () => {
        expect(helper.delete(1)).to.equal(undefined);
    });
    it ("Test delete with big index", () => {
        helper.add(2);
        helper.add(1);
        expect(helper.delete(0)).to.equal(2);
    });
    it ("Test delete with normal index", () => {
        helper.add(2);
        helper.add(1);
        expect(helper.delete(1)).to.equal(1);
    });
    it ("Test delete with normal index", () => {
        helper.add(2);
        helper.add(1);
        helper.add(12);
        helper.delete(1);
        expect(helper.toString()).to.equal('2, 12');
    });
});