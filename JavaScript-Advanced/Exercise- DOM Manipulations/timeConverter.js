function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', days);
    document.getElementById('hoursBtn').addEventListener('click', hours);
    document.getElementById('minutesBtn').addEventListener('click', minutes);
    document.getElementById('secondsBtn').addEventListener('click', seconds);

    let currentDays = document.getElementById('days');
    let currentHours = document.getElementById('hours');
    let currentMinutes = document.getElementById('minutes');
    let currentSeconds = document.getElementById('seconds');

    function days() {
        let allDays = currentDays.value;
        currentHours.value = Number(allDays) * 24;
        currentMinutes.value = Number(currentHours.value) * 60;
        currentSeconds.value = Number(currentMinutes.value) * 60;        
    }
    function hours() {
        let allHours = currentHours.value;
        currentDays.value = Number(allHours) / 24;
        currentMinutes.value = Number(allHours) * 60;
        currentSeconds.value = Number(currentMinutes.value) * 60; 
    }
    function minutes() {
        let allMinutes = currentMinutes.value;
        currentHours.value = Number(allMinutes) / 60;
        currentDays.value = Number(currentHours.value) / 24;
        currentSeconds.value = Number(allMinutes) * 60; 
    }
    function seconds() {
        let allSeconds = currentSeconds.value;
        currentMinutes.value = Number(allSeconds) / 60; 
        currentHours.value = Number(currentMinutes.value) / 60;
        currentDays.value = Number(currentHours.value) / 24;
    }
}