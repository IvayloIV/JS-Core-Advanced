function tableBuilder(selector) {
    let data = $('<table>');
    return{
        createTable,
        fillData
    };
    function createTable(arr) {
        let newTr = $('<tr>');
        arr.forEach((e) => {
            newTr.append($('<th>').text(e));
        });
        newTr.append($('<th>').text('Action'));
        data.append(newTr);
        $(selector).empty();
        $(selector).append(data);
    }
    function fillData(arr) {
        arr.forEach((el) => {
            let newTr = $('<tr>');
            el.forEach((e) => {
                newTr.append($('<td>').text(e));
            });
            newTr.append($('<td>').append($('<button>').text('Delete').on('click', removeElement)));
            data.append(newTr);
        });
        $(selector).append(data);
    }
    function removeElement() {
        this.parentNode.parentNode.remove();
    }
}