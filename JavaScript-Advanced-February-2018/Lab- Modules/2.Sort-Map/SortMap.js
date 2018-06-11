function mapSort(map, currentSort) {
    function sortMyArr(a, b) {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    }

    let newMap = new Map();
    [...map].sort(currentSort === undefined ? sortMyArr : currentSort).forEach((pair) => {
        newMap.set(pair[0], pair[1]);
    });
    return newMap;
}

module.exports = mapSort;