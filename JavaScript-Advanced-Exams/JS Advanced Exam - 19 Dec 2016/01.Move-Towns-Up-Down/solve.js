function move(direction) {
    let current = $('#towns option:selected');
    function downText() {
        current.fadeOut(() => {
            current.insertAfter(current.next()).fadeIn(1000);
        });
    }
    function upText() {
        current.fadeOut(() => {
            current.insertBefore(current.prev()).fadeIn(1000);
        });
    }
    direction === 1 ? downText() : upText();
}