function initializeTable() {
    let table = $('#countriesTable');
    createRow('Bulgaria', 'Sofia');
    createRow('Germany', 'Berlin');
    createRow('Russia', 'Moscow');
    $('#createLink').on('click', getInformation);
    hideMoves();

    function createRow(country, town) {
        let newTr = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(town))
            .append($('<td>')
                .append($('<a>').attr('href', '#').text('[Up]').on('click', moveUp))
                .append($('<a>').attr('href', '#').text('[Down]').on('click', moveDown))
                .append($('<a>').attr('href', '#').text('[Delete]').on('click', deleteRow)))
            .css('display', 'none');
        table.append(newTr);
        newTr.fadeIn();
        hideMoves()
    }

    function moveDown() {
        let item = $(this).parent().parent();
        item.fadeOut(() => {
            item.insertAfter(item.next());
            item.fadeIn();
            hideMoves()
        });
    }

    function moveUp() {
        let item = $(this).parent().parent();
        item.fadeOut(() => {
            item.insertBefore(item.prev());
            item.fadeIn();
            hideMoves()
        });
    }

    function deleteRow() {
        let item = $(this).parent().parent();
        item.fadeOut(() => {
            item.remove();
            hideMoves()
        });
    }

    function getInformation() {
        let country = $('#newCountryText');
        let town = $('#newCapitalText');
        if (country.val() === '' || town.val() === '') {
            return;
        }
        createRow(country.val(), town.val());
        country.val('');
        town.val('');
    }
    
    function hideMoves() {
        table.find('tr td a').css('display', 'inline');
        table.find('tr:nth-child(3) a:contains([Up])').css('display', 'none');
        table.find('tr:last-child a:contains([Down])').css('display', 'none');
    }
}