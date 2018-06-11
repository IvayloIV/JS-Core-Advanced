class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat){
        if (typeof otherRat === "object"){
            this.unitedRats.push(otherRat);
        }
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){
        let result = "";
        result += this.name + "\n";
        for (let element of this.unitedRats) {
            result += `##${element}` + "\n";
        }
        return result.substring(0, result.length - 1);
    }
}
let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho

