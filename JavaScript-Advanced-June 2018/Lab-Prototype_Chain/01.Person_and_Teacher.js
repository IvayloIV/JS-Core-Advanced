function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

let solve = personAndTeacher();
let Person = solve.Person;
let Teacher = solve.Teacher;

let t = new Teacher('Ivan', 'ivan@abv.bg', 'Math');
console.log(t);
