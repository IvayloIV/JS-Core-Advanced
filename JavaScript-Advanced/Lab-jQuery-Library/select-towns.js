function attachEvents() {
    $('ul li').on('click', addEventToLi);
    $('button#showTownsButton').on('click', printSelected);

    function addEventToLi() {
        if($(this).attr('data-selected')){
            $(this).removeAttr('data-selected');
            $(this).css('background', '');
        } else{
            $(this).attr('data-selected', 'true');
            $(this).css('background', '#DDD');
        }
    }

    function printSelected() {
        let items = $("ul li[data-selected=true]");   
        let arr = items.toArray().map(a => a.textContent);    
        $('#selectedTowns').text("Selected towns: " + arr.join(', '));
    }
}
