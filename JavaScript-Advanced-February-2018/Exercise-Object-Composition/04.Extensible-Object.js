function result() {
    let myObj = {
        extend : function(obj) {
            for (let key of Object.keys(obj)) {
                if (typeof obj[key] === "function"){
                    Object.getPrototypeOf(myObj)[key] = obj[key];
                } else{
                    myObj[key] = obj[key];
                }
            }
        }
    };

    return  myObj;
}

let template = {
    health: 100,
    mana: 50
};
let testObject = result();
testObject.extend(template);
console.log(testObject.hasOwnProperty('health'));