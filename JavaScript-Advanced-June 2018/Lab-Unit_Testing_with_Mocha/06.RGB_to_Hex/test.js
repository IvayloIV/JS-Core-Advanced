let rgbToHexColor = require('./RGB_to_Hex');
let expect = require('chai').expect;

describe("Test my solve", () => {
    it ("Test rgbToHexColor with invalid input", () => {
        expect(rgbToHexColor('pesho', 1, 1)).to.equal(undefined);
    });
    it ("Test rgbToHexColor with invalid input", () => {
        expect(rgbToHexColor(1, 'pesho', 1)).to.equal(undefined);
    });
    it ("Test rgbToHexColor with invalid input", () => {
        expect(rgbToHexColor(1, 1, 'pesho')).to.equal(undefined);
    });
    it ("Test rgbToHexColor with invalid input", () => {
        expect(rgbToHexColor(-1, 1, 1)).to.equal(undefined);
    });
    it ("Test rgbToHexColor with invalid input", () => {
        expect(rgbToHexColor(1, -1, 1)).to.equal(undefined);
    });
    it ("Test rgbToHexColor with invalid input", () => {
        expect(rgbToHexColor(1, 1, -1)).to.equal(undefined);
    });
    it ("Test rgbToHexColor with invalid input", () => {
        expect(rgbToHexColor(256, 1, 1)).to.equal(undefined);
    });
    it ("Test rgbToHexColor with invalid input", () => {
        expect(rgbToHexColor(1, 256, 1)).to.equal(undefined);
    });
    it ("Test rgbToHexColor with invalid input", () => {
        expect(rgbToHexColor(1, 1, 256)).to.equal(undefined);
    });
    it ("Test rgbToHexColor with input", () => {
        expect(rgbToHexColor(0, 1, 1)).to.equal('#000101');
    });
    it ("Test rgbToHexColor with input", () => {
        expect(rgbToHexColor(1, 0, 1)).to.equal('#010001');
    });
    it ("Test rgbToHexColor with input", () => {
        expect(rgbToHexColor(1, 1, 0)).to.equal('#010100');
    });
    it ("Test rgbToHexColor with input", () => {
        expect(rgbToHexColor(255, 1, 1)).to.equal('#FF0101');
    });
    it ("Test rgbToHexColor with input", () => {
        expect(rgbToHexColor(1, 255, 1)).to.equal('#01FF01');
    });
    it ("Test rgbToHexColor with input", () => {
        expect(rgbToHexColor(1, 1, 255)).to.equal('#0101FF');
    });
});