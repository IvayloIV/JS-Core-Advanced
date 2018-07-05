function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.currentMelon = 0;
            this.allMelon = ['Watermelon', 'Firemelon', 'Earthmelon', 'Airmelon'];
        }

        morph() {
            this.currentMelon++;
        }

        toString() {
            let str = super.toString().substring(19);
            return `Element: ${(this.allMelon[this.currentMelon % this.allMelon.length]).slice(0, -5)}\n` + str;
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}

let Melolemonmelon = solve().Melolemonmelon;
let m = new Melolemonmelon(23, 'Kiwi');
m.morph();
console.log(m.toString());