function deleteByEmail() {
    let emailInput = document.getElementsByName('email')[0];
    if (emailInput.value.trim() === '') {
        return;
    }
    let tr = document.querySelectorAll('#customers tr td');
    let isFinding = false;
    for (let i = 1; i < tr.length; i += 2) {
        if (tr[i].textContent === emailInput.value) {
            tr[i].parentNode.parentNode.removeChild(tr[i].parentNode);
            isFinding = true;
        }
    }
    let result = document.getElementById('result');
    if (isFinding) {
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
    emailInput.value = '';
}