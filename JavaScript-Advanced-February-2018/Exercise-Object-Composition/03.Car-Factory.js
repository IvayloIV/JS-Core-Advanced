function result(obj) {
    let typeEngines = [{power : 90, volume : 1800},
        {power : 120, volume : 2400},
        {power : 200, volume : 3500}];
    function findEngine(power) {
        let diff = Number.POSITIVE_INFINITY;
        let minPower = {power : 0, volume: 0};
        for (let currentObj of typeEngines) {
            let sum = Math.abs(power - currentObj.power);
            if (sum < diff){
                diff = sum;
                minPower = currentObj;
            }
        }
        return minPower;
    }
    function getCarrige(currentColor, currentCarriage) {
        return {
            type :currentCarriage,
            color : currentColor
        };
    }
    function getWheels(num) {
        if (num % 2 === 0){
            num -= 1;
        }
        return [num, num, num, num];
    }
    return {
        model : obj.model,
        engine : findEngine(obj.power),
        carriage : getCarrige(obj.color, obj.carriage),
        wheels : getWheels(obj.wheelsize)
    };
}

let input = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};
let output = result(input);
console.log(output);