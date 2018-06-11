function getArticleGenerator(articles) {
    let placeForText = $('#content');
    return function() {
        if (articles.length > 0){
            let currentArticle = articles.shift();
            placeForText.append($('<article>').append($('<p>').text(currentArticle)));
        }
    }
}