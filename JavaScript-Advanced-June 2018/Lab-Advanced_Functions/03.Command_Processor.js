function solve(arr) {
    let processor = (function () {
        let result = '';
        return {
            append: (item) => result += item,
            removeStart: (n) => result = result.substring(Number(n)),
            removeEnd: (n) => result = result.substring(0, result.length - Number(n)),
            print: () => console.log(result)
        }
    })();
    for (let element of arr) {
        let [command, item] = element.split(' ');
        processor[command](item);
    }
}

solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);
