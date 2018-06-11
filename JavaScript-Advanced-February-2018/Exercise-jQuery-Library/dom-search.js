function domSearch(selector, caseType) {
    let container = $(selector);
    let conteinerText = $('<div>').addClass('add-controls');
    $('<label>').text('Enter text: ').append($(`<input>`)).appendTo(conteinerText);
    $('<a>').text('Add').addClass('button').css('display', 'inline').on('click', addLi).appendTo(conteinerText);
    container.append(conteinerText);

    let searhCont = $('<div>').addClass('search-controls').append($('<label>').text('Search: ').append($('<input>').on('input', searchText)));
    container.append(searhCont);

    let result = $('<div>').addClass('result-controls').append($('<ul>').addClass('items-list'));
    container.append(result);

    function addLi() {
        let item = $('div.add-controls input').val();
        let currentUl = $('div ul.items-list');
        let newItem = $('<li>').addClass('list-item')
            .append($('<a>').addClass('button').text('X').on('click', function() {
                $(this).parent().remove()
            }))
            .append($('<strong>').text(item.trim())).appendTo(currentUl);
        $('div.add-controls input').val('');
    }

    function searchText(event) {
        var arrLi = $('ul li strong').toArray();
        let text = $('div.search-controls label input').val();
        for(let i = 0; i < arrLi.length; i++){
            if (caseType){
                if (arrLi[i].textContent.includes(text)){
                    $(arrLi[i]).parent().css('display', 'block');
                }else{
                    $(arrLi[i]).parent().css('display', 'none');
                }
            }
            else{
                if (arrLi[i].textContent.toLowerCase().includes(text.toLowerCase())){
                    $(arrLi[i]).parent().css('display', 'block');
                }else{
                    $(arrLi[i]).parent().css('display', 'none');
                }
            }           
        }
    }
}
