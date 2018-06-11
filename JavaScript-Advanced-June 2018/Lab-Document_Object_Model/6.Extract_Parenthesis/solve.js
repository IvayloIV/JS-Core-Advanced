function extract(selector) {
    let pattern = /\(([^)]+)\)/g;
    let result = [];
    let text = document.getElementById(selector).textContent;
    let execText = pattern.exec(text);
    while (execText !== null) {
        result.push(execText[1]);
        execText = pattern.exec(text);
    }
    return result.join('; ');
}