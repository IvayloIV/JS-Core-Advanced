function solve() {
    class Base {
        constructor(manufacturer) {
            if (new.target === Base) {
                throw new Error('Abstract class.');
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Base {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Base {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Base {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Base {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Abstract class.');
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(newBattery) {
            if (newBattery instanceof Battery === false) {
                throw new TypeError('New battery is not of Battery class.')
            }
            this._battery = newBattery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(newKeyboard) {
            if (newKeyboard instanceof Keyboard === false) {
                throw new TypeError('New keyboard is not of Keyboard class.')
            }
            this._keyboard = newKeyboard;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(newMonitor) {
            if (newMonitor instanceof Monitor === false) {
                throw new TypeError('New monitor is not of Monitor class.')
            }
            this._monitor = newMonitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let result = solve();
let Battery = result.Battery;
let Keyboard = result.Keyboard;
let Monitor = result.Monitor;
let Computer = result.Computer;
let Laptop = result.Laptop;
let Desktop = result.Desktop;

module.exports = {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop
};