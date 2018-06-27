function printDeckOfCards(cards) {
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

    let totalCards = [];
    for (let card of cards) {
        let currentFace = card.substring(0, card.length - 1);
        let currentSuit = card.slice(-1);
        try {
            totalCards.push(makeCard(currentFace, currentSuit) + '');
        } catch (e) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(totalCards.join(' '));
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);