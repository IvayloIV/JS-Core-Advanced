function solution(type) {
    function upvote() {
        this['upvotes']++;
    }

    function downvote() {
        this['downvotes']++;
    }

    function score() {
        let result = [this['upvotes'], this['downvotes']];
        let rating = 'new';

        if (result[0] + result[1] < 10) {
            rating = 'new'
        } else if (result[0] - result[1] < 0) {
            rating = 'unpopular';
        } else if ((result[0] / (result[0] + result[1])) * 100 > 66) {
            rating = 'hot';
        } else if (result[0] > 100 || result[1] > 100) {
            rating = 'controversial'
        }
        if (this['upvotes'] + this['downvotes'] > 50) {
            let max = Math.ceil(Math.max(this['upvotes'], this['downvotes']) * 0.25);
            result[0] += max;
            result[1] += max;
        }
        let totalDiff = result[0] - result[1];
        result.push(totalDiff);
        result.push(rating);
        return result;
    }

    let commands = {upvote, downvote, score};
    return commands[type].call(this);
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 1; i <= 50; i++) {
    solution.call(post, 'downvote');
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);