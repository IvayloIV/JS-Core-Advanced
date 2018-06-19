function getArticleGenerator(totalArticles) {
    return function () {
        if (totalArticles.length > 0) {
            $('#content').append($('<article>').text(totalArticles.shift()));
        }
    }
}