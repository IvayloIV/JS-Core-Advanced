function addProduct() {
    let tokens = $('#add-product input');
    let text = tokens[0];
    let price = tokens[1];
    if ($(text).val() === '' || $(price).val() === ''){
        return;
    }
    $('#product-list')
        .append($('<tr>')
            .append($('<td>').text($(text).val()))
            .append($('<td>').text($(price).val()))
            .append($('<td>').text('Delete').on('click', deleteThis)));
    let lastEl = $('tfoot tr td:last-child');
    lastEl.text((Number(lastEl.text()) + Number($(price).val())).toFixed(2));
    $(text).val('');
    $(price).val('');
    function deleteThis() {
        let sum = $(this).parent().find('td')[1];
        $(lastEl).text((Number($(lastEl).text()) - Number($(sum).text())).toFixed(2));
        $(this).parent().remove();
    }
}