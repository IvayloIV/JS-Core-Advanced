function solve(arr) {
    let getElement = (function() {
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
        return {
            add,
            remove,
            print
        };
    })();
    for (let element of arr) {
        let elementTokens = element.split(' ');
        getElement[elementTokens[0]](elementTokens[1]);
    }
}
solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);