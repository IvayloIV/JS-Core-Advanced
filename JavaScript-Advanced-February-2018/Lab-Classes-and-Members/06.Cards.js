let result = (function() {
    let Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    };

    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    class Card {
        constructor (face, suit){
            this.face = face;
            this.suit = suit;
        }
        set face(f){
            if (!Faces.includes(f)){
                throw new Error("Invalid face: " + f);
            }
            this._face = f;
        }
        get face(){
            return this._face;
        }
        set suit(s){
            if (!Object.keys(Suits).map(a => Suits[a]).includes(s)){
                throw new Error("Invalid suit: " + s);
            }
            this._suit = s;
        }
        get suit(){
            return this._suit;
        }
        toString(){
            return `${this._face}${this._suit}`;
        }
    }
    return { Suits, Card }
}());
let Suit = result.Suits;
let Card = result.Card;
let t = new Card('2', 'Pesho');
console.log(t.toString());