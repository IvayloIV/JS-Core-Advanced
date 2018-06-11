let solution = (function() {
    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
    function add(numArr1, numArr2) {
        let sumX = numArr1[0] + numArr2[0];
        let sumY = numArr1[1] + numArr2[1];
        return [sumX, sumY];
    }
    function multiply(numArr1, scalar) {
        return [numArr1[0] * scalar, numArr1[1] * scalar];
    }
    function length(numArr) {
        return Math.sqrt(numArr[0] * numArr[0] + numArr[1] * numArr[1]);
    }
    function dot(arr1, arr2) {
        return arr1[0] * arr2[0] + arr1[1] * arr2[1]
    }
    function cross(arr1, arr2) {
        return arr1[0] * arr2[1] - arr2[0] * arr1[1];
    }
})();
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([2, 3], [2, -1]));
console.log(solution.cross([3, 7], [1, 0]));