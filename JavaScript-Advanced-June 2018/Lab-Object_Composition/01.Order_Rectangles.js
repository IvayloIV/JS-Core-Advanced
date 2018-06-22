function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        arr[i] = {
            width: element[0],
            height: element[1],
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let diff = other.area() - this.area();
                return diff || other.width - this.width;
            }
        };
    }
    return arr.sort((a, b) => a.compareTo(b));
}

console.log(solve([[10, 5], [3, 20], [5, 12]]));