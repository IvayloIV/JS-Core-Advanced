function addProduct() {
    let section = $('#add-product');
    let productInput = section.find('label:first-of-type input');
    let priceInput = section.find('label:last-of-type input');

    let productList = $('#product-list');
    let price = $('tfoot tr td:last-of-type');

    if (productInput.val() === '' || priceInput.val() === '' || Number(priceInput.val()) < 0) {
        return;
    }

    productList.append($('<tr>')
        .append($('<td>').text(productInput.val()))
        .append($('<td>').text(Number(priceInput.val()))));

    let currentPrice = Number(price.text());
    let totalPrice = currentPrice + Number(priceInput.val());
    price.text(totalPrice);

    productInput.val('');
    priceInput.val('');
}