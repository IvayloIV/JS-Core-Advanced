let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = require('./Shared_Object');

document.body.innerHTML =
    `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
        </div>`;

global.$ = $;

describe("Test my solve", () => {
    it ("Test is having changeName func", () => {
        expect(sharedObject.hasOwnProperty('changeName')).to.equal(true);
    });
    it ("Test is having changeIncome func", () => {
        expect(sharedObject.hasOwnProperty('changeIncome')).to.equal(true);
    });
    it ("Test is having updateName func", () => {
        expect(sharedObject.hasOwnProperty('updateName')).to.equal(true);
    });
    it ("Test is having updateIncome func", () => {
        expect(sharedObject.hasOwnProperty('updateIncome')).to.equal(true);
    });
    it ("Test is having updateIncome func", () => {
        expect(sharedObject.hasOwnProperty('updateIncome')).to.equal(true);
    });
    it ("Test name", () => {
        expect(sharedObject.name).to.equal(null);
    });
    it ("Test income", () => {
        expect(sharedObject.income).to.equal(null);
    });
    it ("Test changeName with correct name", () => {
        sharedObject.changeName('Pesho');
        expect($('#name').val()).to.equal('Pesho');
    });
    it ("Test changeName with empty name", () => {
        sharedObject.changeName('Pesho');
        sharedObject.changeName('');
        expect($('#name').val()).to.equal('Pesho');
    });
    it ("Test changeIncome with incorrect num", () => {
        sharedObject.changeIncome('Pesho');
        expect($('#income').val()).to.equal('');
    });
    it ("Test changeIncome with incorrect num", () => {
        sharedObject.changeIncome(0);
        expect($('#income').val()).to.equal('');
    });
    it ("Test changeIncome with incorrect num", () => {
        sharedObject.changeIncome(-1);
        expect($('#income').val()).to.equal('');
    });
    it ("Test changeIncome with incorrect num", () => {
        sharedObject.changeIncome(2.3);
        expect($('#income').val()).to.equal('');
    });
    it ("Test changeIncome with correct num", () => {
        sharedObject.changeIncome(6);
        expect($('#income').val()).to.equal('6');
    });
    it ("Test updateName with incorrect name", () => {
        sharedObject.updateName();
        expect(sharedObject.name).to.equal('Pesho');
    });
    it ("Test updateName with correct name", () => {
        sharedObject.changeName('');
        sharedObject.updateName();
        expect(sharedObject.name).to.equal('Pesho');
    });
    it ("Test updateName with correct name", () => {
        sharedObject.changeName('Miki');
        sharedObject.updateName();
        expect(sharedObject.name).to.equal('Miki');
    });
    it ("Test updateIncome with incorrect num", () => {
        sharedObject.changeIncome(1);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(1);
    });
    it ("Test updateIncome with incorrect num", () => {
        sharedObject.changeIncome(null);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(1);
    });
    it ("Test changeIncome with incorrect num", () => {
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.equal(1);
    });
    it ("Test updateName with correct name", () => {
        sharedObject.changeName('Miki');
        $('#name').val('');
        sharedObject.updateName();
        expect(sharedObject.name).to.equal('Miki');
    });
    it ("Test updateIncome with incorrect num", () => {
        sharedObject.changeIncome(2);
        $('#income').val('pesho');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(2);
    });
    it ("Test updateIncome with incorrect num", () => {
        sharedObject.changeIncome(2);
        $('#income').val('-2');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(2);
    });
    it ("Test updateIncome with incorrect num", () => {
        sharedObject.changeIncome(2);
        $('#income').val('0');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(2);
    });
    it ("Test updateIncome with incorrect num", () => {
        sharedObject.changeIncome(2);
        $('#income').val('2.3');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(2);
    });
});