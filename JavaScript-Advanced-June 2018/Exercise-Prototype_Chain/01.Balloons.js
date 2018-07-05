function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbonn = {
                color: ribbonColor,
                length: ribbonLength
            };
        }
        get ribbon() {
            return this._ribbonn;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }
    return {Balloon, PartyBalloon, BirthdayBalloon};
}

let obj = solve();
let Balloon = obj.Balloon;
let PartyBalloon = obj.PartyBalloon;
let BirthdayBalloon = obj.BirthdayBalloon;

let b = new BirthdayBalloon('red', 23, 'Cool');
console.log(b);