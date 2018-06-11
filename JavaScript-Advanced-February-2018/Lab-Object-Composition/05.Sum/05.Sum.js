function getModel(){
    let result, num1, num2;
    function init(currentNum1, currentNum2, currentResult){
        result = $(currentResult);
        num1 = $(currentNum1);
        num2 = $(currentNum2);
    }
    function add(){
        result.val(Number(num1.val()) + Number(num2.val()));
    }
    function subtract(){
        result.val(Number(num1.val()) - Number(num2.val()));
    }
    return {
        init,
        add,
        subtract
    };
}