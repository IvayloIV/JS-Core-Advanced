let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = require('./shared-object');

describe("test solve", function() {
    beforeEach(() => {
        document.body.innerHTML =
            `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
        </div>`
    });
    before(()=>global.$ = $);
    it("test name null", function() {
        expect(typeof sharedObject.changeName).to.be.equal("function");
    });
    it("test name null", function() {
        expect(typeof sharedObject.changeIncome).to.be.equal("function");
    });
    it("test name null", function() {
        expect(typeof sharedObject.updateName).to.be.equal("function");
    });
    it("test changeIncome invalid", function() {
        sharedObject.changeIncome('Bla Bla');
        expect(sharedObject.income).to.be.equal(null);
    });
    it("test changeIncome invalid", function() {
        sharedObject.changeIncome(NaN);
        expect(sharedObject.income).to.be.equal(null);
    });
    it("test changeIncome invalid", function() {
        sharedObject.changeIncome(-1);
        expect(sharedObject.income).to.be.equal(null);
    });
    it("test changeIncome invalid", function() {
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.be.equal(null);
    });
    it("test changeIncome", function() {
        sharedObject.changeIncome(3);
        expect(sharedObject.income).to.be.equal(3);
    });
    it("test changeIncome", function() {
        sharedObject.changeIncome(3);
        expect($('#income').val()).to.be.equal('3');
    });
    it("test updateName invalid", function() {
        sharedObject.name = '';
        sharedObject.updateName('Misho');
        expect(sharedObject.name).to.be.equal('');
        expect($('#name').val()).to.be.equal('');
    });
    it("test updateName", function() {
        sharedObject.name = '';
        sharedObject.changeName('Gosho');
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal('Gosho');
    });
    it("test updateIncome invalid", function() {
        $('#income').val('Gosho');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(3);
    });
    it("test updateIncome invalid", function() {
        $('#income').val(3.2);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(3);
    });
    it("test updateIncome invalid", function() {
        $('#income').val(NaN);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(3);
    });
    it("test updateIncome invalid", function() {
        $('#income').val(0);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(3);
    });
    it("test updateIncome invalid", function() {
        $('#income').val(-1);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(3);
    });
    it("test updateIncome invalid", function() {
        $('#income').val(5);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(5);
    });
    it("test changeName", function() {
        sharedObject.changeName('');
        expect(sharedObject.name).to.be.equal('Gosho');
    });
    it("test changeIncome", function() {
        sharedObject.changeIncome('');
        expect(sharedObject.income).to.be.equal(5);
    });
    it("test changeIncome", function() {
        sharedObject.changeIncome(NaN);
        expect(sharedObject.income).to.be.equal(5);
    });
    it("test changeIncome", function() {
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.be.equal(5);
    });
    it("test changeIncome", function() {
        sharedObject.changeIncome(-2);
        expect(sharedObject.income).to.be.equal(5);
    });
    it("test changeIncome", function() {
        sharedObject.changeIncome(6);
        expect(sharedObject.income).to.be.equal(6);
    });
    describe("updateIncome function", function () {
        it("should return previous value if value is NaN", function () {
            sharedObject.changeIncome(15);
            $("#income").val("abc");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(15);
            expect($("#income").val()).to.equal("abc");
        });
        it("should return previous value if value is floating point number", function () {
            sharedObject.changeIncome(15);
            $("#income").val("3.6");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(15);
            expect($("#income").val()).to.equal("3.6");
        });
        it("should return previous value if value is negative number", function () {
            sharedObject.changeIncome(15);
            $("#income").val("-10");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(15);
            expect($("#income").val()).to.equal("-10");
        });
        it("should return previous value if value is 0", function () {
            sharedObject.changeIncome(15);
            $("#income").val("0");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(15);
            expect($("#income").val()).to.equal("0");
        });
        it("should return correct value id value is positive integer", function () {
            sharedObject.changeIncome(15);
            $("#income").val("20");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(20);
            expect($("#income").val()).to.equal("20");
        })
    });
    describe("change name function", function () {
        it("should return number for number parameter", function () {
            sharedObject.changeName(15);
            expect(sharedObject.name).to.equal(15);
            expect($('#name').val()).to.equal('15');
        });
        it("should return previous name for empty string parameter", function () {
            sharedObject.changeName("Pesho");
            sharedObject.changeName("");
            expect(sharedObject.name).to.equal("Pesho");
            expect($('#name').val()).to.equal("Pesho");
        });
        it("should return new name after calling the function more than one time", function () {
            sharedObject.changeName("Pesho");
            sharedObject.changeName("Gosho");
            expect(sharedObject.name).to.equal("Gosho");
            expect($('#name').val()).to.equal("Gosho");
        });
    });
    describe("changeIncome function", function () {
        it("should return previous value after calling with 0 parameter", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(5);
            expect($('#income').val()).to.equal("5");
        });
        it("should return correct result after calling with integer", function () {
            sharedObject.changeIncome(10);
            expect(sharedObject.income).to.equal(10);
            expect($('#income').val()).to.equal("10");
        });
        it("should return previous value after calling with negative parameter", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).to.equal(5);
            expect($('#income').val()).to.equal("5");
        });
    });

    describe("updateName function", function () {
        it("should successfully change name with non empty string", function () {
            sharedObject.changeName("Pesho");
            $("#name").val("Gosho");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal("Gosho");
            expect($("#name").val()).to.equal("Gosho");
        });
        it("should not change name with empty string", function () {
            sharedObject.changeName("Pesho");
            $("#name").val("");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal("Pesho");
            expect($("#name").val()).to.equal("");
        });
    });
});