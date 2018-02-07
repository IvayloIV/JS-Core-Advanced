function increment(selector) {
    let newTextArea = $('<textarea>');
    $(newTextArea).addClass('counter');
    $(newTextArea).val(0);
    $(newTextArea).attr('disabled', 'disabled');
    $(selector).append(newTextArea);

    let incremBtn = $('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment');
    $(incremBtn).on('click', addToValue);
    $(selector).append(incremBtn);

    let addBtn = $('<button>').addClass('btn').attr('id', 'addBtn').text('Add').on('click', addValueInLi);
    $(selector).append(addBtn);

    let newUl = $('<ul>').addClass('results').appendTo(selector);

    function addToValue() {
        let item = $('.counter');
        $(item).val(Number(item.val()) + 1);
    }

    function addValueInLi() {
        let value = Number($('.counter').val());
        let newLi = $('<li>').text(value);
        $('.results').append(newLi);
    }
}
