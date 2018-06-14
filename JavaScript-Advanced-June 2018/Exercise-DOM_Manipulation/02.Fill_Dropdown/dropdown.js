function addItem() {
    let itemTextInput = document.getElementById('newItemText');
    let itemValueInput = document.getElementById('newItemValue');
    if (itemTextInput.value === '' || itemValueInput.value === ''){
        return;
    }
    let option = document.createElement('option');
    option.textContent = itemTextInput.value;
    option.value = itemValueInput.value;
    document.getElementById('menu').appendChild(option);
    itemTextInput.value = '';
    itemValueInput.value = '';
}