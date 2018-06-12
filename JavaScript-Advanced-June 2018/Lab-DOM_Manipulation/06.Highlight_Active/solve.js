function focus() {
    let items = document.getElementsByTagName('input');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('focus', function () {
            items[i].parentNode.className = 'focused';
        });
        items[i].addEventListener('blur', function () {
            items[i].parentNode.classList.remove('focused');
        });
    }
}