function increment(selector) {
    $(selector)
        .append($('<textarea>').addClass('counter').attr('disabled', true).val('0'))
        .append($('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment').on('click', increaseValue))
        .append($('<button>').addClass('btn').attr('id', 'addBtn').text('Add').on('click', addValue))
        .append($('<ul>').addClass('results'));

    function addValue() {
        $('.results').append($('<li>').text($('.counter').val()));
    }

    function increaseValue() {
        let item = $('.counter');
        item.val(Number(item.val()) + 1);
    }
}