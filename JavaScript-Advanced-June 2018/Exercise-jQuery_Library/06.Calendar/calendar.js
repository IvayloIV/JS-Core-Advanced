function calendar([currentDay, month, year]) {
    let currentDate = new Date(year, month - 1, currentDay);
    let lastMonthDays = new Date(year, month - 1, 0);
    let totalDaysInMonth = new Date(year, month, 0);
    let allMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];
    let beforeStartEmpty = lastMonthDays.getDay();

    let table = $('<table>')
        .append($('<caption>').text(`${allMonth[currentDate.getMonth()]} ${year}`))
        .append($('<tbody>')
            .append($('<tr>')
                .append($('<th>').text('Mon'))
                .append($('<th>').text('Tue'))
                .append($('<th>').text('Wed'))
                .append($('<th>').text('Thu'))
                .append($('<th>').text('Fri'))
                .append($('<th>').text('Sat'))
                .append($('<th>').text('Sun'))));

    let count = 0;
    let day = 1;
    while (true) {
        let newTr = $('<tr>');
        count++;
        while (beforeStartEmpty > 0) {
            newTr.append($('<td>'));
            beforeStartEmpty--;
            count++;
        }
        let isEndLoop = true;
        while (day <= totalDaysInMonth.getDate()) {
            if (day === currentDate.getDate()) {
                newTr.append($('<td>').text(day++).addClass('today'));
            } else {
                newTr.append($('<td>').text(day++));
            }
            if (count % 7 === 0) {
                isEndLoop = false;
                break;
            }
            count++;
        }
        let isEnd = false;
        if (isEndLoop) {
            count--;
            while (count % 7 !== 0) {
                newTr.append($('<td>'));
                count++;
            }
            isEnd = true;
        }
        table.find('tbody').append(newTr);
        if (isEnd || day - 1 === totalDaysInMonth.getDate()) {
            break;
        }
    }
    $('#content').append(table);
}

