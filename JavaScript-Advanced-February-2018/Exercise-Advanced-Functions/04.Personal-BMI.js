function solve(name, age, weight, height) {
    function calculateBMI(){
        return Math.round((weight / (height * height)) * 10000);
    }
    function calculateStatus(result) {
        if (result < 18.5){
            return "underweight";
        } else if (result < 25) {
            return "normal";
        }else if (result < 30) {
            return "overweight";
        }else if (result >= 30) {
            return "obese";
        }
    }
    let objOutput = {
        name: name,
        personalInfo:{
            age: age,
            weight: weight,
            height: height
        },
        BMI: calculateBMI(),
        'status': calculateStatus(calculateBMI())
    };

    if (objOutput.status === "obese"){
        objOutput['recommendation'] = `admission required`;
    }
    return objOutput;
}

console.log(solve('Peter', 29, 75, 182));