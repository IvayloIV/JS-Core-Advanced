class Player {
    constructor(name){
        this.name = name;
        this.scores = [];
    }
    addScore(currentScore){
        if (!isNaN(currentScore) && currentScore !== null){
            this.scores.push(Number(currentScore));
        }
        return this;
    }
    get scoreCount(){
        return this.scores.length;
    }
    get highestScore(){
        return this.scores.sort((a, b) => b - a)[0];
    }
    get topFiveScore(){
        return this.scores.sort((a, b) => b - a).slice(0, 5);
    }
    toString(){
        if (this.scores.length === 0){
            return `${this.name}: []`;
        }
        return `${this.name}: [${this.scores.sort((a, b) => b - a)}]`;
    }
}
let p = new Player('Mincho');

p.addScore(390);
p.addScore(120);
p.addScore(32);
p.addScore(32);
p.addScore(32);
p.addScore(32);

console.log(p.topFiveScore);
