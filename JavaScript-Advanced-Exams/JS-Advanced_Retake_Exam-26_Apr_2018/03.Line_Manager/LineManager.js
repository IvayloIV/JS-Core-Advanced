class LineManager {
    constructor(stops) {
        this.stops = stops;
        this._currentStop = 0;
        this._delay = 0;
        this._duration = 0;
    }

    get stops() {
        return this._stops;
    }

    set stops(newStops) {
        for (let newStop of newStops) {
            if (typeof newStop['name'] !== 'string' || typeof newStop['timeToNext'] !== 'number' || newStop['name'] === '' || newStop['timeToNext'] < 0) {
                throw new Error();
            }
        }
        this._stops = newStops;
    }

    get atDepot() {
        return this._currentStop >= this.stops.length - 1;
    }

    get nextStopName() {
        if (this.atDepot) {
            return `At depot.`;
        }
        return this.stops[this._currentStop + 1]['name'];
    }

    get currentDelay() {
        return this._delay;
    }

    arriveAtStop(minutes) {
        if (typeof minutes !== 'number' || minutes <= 0 || this._currentStop >= this.stops.length - 1) {
            throw new Error();
        }
        this._duration += minutes;
        this._delay += (minutes - this.stops[this._currentStop]['timeToNext']);
        this._currentStop++;
        return !this.atDepot;
    }

    toString() {
        let result = `Line summary\n`;
        if (this.atDepot) {
            result += `- Course completed\n`;
        } else {
            result += `- Next stop: ${this.stops[this._currentStop + 1]['name']}\n`;
        }
        result += `- Stops covered: ${this._currentStop}\n`;
        result += `- Time on course: ${this._duration} minutes\n`;
        result += `- Delay: ${this._delay} minutes`;
        return result;
    }
}


// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());
//
// // Should throw an Error (minutes cannot be negative)
// man.arriveAtStop(-4);
// // Should throw an Error (last stop reached)
// man.arriveAtStop(4);
//
// // Should throw an Error at initialization
//  const wrong = new LineManager([
//      { timeToNext: { wrong: 'Should be a number'} }
//  ]);
