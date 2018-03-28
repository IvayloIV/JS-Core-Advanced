let Sumator = require('./Sumator-Class');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("Test my solve", () => {
    let test;
    beforeEach(() => {
        test = new Sumator();
    });
    it ("Is data is empty", () => {
        expect(test.toString()).to.equal("(empty)");
    });
    it ("Is have add func", () => {
        expect(test.__proto__.hasOwnProperty('add')).to.equal(true);
    });
    it ("Is have sumNums func", () => {
        expect(test.__proto__.hasOwnProperty('sumNums')).to.equal(true);
    });
    it ("Is have removeByFilter func", () => {
        expect(test.__proto__.hasOwnProperty('removeByFilter')).to.equal(true);
    });
    it ("Is have toString func", () => {
        expect(test.__proto__.hasOwnProperty('toString')).to.equal(true);
    });
    it ("Test add func", () => {
        test.add(34);
        test.add('Gonga');
        expect(test.toString()).to.equal('34, Gonga');
    });
    it ("Test sumNums to return 0", () => {
        test.add('Pesho');
        test.add('Gonga');
        test.add({});
        test.add(['Ivan']);
        expect(test.sumNums()).to.equal(0);
    });
    it ("Test sumNums to return some number", () => {
        test.add('Pesho');
        test.add(11);
        test.add('Gonga');
        test.add(3);
        expect(test.sumNums()).to.equal(14);
    });
    it ("Test removeByFilter with % 2", () => {
        test.add(14);
        test.add(11);
        test.add(2);
        test.add(3);
        test.removeByFilter(a => a % 2 === 0);
        expect(test.toString()).to.equal('11, 3');
    });
    it ("Test removeByFilter string", () => {
        test.add('Maria');
        test.add('Pesho');
        test.removeByFilter(a => a.endsWith('a'));
        expect(test.toString()).to.equal('Pesho');
    });
    it ("Test toString with empty arr", () => {
        expect(test.toString()).to.equal('(empty)');
    });
});