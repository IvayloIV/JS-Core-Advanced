let Calculator = require('./Calculator_Class');
let expect = require('chai').expect;

describe("Test my solve", () => {
    let list;
    beforeEach(() => {
        list = Calculator;
    });
    it ("Is having add", () => {
        expect(list.prototype.hasOwnProperty('add')).to.equal(true);
    });
    it ("Is having divideNums", () => {
        expect(list.prototype.hasOwnProperty('divideNums')).to.equal(true);
    });
    it ("Is having toString", () => {
        expect(list.prototype.hasOwnProperty('toString')).to.equal(true);
    });
    it ("Is having orderBy", () => {
        expect(list.prototype.hasOwnProperty('orderBy')).to.equal(true);
    });
    it ("Test contructor", () => {
        let t = new list();
        expect(t.expenses).to.deep.equal([]);
    });
    it ("Test divideNums", () => {
        let t = new list();
        t.add(3);
        t.add(0);
        t.add(2.1);
        expect(t.divideNums()).to.equal('Cannot divide by zero');
    });
    it ("Test divideNums", () => {
        let t = new list();
        expect(() => t.divideNums()).to.throw(Error, 'There are no numbers in the array!');
    });
    it ("Test divideNums", () => {
        let t = new list();
        t.add('1');
        t.add('23');
        t.add('53');
        expect(() => t.divideNums()).to.throw(Error, 'There are no numbers in the array!');
    });
    it ("Test divideNums", () => {
        let t = new list();
        t.add(23);
        expect(t.divideNums()).to.equal(23);
    });
    it ("Test divideNums", () => {
        let t = new list();
        t.add(22);
        t.add(11);
        expect(t.divideNums()).to.equal(2);
    });
    it ("Test divideNums", () => {
        let t = new list();
        t.add(22);
        t.add(-1);
        expect(t.divideNums()).to.equal(-22);
    });
    it ("Test divideNums", () => {
        let t = new list();
        t.add(22);
        t.add(0.5);
        expect(t.divideNums()).to.equal(44);
    });
    it ("Test divideNums", () => {
        let t = new list();
        t.add(0);
        t.add(22);
        t.add(0.5);
        expect(t.divideNums()).to.equal(0);
    });
    it ("Test toString", () => {
        let t = new list();
        expect(t.toString()).to.equal('empty array');
    });
    it ("Test toString", () => {
        let t = new list();
        t.add(1);
        expect(t.toString()).to.equal('1');
    });
    it ("Test toString", () => {
        let t = new list();
        t.add(1);
        t.add(-1);
        t.add(1.1);
        expect(t.toString()).to.equal('1 -> -1 -> 1.1');
    });
    it ("Test orderBy", () => {
        let t = new list();
        expect(t.orderBy()).to.equal('empty');
    });
    it ("Test orderBy", () => {
        let t = new list();
        t.add(1);
        t.add('1');
        t.add(-1);
        expect(t.orderBy()).to.equal('-1, 1, 1');
    });
    it ("Test orderBy", () => {
        let t = new list();
        t.add(1);
        t.add('pesho');
        t.add(-1);
        expect(t.orderBy()).to.equal('-1, 1, pesho');
    });
    it ("Test orderBy", () => {
        let t = new list();
        t.add(1);
        t.add(1.1);
        t.add(-1);
        expect(t.orderBy()).to.equal('-1, 1, 1.1');
    });
    it ("Test orderBy", () => {
        let t = new list();
        t.add('c');
        t.add('a');
        t.add('b');
        expect(t.orderBy()).to.equal('a, b, c');
    });
});