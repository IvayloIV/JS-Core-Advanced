function sum() {
    let tr = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1; i < tr.length - 1; i++) {
        let currentElement = tr[i].children;
        sum += Number(currentElement[currentElement.length - 1].textContent);
    }
    document.getElementById('sum').textContent = sum.toString();
}