function initializeTable(){
    $('#createLink').click(addCountry);
    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscows');
    fixLinks();

    function fixLinks(){
        $('#countriesTable a').css('display', 'inline');
        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find('a:contains("Up")').css('display', 'none');
        $(tableRows[tableRows.length - 1]).find('a:contains("Down")').css('display', 'none');
    }

    function addCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        createCountry(country.val(), capital.val());
        country.val('');
        capital.val('');
    }

    function createCountry(country, capital) {
        let row = $('<tr>')
            .append($(`<td>`).text(country))
            .append($(`<td>`).text(capital))
            .append($(`<td>`)
                .append($(`<a href="#"></a>`).text('[Up]').click(moveUp))
                .append(' ')
                .append($(`<a href="#">[Down]</a>`).click(moveDown))
                .append(' ')
                .append($(`<a href="#">[Delete]</a>`).click(deleteItem)));
        $(row).css('display', 'none');
        $('#countriesTable').append(row);
        row.fadeIn();
        fixLinks();
    }

    function moveUp(event) {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixLinks();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertAfter(row.next());
            row.fadeIn();
            fixLinks();
        });
    }

    function deleteItem() {
        let row = $(this).parent().parent();
        row.fadeOut(() => $(row).remove());
        fixLinks();
    }
}