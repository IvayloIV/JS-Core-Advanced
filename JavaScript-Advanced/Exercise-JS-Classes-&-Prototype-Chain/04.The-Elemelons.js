function solve() {
    class Melon{
        constructor(weight, melonSort){
            if (new.target === Melon){
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
        get elementIndex(){
            return this.weight * this.melonSort.length;
        }
        toString() {
            let result = `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
            return result;
        }
    }
    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }
    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }
    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }
    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }
    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.count = 0;
            this.arr = ['Water', 'Fire', 'Earth', 'Air'];
        }
        morph(){
            this.count++;
        }
        toString(){
            let result = `Element: ${this.arr[this.count % this.arr.length]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
            return result;
        }
    }
    return {Melon, Airmelon, Earthmelon, Firemelon, Melolemonmelon, Watermelon};
}

let Melon = solve().Melon;
let watermelon = new Melon(12.5, "Kingsize");
watermelon.morph();
console.log(watermelon.toString());
