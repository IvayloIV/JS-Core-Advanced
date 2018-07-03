let solve = require('./02.Inheriting_toString');
let Person = solve.Person;
let Teacher = solve.Teacher;
let Student = solve.Student;

function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

let p = new Person('ivan', 'ivan@abv.bg');
let t = new Teacher('ivan', 'ivan@abv.bg', 'Math');
let s = new Student('ivan', 'ivan@abv.bg', 'JS');
extendClass(Person);
console.log(t.toSpeciesString());