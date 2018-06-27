function makeCard(face, suit) {
    const VALID_FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const VALID_SUITS = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };
    if (VALID_FACES.indexOf(face) === -1 || !VALID_SUITS.hasOwnProperty(suit)) {
        throw new Error(`Invalid card: ${face}${suit}`);
    }
    return {
        toString: function () {
            return `${face}${VALID_SUITS[suit]}`;
        }
    }
}

console.log('' + makeCard('A', '1'));