let rgbToHexColor = require('./RGB-to-Hex');
let expect = require('../../../../Unit tests/node_modules/chai/chai').expect;

describe("rgbToHexColor(arr)", function() {
    it("should return undefined for ('Pesho', 3, 1)", function() {
        expect(rgbToHexColor('Pesho', 3, 1)).to.be.equal(undefined);
    });
    it("should return undefined for (3, 'Pesho', 1)", function() {
        expect(rgbToHexColor(3, 'Pesho', 1)).to.be.equal(undefined);
    });
    it("should return undefined for (3, 2, 'Pesho')", function() {
        expect(rgbToHexColor(3, 2, 'Pesho')).to.be.equal(undefined);
    });
    it("should return undefined for (3, 2, 'Pesho')", function() {
        expect(rgbToHexColor(3, 2, 'Pesho')).to.be.equal(undefined);
    });
    it("should return undefined for (-3, 2, 3)", function() {
        expect(rgbToHexColor((-3, 2, 3))).to.be.equal(undefined);
    });
    it("should return undefined for (3, -2, 3)", function() {
        expect(rgbToHexColor(3, -2, 3)).to.be.equal(undefined);
    });
    it("should return undefined for (3, 2, -3)", function() {
        expect(rgbToHexColor(3, 2, -3)).to.be.equal(undefined);
    });
    it("should return undefined for (256, 2, 3)", function() {
        expect(rgbToHexColor(256, 2, 3)).to.be.equal(undefined);
    });
    it("should return undefined for (4, 256, 3)", function() {
        expect(rgbToHexColor(4, 256, 3)).to.be.equal(undefined);
    });
    it("should return undefined for (4, 1, 256)", function() {
        expect(rgbToHexColor(4, 5, 256)).to.be.equal(undefined);
    });
    it("should return #002D17 for (0, 1, 4)", function() {
        expect(rgbToHexColor(0, 45, 23)).to.be.equal('#002D17');
    });
    it("should return #020017 for (2, 0, 4)", function() {
        expect(rgbToHexColor(2, 0, 23)).to.be.equal('#020017');
    });
    it("should return #022B00 for (2, 43, 0)", function() {
        expect(rgbToHexColor(2, 43, 0)).to.be.equal('#022B00');
    });
    it("should return #FF2B04 for (255, 43, 4)", function() {
        expect(rgbToHexColor(255, 43, 4)).to.be.equal('#FF2B04');
    });
    it("should return #41FF04 for (65, 255, 4)", function() {
        expect(rgbToHexColor(65, 255, 4)).to.be.equal('#41FF04');
    });
    it("should return #4122FF for (65, 34, 255)", function() {
        expect(rgbToHexColor(65, 34, 255)).to.be.equal('#4122FF');
    });
});