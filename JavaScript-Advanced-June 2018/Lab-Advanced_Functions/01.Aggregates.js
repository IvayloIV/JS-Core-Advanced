function solve(arr) {
    console.log(`Sum = ${reduce(arr, (a, b) => a + b)}`);
    console.log(`Min = ${reduce(arr, (a, b) => Math.min(a, b))}`);
    console.log(`Max = ${reduce(arr, (a, b) => Math.max(a, b))}`);
    console.log(`Product = ${reduce(arr, (a, b) => a * b)}`);
    console.log(`Join = ${reduce(arr, (a, b) => '' + a + b)}`);

    function reduce(currentArr, func) {
        let result = currentArr[0];
        for (let element of currentArr) {
            result = func(result, element);
        }
        return result;
    }
}

solve([2, 3, 10, 5]);