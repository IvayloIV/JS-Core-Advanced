function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hourInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', calculateDays);
    document.getElementById('hoursBtn').addEventListener('click', calculateHours);
    document.getElementById('minutesBtn').addEventListener('click', calculateMinutes);
    document.getElementById('secondsBtn').addEventListener('click', calculateSeconds);

    function calculateDays() {
        if (daysInput.value === '') {
            return;
        }
        let currentDays = Number(daysInput.value);
        hourInput.value = currentDays * 24;
        minutesInput.value = currentDays * 1440;
        secondsInput.value = currentDays * 86400;
    }

    function calculateHours() {
        if (hourInput.value === '') {
            return;
        }
        let currentHours = Number(hourInput.value);
        daysInput.value = currentHours / 24;
        minutesInput.value = currentHours * 60;
        secondsInput.value = currentHours * 3600;
    }

    function calculateMinutes() {
        if (minutesInput.value === '') {
            return;
        }
        let currentMinutes = Number(minutesInput.value);
        daysInput.value = currentMinutes / 1440;
        hourInput.value = currentMinutes / 60;
        secondsInput.value = currentMinutes * 60;
    }

    function calculateSeconds() {
        if (secondsInput.value === '') {
            return;
        }
        let currentSeconds = Number(secondsInput.value);
        daysInput.value = currentSeconds / 86400;
        hourInput.value = currentSeconds / 3600;
        minutesInput.value = currentSeconds / 60;
    }
}