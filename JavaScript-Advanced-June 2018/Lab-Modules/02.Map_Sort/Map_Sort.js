function mapSort(map, sortType) {
    let book = new Map();
    let sortFunc = (a, b) => {
        if (typeof a[0] === 'string') {
            return a[0].localeCompare(b[0]);
        }
        return a[0] - b[0];
    };
    if (sortType !== undefined) {
        sortFunc = sortType;
    }
    for (let el of Array.from(map).sort(sortFunc)) {
        book.set(el[0], el[1]);
    }
    return book;
}

module.exports = mapSort;