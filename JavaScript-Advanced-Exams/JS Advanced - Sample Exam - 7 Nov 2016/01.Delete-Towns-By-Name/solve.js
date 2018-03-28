function attachEvents() {
    $('#btnDelete').on('click', removeItems);

    function removeItems() {
        let text = $('#townName');
        let isDeleted = false;
        $('#towns option').each((i, e) => {
            if ($(e).text() === text.val()){
                $(e).remove();
                isDeleted = true;
            }
        });
        $('#result').text(isDeleted === true ? `${text.val()} deleted.` : `${text.val()} not found.`);
        $(text).val('');
    }
}