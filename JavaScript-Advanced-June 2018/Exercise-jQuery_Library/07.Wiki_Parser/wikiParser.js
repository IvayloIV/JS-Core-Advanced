function wikiParser(selector) {
    $(selector).html(
        $(selector).text()
            .replace(/'''(.*?)'''/g, (g0, g1) => `<b>${g1}</b>`)
            .replace(/''(.*?)''/g, (g0, g1) => `<i>${g1}</i>`)
            .replace(/''(.*?)''/g, (g0, g1) => `<i>${g1}</i>`)
            .replace(/===(.*?)===/g, (g0, g1) => `<h3>${g1}</h3>`)
            .replace(/==(.*?)==/g, (g0, g1) => `<h2>${g1}</h2>`)
            .replace(/=(.*?)=/g, (g0, g1) => `<h1>${g1}</h1>`)
            .replace(/\[\[([^|[]+?)]]/g, (g0, g1) => `<a href="/wiki/${g1}">${g1}</a>`)
            .replace(/\[\[(.*?)\|(.*?)]]/g, (g0, g1, g2) => `<a href="/wiki/${g1}">${g2}</a>`)
    );
}