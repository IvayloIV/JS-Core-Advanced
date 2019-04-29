let AutoService = require('./AutoService');
let expect = require('chai').expect;

describe("Test my solve", () => {
    let list;
    beforeEach(() => {
        list = AutoService;
    });

    it ("Test constructor", () => {
        let t = new list(100);
        expect(t.garageCapacity).to.equal(100);
    });

    it ("Test constructor", () => {
        let t = new list(100);
        expect(t.workInProgress).to.deep.equal([]);
    });

    it ("Test constructor", () => {
        let t = new list(100);
        expect(t.backlogWork).to.deep.equal([]);
    });

    it ("Test signUpForReview", () => {
        let t = new list(2);
        t.signUpForReview('Pesho', 12, 'Nothing');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        expect(t.workInProgress).to.deep.equal([
            { plateNumber: 12, clientName: 'Pesho', carInfo: 'Nothing' },
            { plateNumber: 13, clientName: 'Pesho2', carInfo: 'Nothing' },
        ]);
    });

    it ("Test signUpForReview", () => {
        let t = new list(2);
        t.signUpForReview('Pesho', 12, 'Nothing');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        t.signUpForReview('Pesho3', 14, 'Nothing');
        expect(t.backlogWork).to.deep.equal([
            { plateNumber: 14, clientName: 'Pesho3', carInfo: 'Nothing' },
        ]);
    });

    it ("Test carInfo", () => {
        let t = new list(2);
        t.signUpForReview('Pesho', 12, 'Nothing');
        t.signUpForReview('Pesho', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        t.signUpForReview('Pesho3', 14, 'Nothing');
        expect(t.carInfo(12, 'Pesho')).to.deep.equal({ plateNumber: 12, clientName: 'Pesho', carInfo: 'Nothing' });
    });

    it ("Test carInfo", () => {
        let t = new list(2);
        t.signUpForReview('Pesho', 12, 'Nothing');
        t.signUpForReview('Pesho', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        t.signUpForReview('Pesho3', 14, 'Nothing');
        expect(t.carInfo(14, 'Pesho3')).to.deep.equal({ plateNumber: 14, clientName: 'Pesho3', carInfo: 'Nothing' });
    });

    it ("Test carInfo", () => {
        let t = new list(2);
        t.signUpForReview('Pesho', 12, 'Nothing');
        t.signUpForReview('Pesho', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        expect(t.carInfo(12, 'Pesho3')).to.equal(`There is no car with platenumber 12 and owner Pesho3.`);
    });

    it ("Test carInfo", () => {
        let t = new list(2);
        t.signUpForReview('Pesho', 12, 'Nothing');
        t.signUpForReview('Pesho', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        expect(t.carInfo(14, 'Pesho')).to.equal(`There is no car with platenumber 14 and owner Pesho.`);
    });

    it ("Test availableSpace", () => {
        let t = new list(5);
        t.signUpForReview('Pesho', 12, 'Nothing');
        t.signUpForReview('Pesho', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        expect(t.availableSpace).to.equal(2);
    });

    it ("Test availableSpace", () => {
        let t = new list(5);
        t.signUpForReview('Pesho', 12, 'Nothing');
        t.signUpForReview('Pesho', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        t.signUpForReview('Pesho2', 13, 'Nothing');
        expect(t.availableSpace).to.equal(0);
    });

    it ("Test repairCar", () => {
        let t = new list(3);
        expect(t.repairCar()).to.equal('No clients, we are just chilling...');
    });

    it ("Test repairCar", () => {
        let t = new list(3);
        t.signUpForReview('Pesho1', 12, 'Nothing');
        t.signUpForReview('Pesho2', 13, 'Nothing2');
        t.signUpForReview('Pesho3', 14, 'Nothing');
        expect(t.repairCar()).to.equal('Your car was fine, nothing was repaired.');
    });

    it ("Test repairCar", () => {
        let t = new list(3);
        t.signUpForReview('Pesho1', 12, { a: 'ok', b: 'nice', c: 'broken', d: 'broken' });
        t.signUpForReview('Pesho2', 13, 'Nothing2');
        t.signUpForReview('Pesho3', 14, 'Nothing');
        expect(t.repairCar()).to.equal('Your c and d were repaired.');
    });

    it ("Test repairCar", () => {
        let t = new list(3);
        t.signUpForReview('Pesho1', 12, { a: 'ok', b: 'nice', c: 'broken', d: 'cool' });
        t.signUpForReview('Pesho2', 13, 'Nothing2');
        t.signUpForReview('Pesho3', 14, 'Nothing');
        expect(t.repairCar()).to.equal('Your c were repaired.');
    });

    it ("Test repairCar", () => {
        let t = new list(3);
        t.signUpForReview('Pesho1', 12, { a: 'ok', b: 'nice', c: 'broken', d: 'cool' });
        t.signUpForReview('Pesho2', 13, 'Nothing2');
        t.signUpForReview('Pesho3', 14, 'Nothing');
        t.repairCar();
        expect(t.workInProgress).to.deep.equal([
            { plateNumber: 13, clientName: 'Pesho2', carInfo: 'Nothing2' },
            { plateNumber: 14, clientName: 'Pesho3', carInfo: 'Nothing' },
        ]);
    });

    it ("Test repairCar", () => {
        let t = new list(3);
        t.signUpForReview('Pesho1', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, { a: 'ok', b: 'nice', c: 'broken', d: 'cool' });
        t.signUpForReview('Pesho3', 14, 'Nothing');
        expect(t.repairCar()).to.equal('Your car was fine, nothing was repaired.');
    });

    it ("Test repairCar", () => {
        let t = new list(3);
        t.signUpForReview('Pesho1', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, { a: 'ok', b: 'nice', c: 'broken', d: 'cool' });
        t.signUpForReview('Pesho3', 14, 'Nothing');
        t.repairCar();
        expect(t.workInProgress).to.deep.equal([
            { plateNumber: 13, clientName: 'Pesho2', carInfo: { a: 'ok', b: 'nice', c: 'broken', d: 'cool' } },
            { plateNumber: 14, clientName: 'Pesho3', carInfo: 'Nothing' },
        ]);
    });

    it ("Test repairCar", () => {
        let t = new list(1);
        t.signUpForReview('Pesho1', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, { a: 'ok', b: 'nice', c: 'broken', d: 'cool' });
        t.signUpForReview('Pesho3', 14, 'Nothing');
        t.repairCar();
        expect(t.repairCar()).to.equal('Your c were repaired.');
    });

    it ("Test repairCar", () => {
        let t = new list(1);
        t.signUpForReview('Pesho1', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, { a: 'broken', b: 'nice', c: 'broken', d: 'cool' });
        t.signUpForReview('Pesho3', 14, 'Nothing');
        t.repairCar();
        expect(t.repairCar()).to.equal('Your a and c were repaired.');
    });

    it ("Test repairCar", () => {
        let t = new list(1);
        t.signUpForReview('Pesho1', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, { a: 'd', b: 'nice', c: 'a', d: 'cool' });
        t.signUpForReview('Pesho3', 14, 'Nothing');
        t.repairCar();
        expect(t.repairCar()).to.equal('Your car was fine, nothing was repaired.');
    });

    it ("Test repairCar", () => {
        let t = new list(1);
        t.signUpForReview('Pesho1', 12, 'Nothing2');
        t.signUpForReview('Pesho2', 13, { a: 'd', b: 'nice', c: 'a', d: 'cool' });
        t.signUpForReview('Pesho3', 14, 'Nothing');
        t.repairCar();
        t.repairCar();
        t.repairCar();
        expect(t.repairCar()).to.equal('No clients, we are just chilling...');
    });
});