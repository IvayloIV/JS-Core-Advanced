function solve(arr, sortMethod) {
    let typeSort = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };
    return arr.sort(typeSort[sortMethod]);
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));