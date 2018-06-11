function solution() {
    let products = {
      command : {
          restock,
          prepare,
          report
      },
      currentProduct : {
          protein: 0,
          carbohydrate : 0,
          fat : 0,
          flavour : 0
      },
      recepts: {
        apple : {
            carbohydrate : 1,
            flavour: 2
        },
        coke : {
            carbohydrate: 10,
            flavour : 20
        },
        burger : {
            carbohydrate: 5,
            fat : 7,
            flavour : 3
        },
        omelet : {
            protein: 5,
            fat : 1,
            flavour : 1
        },
        cheverme : {
            protein: 10,
            carbohydrate : 10,
            fat : 10,
            flavour : 10
        }
      }
    };
    return function(element) {
        let elementTokens = element.split(' ');
        return products['command'][elementTokens[0]](elementTokens);
    };

    function restock(arr) {
      products['currentProduct'][arr[1]] = Number(arr[2]);
      return "Success";
    }

    function prepare(arr) {
        let wantedProduct = arr[1];
        let quantity = arr[2];
        let neededProducts = products['recepts'][wantedProduct];
        for (let key of Object.keys(neededProducts)) {
            let currentProduct = key;
            let storage = products['currentProduct'][currentProduct];
            let neededProd = neededProducts[currentProduct] * quantity;
            if (neededProd > storage){
                return `Error: not enough ${currentProduct} in stock`;
            }
        }
        for (let key of Object.keys(neededProducts)) {
            let neededProd = neededProducts[key] * quantity;
            products['currentProduct'][key] -= neededProd;
        }
        return "Success";
    }

    function report() {
        let result = [];
        let totalProducts = products['currentProduct'];
        for (let key of Object.keys(totalProducts)) {
            result.push(`${key}=${totalProducts[key]}`);
        }
        return result.join(' ');
    }
}
let manager = solution();
console.log(manager("prepare cheverme 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("report"));
