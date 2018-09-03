function addDestination() {
    let cityInput = $('#input .inputData:first-of-type');
    let countryInput = $('#input .inputData:nth-of-type(2)');
    if (cityInput.val() === '' || countryInput.val() === ''){
        return;
    }
    let seasonOption = $('#seasons option:selected');
    let seasonName = seasonOption.text();
    let table = $('#destinationsList');
    table.append($('<tr>')
        .append($('<td>').text(`${cityInput.val()}, ${countryInput.val()}`))
        .append($('<td>').text(seasonName)));
    let seasonCounterInput = $(`#${seasonOption.val()}`);
    seasonCounterInput.val(Number(seasonCounterInput.val()) + 1);
    cityInput.val('');
    countryInput.val('');
}