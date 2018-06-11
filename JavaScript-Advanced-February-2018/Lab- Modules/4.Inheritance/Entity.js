class Entity {
    constructor(name){
        if (new.target === Entity){
            throw new Error("Bad choice!");
        }
        this.name = name;
    }
}
module.exports = Entity;