function result() {
    return {
        extend: function (obj) {
            for (let element in obj) {
                if (typeof obj[element] === 'function') {
                    Object.getPrototypeOf(this)[element] = obj[element];
                } else {
                    this[element] = obj[element];
                }
            }
            return this;
        }
    }
}


let template = {
    extensionMethod: function () {
        console.log("From extension method")
    },
    ivan: 50
};

let testObject = result();
testObject.extend(template);
console.log(testObject.hasOwnProperty('ivan'));