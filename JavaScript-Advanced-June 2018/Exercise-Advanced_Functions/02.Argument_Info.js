function solve() {
    let total = {};
    for (let argument of arguments) {
        let type = typeof argument;
        if (!total.hasOwnProperty(type)) {
            total[type] = 0;
        }
        total[type]++;
        console.log(`${type}: ${argument}`);
    }
    for (let totalElement of Object.entries(total).sort((a, b) => b[1] - a[1])) {
        console.log(`${totalElement[0]} = ${totalElement[1]}`);
    }
}

solve({ name: 'bob'}, 3.333, 9.999);