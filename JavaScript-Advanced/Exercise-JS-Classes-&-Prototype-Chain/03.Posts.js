function solve() {
    class Post {
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comment = [];
        }
        addComment(currentComment){
            this.comment.push(currentComment);
        }
        toString(){
            let result = super.toString();
            result += `\nRating: ${this.likes - this.dislikes}`;
            if (this.comment.length > 0){
                result += `\nComments:\n`;
                for (let comment of this.comment) {
                    result += ` * ${comment}\n`;
                }
            }
            return result.trim();
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            let result = super.toString();
            result += `\nViews: ${this.views}`;
            return result;
        }
    }
    return {Post, BlogPost, SocialMediaPost};
}

let BlogPost = solve().BlogPost;
let test = new BlogPost("TestTitle", "TestContent", 5);
test.view().view();
test.view();
console.log(test.toString());



