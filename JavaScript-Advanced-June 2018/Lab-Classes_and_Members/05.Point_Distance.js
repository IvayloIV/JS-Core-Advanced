class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        let diffX = a.x - b.x;
        let diffY = a.y - b.y;
        return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    }
}

function Point2(x, y) {
    this.x = x;
    this.y = y;
}

Point2.distance = function (a, b) {
    let diffX = a.x - b.x;
    let diffY = a.y - b.y;
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

let p1 = new Point2(5, 5);
let p2 = new Point2(9, 8);
console.log(Point2.distance(p1, p2));