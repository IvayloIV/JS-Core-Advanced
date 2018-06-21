function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let cook = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    
    function restock(ingredient, count) {
        ingredients[ingredient] += Number(count);
        return `Success`;
    }
    
    function prepare(product, count) {
        for (let element of Object.entries(cook[product])) {
            let totalElements = Number(count) * element[1];
            if (totalElements > ingredients[element[0]]) {
                return `Error: not enough ${element[0]} in stock`;
            }
        }
        for (let element of Object.entries(cook[product])) {
            ingredients[element[0]] -= Number(count) * element[1];
        }
        return 'Success';
    }

    function report() {
        return Object.entries(ingredients).map(e => `${e[0]}=${e[1]}`).join(' ');
    }

    let allCommands = {restock, prepare, report};

    return function (element) {
        let tokens = element.split(' ');
        return allCommands[tokens[0]](tokens[1], tokens[2]);
    };
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
manager("prepare coke 4");     // Error: not enough carbohydrate in stock
manager("report");