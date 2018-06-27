function solve() {
    function add(element) {
        this.arr.push(element);
        this.arr = this.arr.sort((a, b) => a - b);
        this.size++;
    }
    function remove(index) {
        if (index >= 0 && index <= this.arr.length - 1) {
            this.arr.splice(index, 1);
            this.size--;
        }
    }
    function get(index) {
        if (index >= 0 && index <= this.arr.length - 1) {
            return this.arr[index];
        }
    }
    return {
        arr : [],
        add,
        remove,
        get,
        size : 0
    }
}

let t = solve();
t.add(5);
console.log(t.size);
t.add(3);
t.remove(0);