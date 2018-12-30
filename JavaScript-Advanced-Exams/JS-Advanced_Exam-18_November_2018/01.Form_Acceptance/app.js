function acceptance() {
    let company = $('#fields input[name="shippingCompany"]');
    let productName = $('#fields input[name="productName"]');
    let productQuantity = $('#fields input[name="productQuantity"]');
    let productScrape = $('#fields input[name="productScrape"]');

    let companyVal = company.val();
    let productNameVal = productName.val();
    let productQuantityVal = productQuantity.val();
    let productScrapeVal = productScrape.val();

    company.val('');
    productName.val('');
    productQuantity.val('');
    productScrape.val('');

    if (companyVal === '' || productNameVal === ""
            || productQuantityVal === "" || productScrapeVal === '') {
        return;
    }

    let productQuantityNum = Number(productQuantityVal);
    let productScrapeNum = Number(productScrapeVal);

    if (isNaN(productQuantityNum) || isNaN(productScrapeNum) || productQuantityNum <= productScrapeNum) {
        return;
    }

    let div = $('<div>')
        .append($('<p>').text(`[${companyVal}] ${productNameVal} - ${productQuantityNum - productScrapeNum} pieces`))
        .append($('<button>').attr('type', 'button').text('Out of stock').on('click', deleteDiv));

    $('#warehouse').append(div);

    function deleteDiv() {
        $(this).parent().remove();
    }
}