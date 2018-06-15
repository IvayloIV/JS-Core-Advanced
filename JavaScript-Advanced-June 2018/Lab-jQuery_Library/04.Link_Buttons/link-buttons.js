function attachEvents() {
    $('a.button').on('click', changeClass);

    function changeClass() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}