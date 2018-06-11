function solve(arr) {
    let changeMap = (function() {
        let book = new Map();
        function create(name, inhit, parentName) {
            if (inhit){
                inherit(name, parentName);
            } else {
                book.set(name, {});
            }
        }
        function inherit(parentName, name) {
            book.set(parentName, Object.create(book.get(name)));
        }
        function set(name, key, value) {
            let prop = book.get(name);
            prop[key] = value;
        }
        function print(name) {
            let props = book.get(name);
            let result = [];
            for (let element in props) {
                result.push(`${element}:${props[element]}`);
            }
            console.log(result.join(', '));
        }
        return{
            create,
            set,
            print
        };
    })();

    for (let elements of arr) {
        let [command, name, key, value] = elements.split(' ');
        changeMap[command](name, key, value);
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);

