function validate() {
    $('#company').on('click', showHideCompanyInfo);
    $('#submit').on('click', submitForm);
    let usernameVal = $('#username');
    let passwordVal = $('#password');
    let cmfPasswordVal = $('#confirm-password');
    let email = $('#email');
    let companyNumber = $('#companyNumber');

    function submitForm() {
        let isValid = true;
        if (!/^[A-Za-z0-9]{3,20}$/.test(usernameVal.val())) {
            usernameVal.css('border', 'solid red');
            isValid = false;
        } else {
            usernameVal.css('border', 'none');
        }

        if (!/^\w{5,15}$/.test(passwordVal.val())) {
            passwordVal.css('border', 'solid red');
            isValid = false;
        } else {
            passwordVal.css('border', 'none');
        }

        if (!/^\w{5,15}$/.test(cmfPasswordVal.val())) {
            cmfPasswordVal.css('border', 'solid red');
            isValid = false;
        } else {
            cmfPasswordVal.css('border', 'none');
        }

        if (cmfPasswordVal.val() !== passwordVal.val()) {
            cmfPasswordVal.css('border', 'solid red');
            passwordVal.css('border', 'solid red');
            isValid = false;
        }

        if (!/(.*?)@(.*?)\./.test(email.val())) {
            email.css('border', 'solid red');
            isValid = false;
        } else {
            email.css('border', 'none');
        }

        if ($('#companyInfo').css('display') === 'block') {
            if (!/^[1-9][0-9]{3}$/.test(companyNumber.val())) {
                companyNumber.css('border', 'solid red');
                isValid = false;
            } else {
                companyNumber.css('border', 'none');
            }
        }
        if (isValid) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
    }

    function showHideCompanyInfo() {
        if ($('#companyInfo').css('display') === 'none') {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    }
}
