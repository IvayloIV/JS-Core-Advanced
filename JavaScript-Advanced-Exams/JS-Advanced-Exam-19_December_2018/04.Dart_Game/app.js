function dart() {
    const table = $('tbody');
    const homeScore = $('#Home p:first-of-type');
    const awayScore = $('#Away p:first-of-type');
    let gameEnd = false;
	
    const dartboard = {
        'firstLayer': 1,
        'secondLayer': 2,
        'thirdLayer': 3,
        'fourthLayer': 4,
        'fifthLayer': 5,
        'sixthLayer': 6
    };

    let currentPlayer = 'Home';
    let turns = $('#turns');
	
    $('#playBoard').on('click', addPoints);
	
    function addPoints(e) {
        if (!gameEnd) {
            updateScore(e.target.id);
            changePlayers();
            checkForWinner();
        }
    }
	
    function updateScore(id) {
        let points = Number(table.find(`tr:nth-of-type(${dartboard[id]}) td:last-of-type`).text().split(' ')[0]);
        if (currentPlayer === 'Home') {
            homeScore.text(Number(homeScore.text()) + points);
        } else {
            awayScore.text(Number(awayScore.text()) + points);
        }
    }
	
    function changePlayers() {
        if (currentPlayer === 'Home') {
            currentPlayer = 'Away';
            turns.find('p:first-of-type').text('Turn on Away');
            turns.find('p:last-of-type').text('Next is Home');
        } else {
            currentPlayer = 'Home';
            turns.find('p:first-of-type').text('Turn on Home');
            turns.find('p:last-of-type').text('Next is Away');
        }
    }
	
    function checkForWinner() {
        if (Number(homeScore.text()) >= 100) {
            changeColor('green', 'red');
        } else if (Number(awayScore.text()) >= 100) {
            changeColor('red', 'green');
        }
    }
    
    function changeColor(home, away) {
        $('#Home p:last-of-type').css('background', home);
        $('#Away p:last-of-type').css('background', away);
        gameEnd = true;
    }
}