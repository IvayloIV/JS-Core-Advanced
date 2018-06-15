function attachEvents() {
    $('#items li').on('click', changeAttr);
    $('#showTownsButton').on('click', showTowns);

    function showTowns() {
        let totalText = $('#items li[data-selected=true]');
        $('#selectedTowns').text(`Selected towns:${totalText.toArray().map(a => $(a).text()).join(',')}`);
    }

    function changeAttr() {
        if ($(this).attr('data-selected')) {
            $(this).removeAttr('data-selected');
            $(this).css('background-color', '');
        } else {
            $(this).attr('data-selected', 'true');
            $(this).css('background-color', '#DDD');
        }
    }
}