function solution() {
    $('button').on('click', result);

    function result() {
        const typeInput = $('#toyType');
        const priceInput = $('#toyPrice');
        const descriptionInput = $('#toyDescription');
        const gifts = $('#christmasGiftShop');

        if (typeInput.val().length === 0 || isNaN(priceInput.val()) || descriptionInput.val().length === 0) {
            return;
        }

        gifts.append($('<div>').addClass('gift')
            .append($('<img>').attr('src', 'gift.png'))
            .append($('<h2>').text(typeInput.val()))
            .append($('<p>').text(descriptionInput.val()))
            .append($('<button>').text(`Buy it for $${priceInput.val()}`).on('click', function () {
                $(this).parent().remove();
            })));

        typeInput.val('');
        priceInput.val('');
        descriptionInput.val('');
    }
}