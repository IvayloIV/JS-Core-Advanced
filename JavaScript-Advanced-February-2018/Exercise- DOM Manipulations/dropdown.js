function addItem() {
    let text = document.getElementById('newItemText');
    let textValue = document.getElementById('newItemValue');
    let allSelections = document.getElementById('menu');

    if (text.value == "" || textValue.value == ""){
        return;
    }
    let newSelection = document.createElement('option');
    newSelection.value = textValue.value;
    newSelection.textContent = text.value;
    allSelections.appendChild(newSelection);
    text.value = "";
    textValue.value = "";
}