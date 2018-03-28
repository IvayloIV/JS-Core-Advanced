function listBuilder(selector){
    let currentTag = $(selector);
    return {
        createNewList,
        addItem
    };
    function createNewList() {
        $(currentTag).empty();
        $(currentTag).append($('<ul>'))
    }
    function addItem(text) {
        let currentItem = $('<li>').text(text)
            .append($('<button>').text('Up').on('click', moveUp))
            .append($('<button>').text('Down').on('click', moveDown));
        $(currentTag).find('ul').append(currentItem);
    }
    function moveUp() {
        $(this).parent().fadeOut(() => {
            $(this).parent().insertBefore($(this).parent().prev()).fadeIn();
        });
    }
    function moveDown() {
        $(this).parent().fadeOut(() => {
            $(this).parent().insertAfter($(this).parent().next()).fadeIn();
        });
    }
}