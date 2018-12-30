let SoftUniFy = require('./SoftUniFy');
let expect = require('chai').expect;

describe("Test my solve", () => {
    let list;

    beforeEach(() => {
        list = SoftUniFy;
    });

    it ("Test downloadSong", () => {
        expect(list.prototype.hasOwnProperty('downloadSong')).to.equal(true);
    });

    it ("Test playSong", () => {
        expect(list.prototype.hasOwnProperty('playSong')).to.equal(true);
    });

    it ("Test songsList", () => {
        expect(list.prototype.hasOwnProperty('songsList')).to.equal(true);
    });

    it ("Test rateArtist", () => {
        expect(list.prototype.hasOwnProperty('rateArtist')).to.equal(true);
    });

    it ("Test constructor", () => {
        let fy = new list();
        expect(fy.allSongs).to.deep.equal({});
    });

    it ("Test downloadSong", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        expect(fy.allSongs['Mo']['songs']).to.deep.equal(['Waka - Shakir']);
    });

    it ("Test downloadSong", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        expect(fy.allSongs['Mo']['songs']).to.deep.equal(['Waka - Shakir', 'Waka2 - Shakir2']);
    });

    it ("Test downloadSong", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        expect(fy.allSongs['Mo']['rate']).to.equal(0);
    });

    it ("Test downloadSong", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        expect(fy.allSongs['Mo']['votes']).to.equal(0);
    });

    it ("Test downloadSong", () => {
        let fy = new list();
        let value = fy.downloadSong('Mo', 'Waka', "Shakir");
        expect(JSON.stringify(value)).to.equal(`{"allSongs":{"Mo":{"rate":0,"votes":0,"songs":["Waka - Shakir"]}}}`);
    });

    it ("Test playSong", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        expect(fy.playSong('Waka')).to.equal(`Mo:\nWaka - Shakir\nJo:\nWaka - Shakir2\n`);
    });

    it ("Test playSong", () => {
        let fy = new list();
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        expect(fy.playSong('Waka3')).to.equal(`You have not downloaded a Waka3 song yet. Use SoftUniFy's function downloadSong() to change that!`);
    });

    it ("Test songsList", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        expect(fy.songsList).to.equal("Waka - Shakir\n" +
            "Waka2 - Shakir2\n" +
            "Waka - Shakir2");
    });

    it ("Test songsList", () => {
        let fy = new list();
        expect(fy.songsList).to.equal("Your song list is empty");
    });

    it ("Test rateArtist", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        expect(fy.rateArtist()).to.equal("The undefined is not on your artist list.");
    });

    it ("Test rateArtist", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        expect(fy.rateArtist('To')).to.equal("The To is not on your artist list.");
    });

    it ("Test rateArtist", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        expect(fy.rateArtist('Mo')).to.equal(0);
    });

    it ("Test rateArtist", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        expect(fy.rateArtist('Mo', 3)).to.equal(3);
    });

    it ("Test rateArtist", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");

        expect(fy.rateArtist('Mo', "asdas")).to.equal(0);
    });

    it ("Test rateArtist", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        fy.rateArtist('Mo', 10);

        expect(fy.allSongs['Mo']['rate']).to.equal(10);
    });

    it ("Test rateArtist", () => {
        let fy = new list();
        fy.downloadSong('Mo', 'Waka', "Shakir");
        fy.downloadSong('Jo', 'Waka', "Shakir2");
        fy.downloadSong('Mo', 'Waka2', "Shakir2");
        fy.rateArtist('Mo', 10);

        expect(fy.allSongs['Mo']['votes']).to.equal(1);
    });
});