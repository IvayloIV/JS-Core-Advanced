function calendar(arr) {
    let year = Number(arr[2]);
    let month = Number(arr[1]);
    let day = Number(arr[0]);
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let date = new Date(year, month - 1, day);
    let containter = $('<table>');
    let caption = $('<caption>').text(`${months[date.getMonth()]} ${year}`).appendTo(containter);
    let tbody = $('<tbody>').append(createHeader).append(addDays);
    containter.append(caption).append(tbody);
    $('#content').append(containter);

    function createHeader() {
        let result = $('<tr>');
        let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        for(let i = 0; i < 7; i++){
            result.append($('<th>').append(days[i]));
        }
        return result;
    }

    function addDays() {
        let currentDay = new Date(year, month - 1).getDay();
        if (currentDay == 0){
            currentDay = 7;
        }
        let momentDay = 1;
        let result = [];
        let mountAllDays = new Date(year, month, 0).getDate();

        let isTimeForBreak = false;
        for(let i = 0; i < 6; i++){
            let currentResult = $('<tr>');
            for(let cows = 0; cows < 7; cows++){
                if (momentDay == day){
                    currentResult.append($('<td>').text(momentDay).addClass('today'));
                    momentDay++;
                    continue;
                }
                if (currentDay > 1){
                    currentResult.append($('<td>'));
                    currentDay--;
                } else if (momentDay > mountAllDays){
                    currentResult.append($('<td>'));
                    isTimeForBreak = true;
                } else{
                    currentResult.append($('<td>').text(momentDay));
                    momentDay++;
                }
            }
            result.push(currentResult);
            if (isTimeForBreak == true || momentDay > mountAllDays){
                break;
            }
        }
        return result;
    }
}
