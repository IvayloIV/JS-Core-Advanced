function subtract() {
    let firstNumStr = document.getElementById('firstNumber');
    let secondNumStr = document.getElementById('secondNumber');
    document.getElementById('result').textContent = Number(firstNumStr.value) - Number(secondNumStr.value);
}