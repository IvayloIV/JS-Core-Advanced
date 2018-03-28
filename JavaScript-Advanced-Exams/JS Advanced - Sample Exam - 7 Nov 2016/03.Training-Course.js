class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(currentTitle, date) {
        this.topics.push({
            title: currentTitle,
            date: date
        });
        this.topics.sort((a, b) => a.date - b.date);
        return this;
    }

    get firstTopic() {
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }

    toString() {
        let result = `Course "${this.title}" by ${this.trainer}\n`;
        let resultArr = [];
        this.topics.forEach((el) => {
            resultArr.push(` * ${el.title} - ${el.date}`);
        });
        return result + resultArr.join('\n');
    }
}

let test = new TrainingCourse("PHP", "Royal");
test.addTopic('Syntax', new Date(2017, 10, 12, 18, 0));
test.addTopic('Exam prep', new Date(2017, 10, 14, 18, 0));
test.addTopic('Intro', new Date(2017, 10, 10, 18, 0));

console.log(test.toString());

