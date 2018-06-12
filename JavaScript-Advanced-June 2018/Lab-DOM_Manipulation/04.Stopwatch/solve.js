function stopwatch() {
    let seconds;
    let interval;
    document.getElementById('startBtn').addEventListener('click', start);
    document.getElementById('stopBtn').addEventListener('click', stop);

    function start() {
        seconds = 0;
        startInterval();
        interval = setInterval(startInterval, 1000);
        document.getElementById('startBtn').disabled = true;
        document.getElementById('stopBtn').disabled = false;
    }

    function startInterval() {
        document.getElementById('time').textContent = `${('0' + Math.floor(seconds / 60)).slice(-2)}:${('0' + seconds % 60).slice(-2)}`;
        seconds++;
    }

    function stop() {
        clearInterval(interval);
        document.getElementById('startBtn').disabled = false;
        document.getElementById('stopBtn').disabled = true;
    }
}