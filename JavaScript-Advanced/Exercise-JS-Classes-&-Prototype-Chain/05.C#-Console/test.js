let Console = require('./05.C#-Console');
let expect = require('chai').expect;

describe("Test my solve", () => {
    it ("writeLine whit one string", () => {
        expect(Console.writeLine('balbla')).to.equal("balbla");
    });
    it ("writeLine whit one obj", () => {
        expect(Console.writeLine({x : 3, y : 4})).to.equal(`{"x":3,"y":4}`);
    });
    it ("multiple arguments, first is string", () => {
        expect(() => Console.writeLine(234, 'Gosho')).to.throw(TypeError, 'No string format given!');
    });
    it ("multiple arguments, placeholders", () => {
        expect(() => Console.writeLine('The sum of {0} and {1} is {2}', 'Gosho', 'Pesho')).to.throw(RangeError, 'Incorrect amount of parameters given!');
    });
    it ("multiple arguments, max placeholders", () => {
        expect(() => Console.writeLine('The sum of {5} and {1} is {2}', 'Gosho', 'Pesho', 'Ivan')).to.throw(RangeError, 'Incorrect placeholders given!');
    });
    it ("multiple arguments, valid placeholders", () => {
        expect(Console.writeLine('The sum of {0} and {1} is {2}', 'Gosho', 'Pesho', 'Ivan')).to.equal(`The sum of Gosho and Pesho is Ivan`);
    });
    it ("multiple arguments, big nums", () => {
        expect(Console.writeLine('The sum of {0}{1}{2}{3}{4}{5}{6}{7}{8}{9} and {10}', '11', '22', '33', '1', '2', '3', '4', '5', '6', '7', '8')).to.equal(`The sum of 1122331234567 and 8`);
    });
});