function busRoute() {
    let firstStop = $('input[name="first-stop"]');
    let lastStop = $('input[name="last-stop"]');
    let bussStops = $('#bus-stops li').toArray();

    let firstStopNum = Number(firstStop.val());
    let lastStopNum = Number(lastStop.val());

    if (firstStopNum === '' || lastStopNum === '' || isNaN(firstStopNum) || isNaN(lastStopNum) || firstStopNum >= lastStopNum || firstStopNum <= 0 || lastStopNum > bussStops.length) {
        return;
    }
    $('#selected-route span').text(`${firstStopNum}-${lastStopNum}`);
    $('#selected-bus-stops').empty();
    for (let i = firstStopNum; i <= lastStopNum; i++) {
        $('#selected-bus-stops').append($('<li>').append($(bussStops[i - 1]).text()));
    }
    firstStop.val('');
    lastStop.val('');
}