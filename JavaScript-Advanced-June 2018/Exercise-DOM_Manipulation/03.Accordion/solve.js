function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let item = document.getElementById('extra');
    if (button.textContent === 'More') {
        item.style.display = 'block';
        button.textContent = 'Less'
    } else {
        item.style.display = 'none';
        button.textContent = 'More'
    }
}