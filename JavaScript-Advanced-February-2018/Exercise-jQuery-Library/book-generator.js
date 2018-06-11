function createBook(selector, title, author, isbn) {
    let bookGenerator = (function () {
        let id = 1;        
        return function(selector, title, author, isbn) {
            let container = $(selector);
            let bookContainer = $('<div>').attr('id', `book${id}`).css('border', 'none');
            $(`<p>`).addClass('title').text(title).appendTo(bookContainer);
            $(`<p>`).addClass('author').text(author).appendTo(bookContainer);
            $(`<p>`).addClass('isbn').text(isbn).appendTo(bookContainer);
            $('<button>').text('Select').on('click', () => bookContainer.css('border', '2px solid blue')).appendTo(bookContainer);
            $('<button>').text('Deselect').on('click', () => bookContainer.css('border', 'none')).appendTo(bookContainer);
            bookContainer.appendTo(container);
            id++;
        };
    }());
    bookGenerator(selector, title, author, isbn);
}
