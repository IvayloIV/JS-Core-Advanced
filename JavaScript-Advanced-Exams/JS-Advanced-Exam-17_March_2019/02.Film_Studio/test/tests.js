let FilmStudio = require('../filmStudio');
let expect = require('chai').expect;

describe("Test my solve", () => {
    let list;

    beforeEach(() => {
        list = FilmStudio;
    });

    it ("Test constructor", () => {
        let t = new list('pesho');
        expect(t.name).to.equal('pesho');
    });

    it ("Test constructor", () => {
        let t = new list('pesho');
        expect(t.films).to.deep.equal([]);
    });

    it ("Test makeMovie", () => {
        let t = new list('pesho');
        expect(() => t.makeMovie('test')).to.throw('Invalid arguments count');
    });

    it ("Test makeMovie", () => {
        let t = new list('pesho');
        expect(() => t.makeMovie(23, 'gosho')).to.throw('Invalid arguments');
    });

    it ("Test makeMovie", () => {
        let t = new list('pesho');
        expect(() => t.makeMovie('gosho', {})).to.throw('Invalid arguments');
    });

    it ("Test makeMovie", () => {
        let t = new list('pesho');
        expect(() => t.makeMovie('gosho', 'toto')).to.throw('Invalid arguments');
    });

    it ("Test makeMovie", () => {
        let t = new list('pesho');
        expect(t.makeMovie('gosho', ['Zvqr', 'Vrag'])).to.deep.equal({
            filmName: "gosho",
            filmRoles: [
                {
                    actor: false,
                    role: "Zvqr"
                },
                {
                    actor: false,
                    role: "Vrag"
                }
            ]
        });
    });

    it ("Test makeMovie", () => {
        let t = new list('pesho');
        t.makeMovie('gosho', ['Zvqr', 'Vrag'])
        expect(t.makeMovie('gosho', ['Kral'])).to.deep.equal({
            "filmName": "gosho 2",
            "filmRoles": [
                {
                    "actor": false,
                    "role": "Kral"
                }
            ]
        });
    });

    it ("Test casting", () => {
        let t = new list('pesho');
        expect(t.casting('pesho', ['Test'])).to.equal(`There are no films yet in pesho.`);
    });

    it ("Test casting", () => {
        let t = new list('pesho');
        t.makeMovie('gosho', ['Zvqr', 'Vrag'])
        expect(t.casting('gosho', ['Test'])).to.equal(`gosho, we cannot find a Test role...`);
    });

    it ("Test casting", () => {
        let t = new list('pesho');
        t.makeMovie('gosho', ['Zvqr', 'Vrag'])
        expect(t.casting('gosho', ['Test', 'Pop'])).to.equal(`gosho, we cannot find a Test,Pop role...`);
    });

    it ("Test casting", () => {
        let t = new list('pesho');
        t.makeMovie('gosho', ['Zvqr', 'Vrag'])
        expect(t.casting('gosho', 'Zvqr')).to.equal(`You got the job! Mr. gosho you are next Zvqr in the gosho. Congratz!`);
    });

    it ("Test casting", () => {
        let t = new list('pesho');
        t.makeMovie('gosho', ['Zvqr', 'Vrag'])
        expect(t.casting('gosho', 'Zvqr2')).to.equal(`gosho, we cannot find a Zvqr2 role...`);
    });

    it ("Test lookForProducer", () => {
        let t = new list('pesho');
        t.makeMovie('gosho', ['Zvqr', 'Vrag'])
        expect(() => t.lookForProducer('moo')).to.throw(Error, `moo do not exist yet, but we need the money...`);
    });

    it ("Test lookForProducer", () => {
        let t = new list('pesho');
        t.makeMovie('gosho', ['Zvqr', 'Vrag'])
        expect(t.lookForProducer('gosho')).to.equal(`Film name: gosho\nCast:\nfalse as Zvqr\nfalse as Vrag\n`);
    });

    it ("Test lookForProducer", () => {
        let t = new list('pesho');
        t.makeMovie('gosho', ['Zvqr', 'Vrag'])
        expect(t.lookForProducer('gosho')).to.equal(`Film name: gosho\nCast:\nfalse as Zvqr\nfalse as Vrag\n`);
    });
});