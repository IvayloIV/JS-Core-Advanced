function result(obj) {
    let currentWeigth = obj.weight;
    let currentExperience = obj.experience;
    let currentLevel = obj.bloodAlcoholLevel;
    let isShaking = obj.handsShaking;
    if (isShaking === true){
        currentLevel += (currentWeigth * 0.1) * currentExperience;
    }
    return {
        weight : currentWeigth,
        experience : currentExperience,
        bloodAlcoholLevel : currentLevel,
        handsShaking : false
    };
}
let worker = result({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }

);
console.log(worker);