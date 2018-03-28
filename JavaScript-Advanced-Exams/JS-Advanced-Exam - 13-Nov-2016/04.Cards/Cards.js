function cardDeckBuilder(selector) {
    let allColors = {'D' : '\u2666', 'S' : '\u2660', 'H' : '\u2665', 'C' : '\u2663'};
    function reverseCards() {
        let arr = $(`${selector} div`).toArray();
        arr.reverse();
        $(selector).append(arr);
    }
    function addCard(face, suit) {
            $(selector).append($('<div>').addClass('card').text(`${face} ${allColors[suit]}`).on('click', reverseCards));
    }
    return {
        addCard
    };
}