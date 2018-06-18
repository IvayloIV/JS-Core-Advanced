function domSearch(selector, caseSensitive) {
    $(selector)
        .append($('<div>').addClass('add-controls')
            .append($('<label>').text('Enter text: ')
                .append($('<input>')))
            .append($('<a>').addClass('button').css('display', 'inline-block').text('Add').on('click', addNewLi)))
        .append($('<div>').addClass('search-controls')
            .append($('<label>').text('Search:')
                .append($('<input>').on('input', searchText))))
        .append($('<div>').addClass('result-controls')
            .append($('<ul>').addClass('items-list')));

    function searchText() {
        let currentText = $(this).val();
        $('.list-item strong').each((i, e) => {
            let textElement = $(e).text();
            if (!caseSensitive) {
                textElement = textElement.toLowerCase();
            }
            if (textElement.indexOf(currentText) !== -1 || currentText === '') {
                $(e).parent().css('display', 'block');
            } else {
                $(e).parent().css('display', 'none');
            }
        });
    }

    function addNewLi() {
        let textInput = $('.add-controls input');
        if (textInput.val() !== '') {
            $('.items-list')
                .append($('<li>').addClass('list-item')
                    .append($('<a>').addClass('button').text('X').on('click', deleteText))
                    .append($('<strong>').text(textInput.val())));
            textInput.val('');
        }
    }

    function deleteText() {
        $(this).parent().remove();
    }
}