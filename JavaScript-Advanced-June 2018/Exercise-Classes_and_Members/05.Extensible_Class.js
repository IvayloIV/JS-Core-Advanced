let solve = (function () {
    let id = 0;
    class Extensible {
        constructor() {
            this.id = id++;
        }
        extend(template) {
            for (let entry of Object.entries(template)) {
                if (typeof entry[1] === 'function') {
                    Extensible.prototype[entry[0]] = entry[1];
                } else {
                    this[entry[0]] = entry[1];
                }
            }
        }
    }
    return Extensible;
})();

let Extensible = solve;
let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);

let template = {
        extensionMethod: function () {console.log('a')},
    extensionProperty: 'someString'
};

obj1.extend(template);
let obj4 = new Extensible();