let PaymentPackage = require('./Payment-Package');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("Test my solve", () => {
    let samp;
    beforeEach(() => {
        samp = PaymentPackage;
    });
    it ("Test getName", () => {
        let current = new samp("Gosho", 4);
        expect(current.name).to.equal("Gosho");
    });
    it ("Test setName error diff string", () => {
        expect(() => new samp(43, 4)).to.throw(Error, 'Name must be a non-empty string');
    });
    it ("Test setName error empty string", () => {
        expect(() => new samp("", 4)).to.throw(Error, 'Name must be a non-empty string');
    });
    it ("Test setName correct", () => {
        let result = new samp("Ivan", 4);
        result.name = "Pesho";
        expect(result.name).to.equal("Pesho");
    });
    it ("Test getValue", () => {
        let current = new samp("Gosho", 4);
        expect(current.value).to.equal(4);
    });
    it ("Test setValue with string", () => {
        expect(() => new samp("Gosho", "Ivan")).to.throw(Error, 'Value must be a non-negative number');
    });
    it ("Test setValue with negative num", () => {
        expect(() => new samp("Gosho", -32)).to.throw(Error, 'Value must be a non-negative number');
    });
    it ("Test setValue correct", () => {
        let result = new samp("Ivan", 12);
        result.value = 1;
        expect(result.value).to.equal(1);
    });
    it ("Test VAT get first", () => {
        let result = new samp("Ivan", 12);
        expect(result.VAT).to.equal(20);
    });
    it ("Test VAT set with string", () => {
        let result = new samp("Ivan", 12);
        expect(() => result.VAT = "Pesho").to.throw(Error, 'VAT must be a non-negative number');
    });
    it ("Test VAT set with negative num", () => {
        let result = new samp("Ivan", 12);
        expect(() => result.VAT = -34).to.throw(Error, 'VAT must be a non-negative number');
    });
    it ("Test VAT set correct", () => {
        let result = new samp("Ivan", 12);
        result.VAT = 3;
        expect(result.VAT).to.equal(3);
    });
    it ("Test active get first", () => {
        let result = new samp("Ivan", 12);
        expect(result.active).to.equal(true);
    });
    it ("Test active set with string", () => {
        let result = new samp("Ivan", 12);
        expect(() => result.active = "Pesho").to.throw(Error, 'Active status must be a boolean');
    });
    it ("Test active set correctly", () => {
        let result = new samp("Ivan", 12);
        result.active = false;
        expect(result.active).to.equal(false);
    });
    it ("Test .toString active == false", () => {
        let result = new samp("Ivan", 2);
        expect(result.toString()).to.equal(`Package: Ivan\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4`);
    });
    it ("Test .toString active == true", () => {
        let result = new samp("Ivan", 2);
        result.active = false;
        expect(result.toString()).to.equal(`Package: Ivan (inactive)\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4`);
    });
    it ("Test .value", () => {
        let result = new samp("Ivan", 2);
        result.value = 0;
        expect(result.value).to.equal(0);
    });
    it ("Test .vat", () => {
        let result = new samp("Ivan", 2);
        result.VAT = 0;
        expect(result.VAT).to.equal(0);
    });
});