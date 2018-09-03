function makeReservation(id) {
    let submitButton = $('#submit');
    let editButton = $('#edit');
    let continueButton = $('#continue');
    let wrapper = $('#wrapper');

    submitButton.on('click', submitInfo);
    editButton.on('click', editInfo);
    continueButton.on('click', continueInfo);

    let fullNameInput = $('#fullName');
    let emailInput = $('#email');
    let phoneNumberInput = $('#phoneNumber');
    let addressInput = $('#address');
    let postalCodeInput = $('#postalCode');
    let infoPreview = $('#infoPreview');

    function submitInfo() {
        if (fullNameInput.val() === '' || emailInput.val() === ''){
            return;
        }
        infoPreview.empty();
        infoPreview.append($('<li>').text(`Name: ${fullNameInput.val()}`))
            .append($('<li>').text(`E-mail: ${emailInput.val()}`))
            .append($('<li>').text(`Phone: ${phoneNumberInput.val()}`))
            .append($('<li>').text(`Address: ${addressInput.val()}`))
            .append($('<li>').text(`Postal Code: ${postalCodeInput.val()}`));

        fullNameInput.val('');
        emailInput.val('');
        phoneNumberInput.val('');
        addressInput.val('');
        postalCodeInput.val('');

        disableButtons();
        editButton.attr('disabled', false);
        continueButton.attr('disabled', false);
    }

    function editInfo() {
        fullNameInput.val($(infoPreview).find('li:nth-of-type(1)').text().slice(6));
        emailInput.val($(infoPreview).find('li:nth-of-type(2)').text().slice(8));
        phoneNumberInput.val($(infoPreview).find('li:nth-of-type(3)').text().slice(7));
        addressInput.val($(infoPreview).find('li:nth-of-type(4)').text().slice(9));
        postalCodeInput.val($(infoPreview).find('li:nth-of-type(5)').text().slice(13));

        disableButtons();
        submitButton.attr('disabled', false);
        infoPreview.empty();
    }
    
    function continueInfo() {
        disableButtons();
        $(id).append($(`<h2>`).text(`Payment details`))
            .append($('<select>').attr('id', 'paymentOptions').addClass('custom-select')
                    .on('change', changePaymentOption)
                .append($('<option selected disabled hidden>Choose</option>'))
                .append($('<option>').val('creditCard').text(`Credit Card`))
                .append($('<option>').val('bankTransfer').text('Bank Transfer')))
            .append($('<div>').attr('id', `extraDetails`));
    }

    function disableButtons() {
        submitButton.attr('disabled', true);
        editButton.attr('disabled', true);
        continueButton.attr('disabled', true);
    }

    function changePaymentOption() {
        let option = $(this).find('option:selected').text();
        $('#extraDetails').empty();
        if (option === "Credit Card") {
            showCreditCard();
        } else if (option === "Bank Transfer") {
            showBankTrnsfer();
        }
    }
    
    function showBankTrnsfer() {
        $('#extraDetails').append($('<p>').text('You have 48 hours to transfer the amount to:')
                .append($('<br>'))
                .append(`IBAN: GR96 0810 0010 0000 0123 4567 890`))
            .append($('<button>').attr('id', 'checkOut').text('Check Out').on('click', checkOut));
    }

    function showCreditCard() {
        $('#extraDetails')
            .append($('<div>').addClass('inputLabel').text('Card Number')
                .append($('<input>')))
            .append($('<br>'))
            .append($('<div>').addClass('inputLabel').text('Expiration Date')
                .append($('<input>')))
            .append($('<br>'))
            .append($('<div>').addClass('inputLabel').text('Security Numbers')
                .append($('<input>')))
            .append($('<br>'))
            .append($('<button>').attr('id', 'checkOut').text('Check Out').on('click', checkOut));
    }
    
    function checkOut() {
        wrapper.empty();
        wrapper.append($('<h4>').text('Thank you for your reservation!'));
    }
}