function solve(obj) {
    if (obj.handsShaking !== false) {
        let sum = (obj.experience * 0.1) * obj.weight;
        obj.bloodAlcoholLevel += sum;
        obj.handsShaking = false;
    }
    return obj;
}

console.log(solve({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));