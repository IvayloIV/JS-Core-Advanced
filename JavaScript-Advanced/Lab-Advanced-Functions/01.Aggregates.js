function calculate(arr) {
    function solve(funct) {
        let result = arr[0];
        for(let element of arr.slice(1)){
            let r = element;
            result = funct(result, element);
        }
        return result;
    }
    let sum = solve((a, b) => a + b);
    let min = solve((a, b) => a < b ? a : b);
    let max = solve((a, b) => a > b ? a : b);
    let product = solve((a,b) => a * b);
    let join = solve((a, b) => '' + a + b);
    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}
calculate([2, 3, 10, 5]);