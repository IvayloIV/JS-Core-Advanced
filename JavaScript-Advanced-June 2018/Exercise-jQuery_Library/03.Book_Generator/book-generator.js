let createBook = (function () {
    let count = 1;
    return function (selector, title, author, ISBN) {
        $(selector)
            .append($('<div>').attr('id', `book${count++}`)
                .append($('<p>').addClass('title').text(title))
                .append($('<p>').addClass('author').text(author))
                .append($('<p>').addClass('isbn').text(ISBN))
                .append($('<button>').text('Select').on('click', function() {
                    $(this).parent().css('border', '2px solid blue')
                }))
                .append($('<button>').text('Deselect').on('click', function() {
                    $(this).parent().css('border', 'none')
                })));
    }
})();