function addItem() {
    let input = document.getElementById('newItemText');
    if (input.value === '') {
        return;
    }
    let li = document.createElement('li');
    li.textContent = input.value;
    document.getElementById('items').appendChild(li);
    input.value = '';
}