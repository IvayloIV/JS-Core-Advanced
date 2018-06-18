function timer() {
    let currentInterval;
    let seconds = 0;
    $('#start-timer').on('click', startTimer);
    $('#stop-timer').on('click', stopTimer);
    let hoursVal = $('#hours');
    let minutesVal = $('#minutes');
    let secondsVal = $('#seconds');
    let isStart = false;

    function stopTimer() {
        if (isStart) {
            clearInterval(currentInterval);
            isStart = false;
        }
    }

    function startTimer() {
        if (!isStart) {
            currentInterval = setInterval(increaseSecs, 1000);
            isStart = true;
        }
    }

    function increaseSecs() {
        seconds++;
        hoursVal.text(('0' + Math.floor(seconds / 3600)).slice(-2));
        minutesVal.text(('0' + (Math.floor(seconds / 60) % 60)).slice(-2));
        secondsVal.text(('0' + (seconds % 60)).slice(-2));
    }
}