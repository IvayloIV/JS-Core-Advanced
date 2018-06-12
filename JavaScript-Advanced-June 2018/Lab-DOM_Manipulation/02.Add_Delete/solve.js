function addItem() {
    let inputNewText = document.getElementById('newText');
    if (inputNewText.value.trim() === '') {
        return;
    }
    let li = document.createElement('li');
    li.textContent = inputNewText.value + ' ';
    let deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    deleteButton.addEventListener('click', function () {
        let currentItem = this.parentNode;
        currentItem.parentNode.removeChild(currentItem);
    });
    li.appendChild(deleteButton);
    document.getElementById('items').appendChild(li);
    inputNewText.value = '';
}