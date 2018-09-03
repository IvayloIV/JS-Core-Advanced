let HolidayPackage = require('./HolidayPackage');
let expect = require('chai').expect;

describe("Test my solve", () => {
    let list;
    beforeEach(() => {
        list = HolidayPackage;
    });
    it ("Test showVacationers", () => {
        expect(list.prototype.hasOwnProperty('showVacationers')).to.equal(true);
    });
    it ("Test addVacationer", () => {
        expect(list.prototype.hasOwnProperty('addVacationer')).to.equal(true);
    });
    it ("Test insuranceIncluded", () => {
        expect(list.prototype.hasOwnProperty('insuranceIncluded')).to.equal(true);
    });
    it ("Test generateHolidayPackage", () => {
        expect(list.prototype.hasOwnProperty('generateHolidayPackage')).to.equal(true);
    });
    it ("Test constructor vacationers", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(holiday.vacationers.length).to.equal(0);
    });
    it ("Test constructor destination", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(holiday.destination).to.equal("Sofia");
    });
    it ("Test constructor season", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(holiday.season).to.equal("Summer");
    });
    it ("Test constructor insuranceIncluded", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(holiday.insuranceIncluded).to.equal(false);
    });
    it ("Test showVacationers empty", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(holiday.showVacationers()).to.equal("No vacationers are added yet");
    });
    it ("Test addVacationer error", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(() => holiday.addVacationer(123)).to.throw(Error, "Vacationer name must be a non-empty string");
    });
    it ("Test addVacationer error", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(() => holiday.addVacationer(' ')).to.throw(Error, "Vacationer name must be a non-empty string");
    });
    it ("Test addVacationer error", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(() => holiday.addVacationer('Pesho')).to.throw(Error, "Name must consist of first name and last name");
    });
    it ("Test addVacationer error", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(() => holiday.addVacationer('Pesho Gosho Misho')).to.throw(Error, "Name must consist of first name and last name");
    });
    it ("Test addVacationer", () => {
        let holiday = new list("Sofia", 'Summer');
        holiday.addVacationer('Misho Ivanov');
        holiday.addVacationer('Gosho Petrov');
        expect(holiday.showVacationers()).to.equal("Vacationers:\nMisho Ivanov\nGosho Petrov");
    });
    it ("Test insuranceIncluded invalid", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(() => holiday.insuranceIncluded = "Pesho").to.throw(Error, "Insurance status must be a boolean");
    });
    it ("Test insuranceIncluded invalid", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(() => holiday.insuranceIncluded = 123).to.throw(Error, "Insurance status must be a boolean");
    });
    it ("Test insuranceIncluded", () => {
        let holiday = new list("Sofia", 'Summer');
        holiday.insuranceIncluded = true;
        expect(holiday.insuranceIncluded).to.equal(true);
    });
    it ("Test generateHolidayPackage invalid", () => {
        let holiday = new list("Sofia", 'Summer');
        expect(() => holiday.generateHolidayPackage()).to.throw(Error, "There must be at least 1 vacationer added");
    });
    it ("Test generateHolidayPackage", () => {
        let holiday = new list("Sofia", 'Summer');
        holiday.addVacationer('Pesho Ivanov');
        let result = `Holiday Package Generated\nDestination: Sofia\nVacationers:\nPesho Ivanov\nPrice: 600`;
        expect(holiday.generateHolidayPackage()).to.equal(result);
    });
    it ("Test generateHolidayPackage", () => {
        let holiday = new list("Sofia", 'Winter');
        holiday.addVacationer('Pesho Ivanov');
        let result = `Holiday Package Generated\nDestination: Sofia\nVacationers:\nPesho Ivanov\nPrice: 600`;
        expect(holiday.generateHolidayPackage()).to.equal(result);
    });
    it ("Test generateHolidayPackage", () => {
        let holiday = new list("Sofia", 'Ivan');
        holiday.addVacationer('Pesho Ivanov');
        let result = `Holiday Package Generated\nDestination: Sofia\nVacationers:\nPesho Ivanov\nPrice: 400`;
        expect(holiday.generateHolidayPackage()).to.equal(result);
    });
    it ("Test generateHolidayPackage", () => {
        let holiday = new list("Sofia", 'Ivan');
        holiday.addVacationer('Pesho Ivanov');
        holiday.insuranceIncluded = true;
        let result = `Holiday Package Generated\nDestination: Sofia\nVacationers:\nPesho Ivanov\nPrice: 500`;
        expect(holiday.generateHolidayPackage()).to.equal(result);
    });
    it ("Test generateHolidayPackage", () => {
        let holiday = new list("Sofia", 'Summer');
        holiday.addVacationer('Pesho Ivanov');
        holiday.insuranceIncluded = true;
        let result = `Holiday Package Generated\nDestination: Sofia\nVacationers:\nPesho Ivanov\nPrice: 700`;
        expect(holiday.generateHolidayPackage()).to.equal(result);
    });
    it ("Test generateHolidayPackage", () => {
        let holiday = new list("Sofia", 'Winter');
        holiday.addVacationer('Pesho Ivanov');
        holiday.addVacationer('Misho Petrov');
        holiday.insuranceIncluded = true;
        let result = `Holiday Package Generated\nDestination: Sofia\nVacationers:\nPesho Ivanov\nMisho Petrov\nPrice: 1100`;
        expect(holiday.generateHolidayPackage()).to.equal(result);
    });
});