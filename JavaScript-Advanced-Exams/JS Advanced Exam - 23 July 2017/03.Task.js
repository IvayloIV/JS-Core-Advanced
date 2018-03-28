class Task {
    constructor(title, deadline){
        this.title = title;
        this._deadline = deadline;
        this.status = 'Open';
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value < Date.now()){
            throw new Error("Invalid Date");
        }
        this._deadline = value;
    }

    get isOverdue(){
        return this._deadline < Date.now() && this.status !== 'Complete';
    }
    toString() {
        if (this.isOverdue === true){
            return `[\u26A0] ${this.title} (overdue)`;
        } else if (this.status === 'Complete'){
            return `[\u2714] ${this.title}`;
        } else {
            return `[${this.getStatus()}] ${this.title} (deadline: ${this._deadline})`;
        }
    }
    getStatus() {
        if (this.status === "Open"){
            return '\u2731';
        } else if (this.status === "In Progress"){
            return '\u219D';
        }
    }
    static comparator(a, b){
        let result = a.numberStatus - b.numberStatus;

        if (result === 0){
            if (a._deadline < b._deadline) {
                return -1;
            } else if (a._deadline > b._deadline){
                return 1;
            } else {
                return 0;
            }
        } else {
            return result;
        }
    }

    get numberStatus(){
        if (this.isOverdue === true){
            return 0;
        } else if (this.status === 'Complete'){
            return 3;
        } else if (this.status === 'Open'){
            return 2;
        } else if (this.status === 'In Progress'){
            return 1;
        }
    }
}
let date1 = new Date();
let date2 = new Date();
let date3 = new Date();
let date4 = new Date();
let date5 = new Date();
let date6 = new Date();
let date7 = new Date();
let date8 = new Date();
date1.setDate(105);
date2.setDate(110);
date3.setDate(115);
date4.setDate(120);
date5.setDate(125);
date6.setDate(130);
date7.setDate(135);
date8.setDate(140);
let task1 = new Task('Task1', date1);
let task2 = new Task('Task2', date2);
let task3 = new Task('Task3', date3);
let task4 = new Task('Task4', date4);
let task5 = new Task('Task5', date5);
let task6 = new Task('Task6', date6);
let task7 = new Task('Task7', date7);
let task8 = new Task('Task8', date8);

task1.status = 'Complete';
task3.status = 'In Progress';
task6.status = 'In Progress';
task7.status = 'In Progress';
task8.status = 'Complete';

let tasklist = [
    task4, task5, task7, task6, task3, task2, task8, task1
];

let targetDate = new Date();
targetDate.setDate(117);
tasklist.sort(Task.comparator);
console.log(tasklist.map(a => a.toString()).join('\n'));
console.log(tasklist[7].title);