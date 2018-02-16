function solution(type) {
    if (type === "upvote"){
        this.upvotes++;
    } else if (type === "downvote"){
        this.downvotes++;
    } else if (type === `score`){
        let upvote = this.upvotes;
        let downvote = this.downvotes;
        let rating = 'new';
        let balanced = upvote - downvote;

        if (upvote + downvote >= 10){
            if (upvote > 0.66 * (upvote + downvote)){
                rating = "hot";
            } else if (upvote > 100 || downvote > 100){
                rating = "controversial";
            } else if (balanced < 0){
                rating = "unpopular";
            }
        }
        if (upvote + downvote > 50){
            let added = Math.ceil(0.25 * Math.max(upvote, downvote));
            upvote += added;
            downvote += added;
        }
        return [upvote, downvote, balanced, rating];
    }
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
console.log(solution.call(post, 'score')); // [127, 127, 0, 'controversial']
//solution.call(post, 'downvote');        // (executed 50 times)
//score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
