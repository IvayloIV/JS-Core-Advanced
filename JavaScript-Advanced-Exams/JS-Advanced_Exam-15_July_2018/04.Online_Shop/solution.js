function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let submitButton = $('#submit');
    let productInput = $('.custom-select');
    let priceInput = $('#price');
    let quantityInput = $('#quantity');
    let items = $('.display');
    let sum = $('#sum');
    let capacity = $('#capacity');
    let totalCapacity = 0;

    productInput.on('input', changeButton);
    submitButton.on('click', addText);

    function addText() {
        if (productInput.val() === '' || priceInput.val() === ''
            || quantityInput.val === '') {
            return
        }
        items.append($('<li>').text(`Product: ${productInput.val()} Price: ${priceInput.val()} Quantity: ${quantityInput.val()}`));
        sum.val(Number(priceInput.val()) + Number(sum.val()));
        totalCapacity += Number(quantityInput.val());
        capacity.val(totalCapacity);
        if (totalCapacity >= 150) {
            blockItems();
        }
        productInput.val('');
        priceInput.val('1');
        quantityInput.val('1');
    }
    
    function blockItems() {
        capacity.addClass('fullCapacity');
        capacity.val('full');
        submitButton.attr('disabled', true);
        productInput.attr('disabled', true);
        priceInput.attr('disabled', true);
        quantityInput.attr('disabled', true);
    }

    function changeButton() {
        if (productInput.val() === '') {
            submitButton.attr('disabled', true);
        } else {
            submitButton.attr('disabled', false);
        }
    }
}
