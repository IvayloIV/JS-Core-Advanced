class SotredArr{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
    add(element){
        this.arr.push(Number(element));
        this.size++;
        this.arr.sort((a, b) => a - b);
    }
    remove(index){
        if (index >= 0 && index <= this.arr.length - 1){
            this.arr.splice(index, 1);
            this.size--;
            this.arr.sort((a, b) => a - b);
        }
    }
    get(index){
        if (index >= 0 && index <= this.arr.length - 1){
            return this.arr[index];
        }
    }
}
let p = new SotredArr();
p.add(23);
p.add(21);
p.add(3);
p.remove(0);
console.log(p.size);