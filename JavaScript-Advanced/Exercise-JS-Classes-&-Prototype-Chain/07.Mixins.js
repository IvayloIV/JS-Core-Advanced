let Laptop = require('./06.Computer').Laptop;
let Battery = require('./06.Computer').Battery;
function createMixins() {
    function computerQualityMixin(currentClass){
        currentClass.prototype.getQuality = function() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        currentClass.prototype.isFast = function() {
            return this.processorSpeed > (this.ram / 4);
        };
        currentClass.prototype.isRoomy = function() {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }
    function styleMixin(currentClass){
        currentClass.prototype.isFullSet = function() {
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer;
        };
        currentClass.prototype.isClassy = function() {
            return this.battery.expectedLife >= 3 && (this.color === "Silver" || this.color === "Black") && this.weight < 3;
        }
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}

computerQualityMixin(Laptop);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,2.99,"Silver",battery);
console.log(laptop.getQuality());