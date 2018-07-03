function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let text = super.toString().slice(0, -1);
            return `${text}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let text = super.toString().slice(0, -1);
            return `${text}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let solve = toStringExtension();
let Person = solve.Person;
let Teacher = solve.Teacher;
let Student = solve.Student;
module.exports = {Person, Teacher, Student};