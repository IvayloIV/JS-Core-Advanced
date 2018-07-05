let result = require('./06.Computer');
let Battery = result.Battery;
let Keyboard = result.Keyboard;
let Monitor = result.Monitor;
let Computer = result.Computer;
let Laptop = result.Laptop;
let Desktop = result.Desktop;

function solve() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return this.processorSpeed + this.ram + this.hardDiskSpace;
        };
        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram / this.processorSpeed);
        };
    }
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer && this.keyboard.manufacturer === this.monitor.manufacturer;
        };
        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3;
        };
    }
    return {computerQualityMixin, styleMixin};
}

let resultSolve = solve();
let styleMixin = resultSolve.styleMixin;

let k = new Keyboard('razer', 2);
let m = new Monitor('razer', 23, 11);
let d = new Desktop('razer', 1, 2, 4, k, m);
styleMixin(Desktop);
console.log(d.isFullSet());