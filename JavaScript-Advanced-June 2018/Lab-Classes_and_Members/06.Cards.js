let result = (function () {
    const Suits = {
        'SPADES': '\u2660',
        'HEARTS': '\u2665',
        'DIAMONDS': '\u2666',
        'CLUBS': '\u2663'
    };
    const Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get suit() {
            return this._suit;
        }

        set suit(newSuit) {
            if (Object.values(Suits).indexOf(newSuit) === -1) {
                throw new Error('Invalid suit.');
            }
            this._suit = newSuit;
        }

        get face() {
            return this._face;
        }

        set face(newFace) {
            if (Faces.indexOf(newFace) === -1) {
                throw new Error('Invalid face.');
            }
            this._face = newFace;
        }
    }

    return { Card, Suits};
})();

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('4', Suits.CLUBS);
console.log(card);