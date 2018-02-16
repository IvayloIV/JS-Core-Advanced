function solve(arr) {
    let result = [];
    for (let element of arr) {
        let [width, height] = element;
        result.push(createObj(width, height));
    }
    result.sort((a, b) => a.compareTo(b));
    return result;

    function createObj(width, height) {
        return {
            width: width,
            height : height,
            area : function(){
                return width * height;
            },
            compareTo : function (other) {
                let resultOfComcare = other.area() - this.area();
                return resultOfComcare || (other.width - this.width);
            }
        };
    }
}

console.log(solve([[10,5], [3,20], [5,12]]));