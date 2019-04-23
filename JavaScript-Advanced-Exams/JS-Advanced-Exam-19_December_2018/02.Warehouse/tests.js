let Warehouse = require('./Warehouse');
let expect = require('chai').expect;

describe("Test my solve", () => {
    let list;

    beforeEach(() => {
        list = Warehouse;
    });

    it ("Test capacity", () => {
        expect(list.prototype.hasOwnProperty('capacity')).to.equal(true);
    });

    it ("Test addProduct", () => {
        expect(list.prototype.hasOwnProperty('addProduct')).to.equal(true);
    });

    it ("Test orderProducts", () => {
        expect(list.prototype.hasOwnProperty('orderProducts')).to.equal(true);
    });

    it ("Test occupiedCapacity", () => {
        expect(list.prototype.hasOwnProperty('occupiedCapacity')).to.equal(true);
    });

    it ("Test revision", () => {
        expect(list.prototype.hasOwnProperty('revision')).to.equal(true);
    });

    it ("Test scrapeAProduct", () => {
        expect(list.prototype.hasOwnProperty('scrapeAProduct')).to.equal(true);
    });

    it ("Test capacity", () => {
        expect(() => new list('pesho')).to.throw("Invalid given warehouse space");
    });

    it ("Test capacity", () => {
        expect(() => new list(0)).to.throw("Invalid given warehouse space");
    });

    it ("Test capacity", () => {
        expect(() => new list(-1)).to.throw("Invalid given warehouse space");
    });

    it ("Test capacity", () => {
        const t = new list(20);
        expect(t.capacity).to.equal(20);
    });

    it ("Test capacity", () => {
        const t = new list(20);
        expect(t.availableProducts).to.deep.equal({'Food': {}, 'Drink': {}});
    });

    it ("Test addProduct", () => {
        const t = new list(20);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(t.occupiedCapacity()).to.equal(20);
    });

    it ("Test addProduct", () => {
        const t = new list(20);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(() => t.addProduct('Drink', 'Cola', 1)).to.throw("There is not enough space or the warehouse is already full");
    });

    it ("Test addProduct", () => {
        const t = new list(20);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(() => t.addProduct('Food', 'Cola', 1)).to.throw("There is not enough space or the warehouse is already full");
    });

    it ("Test addProduct", () => {
        const t = new list(50);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(t.revision()).to.equal("Product type - [Food]\n- Zele 42\nProduct type - [Drink]\n- Cola 6");
    });

    it ("Test orderProducts", () => {
        const t = new list(50);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(t.orderProducts("Food")).to.deep.equal({ Zele: 42 });
    });

    it ("Test orderProducts", () => {
        const t = new list(50);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(t.availableProducts).to.deep.equal({ Drink: { Cola: 6 }, Food: { Zele: 42 } });
    });

    it ("Test occupiedCapacity", () => {
        const t = new list(50);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(t.occupiedCapacity()).to.equal(48);
    });

    it ("Test occupiedCapacity", () => {
        const t = new list(50);
        expect(t.occupiedCapacity()).to.equal(0);
    });

    it ("Test revision", () => {
        const t = new list(14);
        expect(t.revision()).to.equal("The warehouse is empty");
    });

    it ("Test revision", () => {
        const t = new list(50);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(t.revision()).to.equal("Product type - [Food]\n- Zele 42\nProduct type - [Drink]\n- Cola 6");
    });

    it ("Test scrapeAProduct", () => {
        const t = new list(50);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(() => t.scrapeAProduct('Beer', 20)).to.throw("Beer do not exists");
    });

    it ("Test scrapeAProduct", () => {
        const t = new list(50);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        expect(t.scrapeAProduct('Zele', 20)).to.deep.equal({ Zele: 22 });
    });

    it ("Test scrapeAProduct", () => {
        const t = new list(50);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Food', 'Zele', 14);
        t.addProduct('Drink', 'Cola', 6);
        t.scrapeAProduct('Zele', 20);
        expect(t.availableProducts['Food']['Zele']).to.equal(22);
    });
});