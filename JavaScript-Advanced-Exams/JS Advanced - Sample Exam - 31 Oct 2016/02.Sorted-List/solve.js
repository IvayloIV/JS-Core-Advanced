let SortedList = require('./Sorted-List');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("Test my solve", () => {
    let samp;
    beforeEach(() => {
        samp = new SortedList();
    });
    it ("Is having add func", () => {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
    });
    it ("Is having remove func", () => {
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
    });
    it ("Is having get func", () => {
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
    });
    it ("Is having vrfyRange func", () => {
        expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.equal(true);
    });
    it ("Is having sort func", () => {
        expect(SortedList.prototype.hasOwnProperty('sort')).to.equal(true);
    });
    it ("Is having size func", () => {
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
    });
    it ("Test add func", () => {
        samp.add(43);
        samp.add(23);
        samp.add(1);
        expect(samp.list).to.have.deep.property(1, 23, 43);
    });
    it ("Test remove func", () => {
        samp.add(43);
        samp.add(23);
        samp.add(1);
        samp.remove(1);
        expect(samp.list).to.have.deep.property(1, 43);
    });
    it ("Test vrfyRange func empty", () => {
        expect(() =>  samp.remove(1)).to.throw(Error, 'Collection is empty.')
    });
    it ("Test vrfyRange func negative", () => {
        samp.add(43);
        expect(() =>  samp.remove(-1)).to.throw(Error, 'Index was outside the bounds of the collection.')
    });
    it ("Test vrfyRange func positive", () => {
        samp.add(43);
        expect(() =>  samp.remove(1)).to.throw(Error, 'Index was outside the bounds of the collection.')
    });
    it ("Test vrfyRange normal min", () => {
        samp.add(43);
        samp.add(47);
        samp.add(2);
        samp.remove(0);
        expect(samp.list).deep.equal([43, 47]);
    });
    it ("Test vrfyRange normal min", () => {
        samp.add(43);
        samp.add(47);
        samp.add(2);
        samp.remove(2);
        expect(samp.size).to.equal(2);
    });
    it ("Test get normal min", () => {
        samp.add(43);
        samp.add(47);
        samp.add(2);
        expect(samp.get(0)).to.equal(2);
    });
});