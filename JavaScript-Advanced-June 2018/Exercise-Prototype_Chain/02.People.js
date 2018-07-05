function solve() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            let currentTask = this.tasks.shift();
            this.tasks.push(currentTask);
            console.log(currentTask);
        }

        collectSalary() {
            let bonuses = 0;
            if (this.dividend !== undefined) {
                bonuses = this.dividend;
            }
            console.log(`${this.name} received ${this.salary + bonuses} this month.`);
        }

        fillTasks(tasks) {
            tasks.forEach(t => this.tasks.push(t));
        }
    }

    class Junior extends Employee{
        constructor(name, age) {
            super(name, age);
            this.fillTasks([
                `${this.name} is working on a simple task.`
            ]);
        }
    }

    class Senior extends Employee{
        constructor(name, age) {
            super(name, age);
            this.fillTasks([
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ]);
        }
    }

    class Manager extends Employee{
        constructor(name, age) {
            super(name, age);
            this.fillTasks([
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`,
            ]);
            this.dividend = 0;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

let result = solve();
let Employee = result.Employee;
let Junior = result.Junior;
let Senior = result.Senior;
let Manager = result.Manager;

var guy1 = new result.Junior('Peter', 27);
guy1.salary = 1200;
console.log(guy1.collectSalary());
