class  Repository{
    constructor(prop){
        this.prop = prop;
        this.id = 0;
        this.data = new Map();
    }

    add(entity){
        for (let obj of Object.entries(this.prop)) {
            let key = obj[0];
            if (!entity.hasOwnProperty(key)){
                throw new Error(`Property ${key} is missing from the entity!`);
            } else if (this.prop[key] !== typeof entity[key]){
                throw new Error(`Property ${key} is of incorrect type!`);
            }
        }
        this.data.set(this.id++, entity);
        return this.id - 1;
    }

    isValid(id){
        if (!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
    }
    get (id){
        this.isValid(id);
        return this.data.get(id);
    }

    update(id, newEntity){
        this.isValid(id);
        this.data.set(id, newEntity);
    }

    del(id){
        this.isValid(id);
        this.data.delete(id);
    }

    get count(){
        return this.data.size;
    }
}

// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
};
