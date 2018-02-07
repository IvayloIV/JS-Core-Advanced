function attachEvents() {
    $('a').on('click', addEvent);

    function addEvent() {
        $('a').each((index, element) => {
            if (this == element){
                $(this).addClass('selected');
            }else{
                $(element).removeClass('selected');
            }
        });
    }
}
