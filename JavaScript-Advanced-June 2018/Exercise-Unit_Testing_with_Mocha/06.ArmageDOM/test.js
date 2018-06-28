let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let nuke = require('./ArmageDOM');

global.$ = $;

describe("Test my solve", () => {
    beforeEach(() => {
        document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
    });
    it ("Test nuke with #target > div", () => {
        nuke('#target > div', '.target');
        expect($('#target > div').toArray().length).to.equal(1);
    });
    it ("Test nuke with .inside > span", () => {
        nuke('.inside > span', '.nested');
        expect($('.inside > span').toArray().length).to.equal(1);
    });
    it ("Test nuke with incorrect", () => {
        nuke('.inside', '.inside');
        expect($('.inside').toArray().length).to.equal(1);
    });
    it ("Test nuke with span", () => {
        nuke('.inside', '.nested');
        expect($('#target > div').toArray().length).to.equal(3);
    });
});