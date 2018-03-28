function solve(selector) {
    $(selector).on('click', makeSummary);

    function makeSummary() {
        let newSummary = $('<div>').attr('id', 'summary')
            .append($('<h2>').text('Summary'))
            .append($('<p>').append($('#content strong').text()));
        $('#content').append(newSummary);
    }
}