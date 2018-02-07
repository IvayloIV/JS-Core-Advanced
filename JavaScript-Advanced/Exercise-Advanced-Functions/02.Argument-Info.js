function result(arr) {
    let count = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        if (!count.has(type)){
            count.set(type, 0);
        }
        count.set(type, count.get(type) + 1);
        console.log(`${type}: ${arguments[i]}`);
    }
    let sortedMap = [...count].sort((a, b) => b[1] - a[1]);
    for (let element of sortedMap) {
        console.log(`${element[0]} = ${element[1]}`);
    }
}
result('tom', 44, 42, function () { console.log('Hello world!'); });