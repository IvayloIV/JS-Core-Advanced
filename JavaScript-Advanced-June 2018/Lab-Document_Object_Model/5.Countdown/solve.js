function countdown(seconds) {
    let input = document.getElementById('time');
    let currentInterval = setInterval(changeSeconds, 1000);
    
    function changeSeconds() {
        seconds--;
        if (seconds === 0) {
            clearInterval(currentInterval);
        }
        input.value = `${Math.floor(seconds / 60)}:${('0' + (seconds % 60)).slice(-2)}`;
    }
}