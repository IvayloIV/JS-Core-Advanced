function printDeckOfCards(cards) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        S : '\u2660',
        H : '\u2665',
        D : '\u2666',
        C : '\u2663'
    };
    function makeACard(face, suit) {
        if (!faces.includes(face) || !suits.hasOwnProperty(suit)){
            throw new Error("Invalid data");
        }

        return {
            suit,
            face,
            toString : function () {
                return face + suits[suit];
            }
        };
    }

    let allCards = [];
    for (let card of cards) {
        let face = card.substring(0, card.length - 1);
        let suit = card.substr(-1);
        try {
            allCards.push(makeACard(face, suit));
        } catch (e) {
            console.log("Invalid card: " + face + suit);
            return;
        }
    }
    console.log(allCards.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);