function extractText() {
    let text = document.querySelectorAll('#items li');
    for (let textElement of text) {
        document.getElementById('result').value += textElement.textContent + '\n';
    }
}