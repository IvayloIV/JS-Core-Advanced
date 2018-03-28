let StringBuilder = require('./String-Builder');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("Test my solve", () => {
    let newList;
    beforeEach(() => {
        newList = StringBuilder;
    });
    it ("Test prepend", () => {
        expect(newList.prototype.hasOwnProperty('prepend')).to.equal(true);
    });
    it ("Undefined input", () => {
        let currentArr = new newList(undefined);
        expect(currentArr.toString()).to.equal('');
    });
    it ("Valid Input", () => {
        let currentArr = new newList('Pesho');
        expect(currentArr.toString()).to.equal('Pesho');
    });
    it ("Unvalid Input", () => {
        expect(() => new newList(123)).to.throw(TypeError, 'Argument must be string');
    });
    it ("Append valid string", () => {
        let currentArr = new newList('Pesho');
        currentArr.append('Ivan');
        expect(currentArr.toString()).to.equal('PeshoIvan');
    });
    it ("Append invalid string", () => {
        let currentArr = new newList('Pesho');
        expect(() => currentArr.append(123)).to.throw(TypeError, 'Argument must be string');
    });
    it ("Prepend invalid string", () => {
        let currentArr = new newList('Pesho');
        expect(() => currentArr.prepend(123)).to.throw(TypeError, 'Argument must be string');
    });
    it ("Prepend valid string", () => {
        let currentArr = new newList('Pesho');
        currentArr.prepend('123');
        expect(currentArr.toString()).to.equal('123Pesho');
    });
    it ("Insert at invalid string", () => {
        let currentArr = new newList('Pesho');
        expect(() => currentArr.insertAt(123, 0)).to.throw(TypeError, 'Argument must be string');
    });
    it ("Insert at valid string", () => {
        let currentArr = new newList('Pesho');
        currentArr.insertAt('123', 0);
        expect(currentArr.toString()).to.equal('123Pesho');
    });
    it ("Remove func", () => {
        let currentArr = new newList('Pesho');
        currentArr.remove(0, 2);
        expect(currentArr.toString()).to.equal('sho');
    });
    it ("insertAt func", () => {
        let currentArr = new newList('Pesho');
        currentArr.insertAt('123', 0);
        expect(currentArr._stringArray.join(', ')).to.equal('1, 2, 3, P, e, s, h, o');
    });
});