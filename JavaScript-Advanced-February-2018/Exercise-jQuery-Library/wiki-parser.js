function wikiParser(selector) {
    let item = $(selector);
    let text = $(item).text();
    let replacedText = text.replace(/'''([^'=\[]+)'''/g, (fullMatch, g1) => `<b>${g1}</b>`)
        .replace(/''([^'=\[]+)''/g, (fullMatch, g1) => `<i>${g1}</i>`)
        .replace(/===([^'=\[]+)===/g, (fullMatch, g1) => `<h3>${g1}</h3>`)
        .replace(/==([^'=\[]+)==/g, (fullMatch, g1) => `<h2>${g1}</h2>`)
        .replace(/=([^'=\[]+)=/g, (fullMatch, g1) => `<h1>${g1}</h1>`)
        .replace(/\[\[([^'=\[\]]+)\|([^'=\[\]]+)]]/g, (fullMatch, g1, g2) => `<a href="/wiki/${g1}">${g2}</a>`)
        .replace(/\[\[([^'=\[\]]+)]]/g, (fullMatch, g1) => `<a href="/wiki/${g1}">${g1}</a>`);
              
    $(selector).html(replacedText);
}
