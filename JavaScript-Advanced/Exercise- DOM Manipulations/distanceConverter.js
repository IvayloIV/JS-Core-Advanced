function attachEventsListeners() {
    let btn = document.getElementById('convert');
    btn.addEventListener('click', changeValue);
    let params = {
        'km' : 1000,
        'm' : 1,
        'cm' : 0.01,
        'mm' : 0.001,
        'mi' : 1609.34,
        'yrd' : 0.9144,
        'ft' : 0.3048,
        'in' : 0.0254        
    };

    function changeValue() {
        let para1 = document.getElementById('inputUnits');
        let valueNum = document.getElementById('outputUnits').value;
        let num1 = params[para1.value] * Number(document.getElementById('inputDistance').value);
        document.getElementById('outputDistance').value = num1 / params[valueNum];
    }
}