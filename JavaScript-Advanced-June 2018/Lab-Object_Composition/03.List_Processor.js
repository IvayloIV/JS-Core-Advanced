//reveal module pattern
function solve1(arr) {
    let processor = (function () {
        let result = [];
        function add(str) {
            result.push(str);
        }
        function remove(str) {
            result = result.filter(a => a !== str);
        }
        function print() {
            console.log(result.join(','));
        }
        return {add, remove, print};
    })();
    for (let element of arr) {
        let tokens = element.split(' ');
        processor[tokens[0]](tokens[1]);
    }
}

//module pattern
function solve2(arr) {
    let processor = (function () {
        let result = [];
        return {
            add: (str) => result.push(str),
            remove: (str) => result = result.filter(a => a !== str),
            print: () => console.log(result.join(','))
        };
    })();
    for (let element of arr) {
        let tokens = element.split(' ');
        processor[tokens[0]](tokens[1]);
    }
}

solve2(['add hello', 'add again', 'remove hello', 'add again', 'print']);