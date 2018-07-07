let SubscriptionCard = require('./Subscription_Card');
let expect = require('chai').expect;

describe("Test my solve", () => {
    let samp;
    beforeEach(() => {
        samp = SubscriptionCard;
    });
    it ("Test is having addSubscription", () => {
        expect(samp.prototype.hasOwnProperty('addSubscription')).to.equal(true);
    });
    it ("Test is having isValid", () => {
        expect(samp.prototype.hasOwnProperty('isValid')).to.equal(true);
    });
    it ("Test is having firstName", () => {
        expect(samp.prototype.hasOwnProperty('firstName')).to.equal(true);
    });
    it ("Test is having lastName", () => {
        expect(samp.prototype.hasOwnProperty('lastName')).to.equal(true);
    });
    it ("Test is having SSN", () => {
        expect(samp.prototype.hasOwnProperty('SSN')).to.equal(true);
    });
    it ("Test is having isBlocked", () => {
        expect(samp.prototype.hasOwnProperty('isBlocked')).to.equal(true);
    });
    it ("Test is having block", () => {
        expect(samp.prototype.hasOwnProperty('block')).to.equal(true);
    });
    it ("Test is having unblock", () => {
        expect(samp.prototype.hasOwnProperty('unblock')).to.equal(true);
    });
    it ("Test firstName", () => {
        let result = new samp('pesho', 'ivanov', 23);
        expect(result.firstName).to.equal("pesho");
    });
    it ("Test firstName", () => {
        let result = new samp('pesho', 'ivanov', 23);
        expect(result.lastName).to.equal("ivanov");
    });
    it ("Test SSN", () => {
        let result = new samp('pesho', 'ivanov', 23);
        expect(result.SSN).to.equal(23);
    });
    it ("Test isBlocked", () => {
        let result = new samp('pesho', 'ivanov', 23);
        expect(result.isBlocked).to.equal(false);
    });
    it ("Test _subscriptions", () => {
        let result = new samp('pesho', 'ivanov', 23);
        expect(result._subscriptions).to.deep.equal([]);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        result.block();
        expect(result.isValid('kircho', new Date(2018, 6, 11))).to.equal(false);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.block();
        result.unblock();
        expect(result._blocked).to.equal(false);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.block();
        expect(result._blocked).to.equal(true);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        expect(result.isValid('kircho', new Date(2018, 6, 11))).to.equal(true);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        expect(result.isValid('kirch', new Date(2018, 6, 11))).to.equal(false);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        expect(result.isValid('kirch', new Date(2018, 5, 4))).to.equal(true);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        expect(result.isValid('tesho', new Date(2018, 5, 25))).to.equal(false);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        expect(result.isValid('jiji', new Date(2018, 5, 9))).to.equal(true);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        expect(result.isValid('jiji', new Date(2018, 5, 12))).to.equal(true);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        expect(result.isValid('jiji', new Date(2018, 5, 8))).to.equal(false);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        expect(result.isValid('jiji', new Date(2018, 5, 13))).to.equal(false);
    });
    it ("Test addSubscription", () => {
        let result = new samp('pesho', 'ivanov', 23);
        result.addSubscription('kircho', new Date(2018, 5, 6), new Date(2018, 5, 8));
        result.addSubscription('*', new Date(2018, 5, 3), new Date(2018, 5, 5));
        result.addSubscription('jiji', new Date(2018, 5, 9), new Date(2018, 5, 12));
        result.addSubscription('kircho', new Date(2018, 6, 9), new Date(2018, 6, 12));
        expect(result.isValid('jiji123', new Date(2018, 5, 4))).to.equal(true);
    });
});