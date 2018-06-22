function solve() {
    let firstNum = 0;
    let secondNum = 1;
    return () => {
        let temp = secondNum;
        secondNum = firstNum + secondNum;
        firstNum = temp;
        return firstNum;
    }
}

let m = solve();
console.log(m());
console.log(m());
console.log(m());
console.log(m());
console.log(m());
console.log(m());
console.log(m());