function validate() {
    $('#company').on('click', addClassOnCheckButton);
    $('#submit').on('click', printResult);
    let username = $('#username');
    let patternUsername = /^[A-Za-z0-9]{3,20}$/;
    let totalPassword = $('#password');
    let confirmedPassword = $('#confirm-password');
    let patterPassword = /^\w{5,15}$/;
    let email = $('#email');
    let patterEmail = /(.*?)@(.*?)\.(.*)/;
    let companyNumber = $('#companyNumber');

    function addClassOnCheckButton() {
        if ($(this).attr('valid')){
            console.log(`Iam here`);
            $(this).removeAttr('valid');
            $('#companyInfo').css('display', 'none');
        } else{
            $(this).attr('valid', 'true');
            $('#companyInfo').css('display', 'block');
        }
    }

    function printResult(event) {
        event.preventDefault();    
        var isAllOkey = true;   
        if (!patternUsername.test($(username).val())){
            $(username).css('border', 'solid red');
            isAllOkey = false;
        } else{
            $(username).css('border', 'none');
        }

        if (!patterPassword.test($(totalPassword).val())){
            $(totalPassword).css('border', 'solid red');
            isAllOkey = false;
        } else{
            $(totalPassword).css('border', 'none');
        }

        if (!patterPassword.test($(confirmedPassword).val())){
            $(confirmedPassword).css('border', 'solid red');
            isAllOkey = false;
        } else{
            $(confirmedPassword).css('border', 'none');
        }

        if (totalPassword.val() != confirmedPassword.val()){
            $(totalPassword).css('border', 'solid red');
            $(confirmedPassword).css('border', 'solid red');
            isAllOkey = false;
        }

        if (!patterEmail.test($(email).val())){
            $(email).css('border', 'solid red');
            isAllOkey = false;
        } else{
            $(email).css('border', 'none');
        }

        if ($('#company').attr('valid')){
            let num = Number($(companyNumber).val());
            if (num >= 1000 && num <= 9999){
                $(companyNumber).css('border', 'none');
            }else{
                $(companyNumber).css('border', 'solid red');
                isAllOkey = false;
            }
        }
        if (isAllOkey == true){
            $('#valid').css('display', 'block');
        } else{
            $('#valid').css('display', 'none');
        }
    }
}
