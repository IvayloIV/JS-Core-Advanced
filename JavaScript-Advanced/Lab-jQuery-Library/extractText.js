function extractText() {
    let result = [];
    $('#items li').toArray().forEach(element => result.push(element.textContent));
    $('#result').text(result.join(', '));
}