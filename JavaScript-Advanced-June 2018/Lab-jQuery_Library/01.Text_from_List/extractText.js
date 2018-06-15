function extractText() {
    let text = $('#items li').toArray().map(a => $(a).text()).join(', ');
    $('#result').text(text);
}