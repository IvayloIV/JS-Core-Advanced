function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if (new.target === Computer){
                throw new Error("This is abstract");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(curretenBattery) {
            if (!(curretenBattery instanceof Battery)) {
                throw new TypeError;
            }
            this._battery = curretenBattery;
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(currentMonitor) {
            if (!(currentMonitor instanceof Monitor)) {
                throw new TypeError;
            }
            this._monitor = currentMonitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(currentKeyboard) {
            if (!(currentKeyboard instanceof Keyboard)) {
                throw new TypeError;
            }
            this._keyboard = currentKeyboard;
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
let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

module.exports = {Laptop, Battery};