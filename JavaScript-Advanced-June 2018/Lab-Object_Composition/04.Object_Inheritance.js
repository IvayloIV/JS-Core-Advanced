function solve(arr) {
    let commands = (function () {
        let obj = {};
        function create(name, rubbish, parentName) {
            if (parentName === undefined) {
                obj[name] = {};
            } else {
                obj[name] = Object.create(obj[parentName]);
            }
        }
        function set(name, key, value) {
            obj[name][key] = value;
        }
        function print(name) {
            let result = [];
            for (let key in obj[name]) {
                result.push(`${key}:${obj[name][key]}`);
            }
            console.log(result.join(', '));
        }
        return {create, set, print};
    })();

    for (let element of arr) {
        let tokens = element.split(' ');
        commands[tokens[0]](tokens[1], tokens[2], tokens[3]);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);