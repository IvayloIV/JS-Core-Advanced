function addSticker() {
    let titleInput = $('.title');
    let contentInput = $('.content');

    let title = titleInput.val();
    let content = contentInput.val();

    if (title === '' || content === '') {
        return;
    }

    $('#sticker-list').append($('<li>').addClass('note-content')
        .append($('<a>').addClass('button').text('x').on('click', function () {
            $(this).parent().remove();
        }))
        .append($('<h2>').text(title))
        .append($('<hr>'))
        .append($('<p>').text(content)));
    titleInput.val('');
    contentInput.val('');
}