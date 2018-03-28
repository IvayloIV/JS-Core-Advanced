function solve() {
    $('#btnAdd').on('click', addTown);
    $('#btnDelete').on('click', removeTown);

    function addTown() {
        let currentText = $('#newItem');
        if ($(currentText).val() === ''){
            return;
        } else {
            $('#towns').append($('<option>').text($(currentText).val()).css('display', 'none'));
            $('#towns option:last-child').fadeIn(1000, () => {
                $('#towns option:last-child').css('display', 'block');
            });
            currentText.val('');
        }
    }
    function removeTown() {
        let selectedArea = $('#towns option:selected');
        selectedArea.fadeOut(() => {
            selectedArea.remove();
        });
    }
}