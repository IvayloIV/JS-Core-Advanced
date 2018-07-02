class SortedList {
    constructor() {
        this.nums = [];
        this.size = 0;
    }

    add(element) {
        this.nums.push(element);
        this.nums = this.nums.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        this.isInsideIndex(index);
        this.nums.splice(index, 1);
        this.size--;
    }

    get(index) {
        this.isInsideIndex(index);
        return this.nums[index];
    }

    isInsideIndex(index) {
        if (index < 0 || index > this.nums.length - 1) {
            throw new RangeError('Invalid index');
        }
    }
}

let test = new SortedList();
test.add(3);
test.add(1);
test.add(-1);
console.log(test.nums.join(', '));
test.remove(0);
console.log(test.get(0));
console.log(test.size);
//test.remove(-1);
// test.get(2);