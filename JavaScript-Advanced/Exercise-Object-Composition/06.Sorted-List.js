function getSortArr() {
    return{
        arr : [],
        add,
        remove,
        get,
        size : 0
    };
    function add(num) {
      this.arr.push(Number(num));
      this.size++;
      sortArr(this.arr);
    }
    function remove(index) {
        if (index >= 0 && index <= this.arr.length - 1){
            this.arr.splice(index, 1);
            this.size--;
        }
    }
    function get(index) {
        if (index >= 0 && index <= this.arr.length - 1){
            return this.arr[index];
        }
    }
    function sortArr(elementsArr) {
        elementsArr.sort((a, b) => a - b);
    }
}
let myList = getSortArr();
myList.add(5);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);
