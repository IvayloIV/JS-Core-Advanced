class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
        this.kidsCount = 0;
    }

    registerChild(name, grade, budget) {
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        if (this.kids[grade].some(a => a.split('-')[0] === name)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        this.kids[grade].push(`${name}-${budget}`);
        this.kidsCount++;
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade)) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        let index = this.kids[grade].map(a => a.split('-')[0]).indexOf(name);
        if (index === -1) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        this.kidsCount--;
        this.kids[grade].splice(index, 1);
        return this.kids[grade];
    }

    get numberOfChildren() {
        return this.kidsCount;
    }

    toString() {
        if (this.kidsCount === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = `${this.organizer} will take ${this.kidsCount} children on trip to ${this.destination}`;
        for (let kvp of Object.entries(this.kids).sort((a, b) => a[0] - b[0])) {
            if (kvp[1].length > 0) {
                result += `\nGrade: ${kvp[0]}\n`;
                let counter = 1;
                result += kvp[1].map(a => `${counter++}. ${a}`).join('\n');
            }
        }

        return result + `\n`;
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());


