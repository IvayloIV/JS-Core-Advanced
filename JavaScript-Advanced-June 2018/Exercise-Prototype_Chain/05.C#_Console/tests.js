let Console = require('./C#_Console');
let expect = require('chai').expect;

describe("Test my solve", () => {
    it ("Test writeLine with one obj", () => {
        expect(Console.writeLine({age: 2})).to.equal('{"age":2}');
    });
    it ("Test writeLine with one str", () => {
        expect(Console.writeLine("pesho")).to.equal('pesho');
    });
    it ("Test writeLine with two parm", () => {
        expect(() => Console.writeLine({}, 'pesho')).to.throw(TypeError, 'No string format given!');
    });
    it ("Test writeLine with two parm", () => {
        expect(() => Console.writeLine({}, 'pesho')).to.throw(TypeError, 'No string format given!');
    });
    it ("Test writeLine with two parm", () => {
        expect(() => Console.writeLine("{0}, {1}", 'pesho')).to.throw(RangeError, 'Incorrect amount of parameters given!');
    });
    it ("Test writeLine with two parm", () => {
        expect(() => Console.writeLine("{3}, {1}", 'pesho', 'mesho')).to.throw(RangeError, 'Incorrect placeholders given!');
    });
    it ("Test writeLine with two parm", () => {
        expect(Console.writeLine("{0}, {1}", 'pesho', 'mesho')).to.equal('pesho, mesho');
    });
    it ("Test writeLine with two parm", () => {
        expect(Console.writeLine("{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}{10}", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).to.equal('012345678910');
    });
});