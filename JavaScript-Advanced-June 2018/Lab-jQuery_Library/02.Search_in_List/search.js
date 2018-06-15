function search() {
    let text  = $('#searchText');
    if (text.val() !== '') {
        $('#towns li').css('font-weight', '');
        let items = $(`#towns li:contains(${text.val()})`);
        items.css('font-weight', 'bold');
        $('#result').text(`${items.length} matches found.`);
        text.val('');
    }
}