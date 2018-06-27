function solve(obj) {
    let engine = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ];
    let wheelSize = obj['wheelsize'] % 2 === 0 ? obj['wheelsize'] - 1 : obj['wheelsize'];
    return {
        model: obj['model'],
        engine: calculateVolume(obj['power']),
        carriage: {
            type: obj['carriage'],
            color: obj['color']
        },
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    };

    function calculateVolume(power) {
        let diff = undefined;
        let bestPart = undefined;
        for (let engineElement of engine) {
            let currentDiff = Math.abs(engineElement['power'] - power);
            if (diff === undefined || currentDiff < diff) {
                bestPart = engineElement;
                diff = currentDiff;
            }
        }
        return bestPart;
    }
}

console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));