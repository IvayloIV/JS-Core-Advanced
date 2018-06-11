let Entity = require('./Entity');
class Dog extends Entity{
    constructor(name){
        super(name);
    }
    toString(){
        return `${this.name} barks!`;
    }
}
module.exports = Dog;