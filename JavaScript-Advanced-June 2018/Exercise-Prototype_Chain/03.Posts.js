function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.postLikes = likes;
            this.postDislikes = dislikes;
            this.commnets = [];
        }
        addComment(comment) {
            this.commnets.push(comment);
        }
        toString() {
            let result = super.toString();
            let rating = this.postLikes - this.postDislikes;
            result += `\nRating: ${rating}`;
            if (this.commnets.length !== 0) {
                result += `\nComments:`;
                this.commnets.forEach(e => result += `\n * ${e}`);
            }
            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let result = solve();
let Post = result.Post;
let SocialMediaPost = result.SocialMediaPost;
let BlogPost = result.BlogPost;

let blog = new BlogPost('pesho', 'car', 2);
blog.view().view().view();
console.log(blog.toString());