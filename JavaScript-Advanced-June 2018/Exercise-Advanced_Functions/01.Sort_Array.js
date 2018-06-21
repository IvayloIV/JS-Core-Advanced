function solve(arr, sortType) {
    let sorting = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };
    return arr.sort(sorting[sortType]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));