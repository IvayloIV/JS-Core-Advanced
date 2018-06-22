function solve() {
    let section1, section2, resultInput;
    function init(sec1, sec2, result) {
        section1 = $(sec1);
        section2 = $(sec2);
        resultInput = $(result);
    }
    function add() {
        let sum = Number(section1.val()) + Number(section2.val());
        resultInput.val(sum);
    }
    function subtract() {
        let sum = Number(section1.val()) - Number(section2.val());
        resultInput.val(sum);
    }
    return {init, add, subtract};
}

let commands = solve();
commands.init('#num1', '#num2', '#result');
$('#sumButton').on('click', commands.add);
$('#subtractButton').on('click', commands.subtract);