function timer() {
    $('#start-timer').on('click', startTimer);
    $('#stop-timer').on('click', removeTimer);
    let time = 0;
    let intervalTimer = null;
    let isOn = false;

    function startTimer() {
        if (isOn == false){
            intervalTimer = setInterval(startIt, 1000);
            isOn = true;
        }
    }

    function removeTimer() {
        clearInterval(intervalTimer);
        isOn = false;
    }

    function startIt() {
        time++;
        let hours = ('0' + Math.floor(time / 3600) % 24).slice(-2);
        let minutes = ('0' + Math.floor((time % 3600) / 60)).slice(-2);
        let seconds = ('0' + time % 60).slice(-2);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }
}
