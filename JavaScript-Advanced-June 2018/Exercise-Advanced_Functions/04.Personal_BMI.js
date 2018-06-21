function solve(name, age, weight, height) {
    let BMI = calculateBMI();
    let status = defineStatus();
    let result = {
        name,
        personalInfo : {age, weight, height},
        BMI,
        status
    };

    isRecommendation();

    return result;

    function isRecommendation() {
        if (status === 'obese') {
            result.recommendation = 'admission required';
        }
    }

    function defineStatus() {
        if (BMI < 18.5) {
            return 'underweight';
        } else if (BMI < 25) {
            return 'normal';
        } else if (BMI < 30) {
            return 'overweight';
        }
        return 'obese';
    }

    function calculateBMI() {
        return Math.round((weight / (height * height)) * 10000);
    }
}

console.log(solve('Honey Boo Boo', 9, 57, 137));