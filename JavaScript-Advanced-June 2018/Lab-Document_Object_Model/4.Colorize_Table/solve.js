function colorize() {
    let tr = document.querySelectorAll('table tr');
    for (let i = 1; i < tr.length; i++) {
        if ((i - 1) % 2 === 0) {
            tr[i].style.background = 'teal';
        }
    }
}