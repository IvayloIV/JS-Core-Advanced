function solve() {
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }
    return {Person, Teacher}
}
let Teacher = solve().Teacher;
let t = new Teacher("Gosho", "gosho@abv.bg", 'Math');
console.log(t.name);