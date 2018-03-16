let Teacher = require("./02.Inheriting-toString");

function solve(className) {
    className.prototype.species = "Human";
    className.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
solve(Teacher);
let t = new Teacher("Ivan", "ivan@abv.bg", "Math");
console.log(Teacher.prototype);
