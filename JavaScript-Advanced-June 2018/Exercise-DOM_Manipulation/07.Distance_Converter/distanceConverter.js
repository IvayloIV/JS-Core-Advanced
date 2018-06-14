function attachEventsListeners() {
    let allDistance = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };
    document.getElementById('convert').addEventListener('click', convert);
    let formInput = document.getElementById('inputDistance');
    let toInput = document.getElementById('outputDistance');

    function convert() {
        if (formInput.value === '') {
            return;
        }
        let fromDistance = document.getElementById('inputUnits').value;
        let toDistance = document.getElementById('outputUnits').value;
        let convertedFrom = allDistance[fromDistance] * Number(formInput.value);
        toInput.value = convertedFrom / Number(allDistance[toDistance]);
    }
}