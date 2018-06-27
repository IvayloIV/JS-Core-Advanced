function solve() {
    let id = 0;
    let data = [];
    let section = null;

    function createHtml(obj) {
        return $('<div>').attr('id', `report_${obj.id}`).addClass('report')
            .append($('<div>').addClass('body')
                .append($('<p>').text(obj.description)))
            .append($('<div>').addClass('title')
                .append($('<span>').addClass('author').text(`Submitted by: ${obj.author}`))
                .append($('<span>').addClass('status').text(`${obj.status} | ${obj.severity}`)));
    }

    function report(author, description, reproducible, severity) {
        let obj = {
            id: id++,
            author,
            description,
            reproducible,
            severity,
            status: 'Open'
        };
        obj['html'] = createHtml(obj);
        data.push(obj);
        updateObj();
    }
    
    function setStatus(id, newStatus) {
        let item = data.filter(a => a['id'] === id);
        if (item.length === 0) {
            return;
        }
        item[0]['status'] = newStatus;
        item[0]['html'] = createHtml(item[0]);
        updateObj();
    }
    
    function remove(id) {
        let index = -1;
        for (let i = 0; i < data.length; i++) {
            if (data[i]['id'] === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            delete data[index];
            updateObj();
        }
    }

    function sort(method) {
        if (method === 'ID') {
            data = data.sort((a, b) => a['id'] - b['id']);
        } else if (method === 'severity') {
            data = data.sort((a, b) => a['severity'] - b['severity']);
        } else if (method === 'author') {
            data = data.sort((a, b) => a['author'].localeCompare(b['author']));
        }
        updateObj();
    }

    function output(sel) {
        section = $(sel);
        updateObj();
    }
    
    function updateObj() {
        if (section !== null) {
            $(section).empty();
            data.forEach(e => $(section).append(e['html']));
        }
    }
    return {
        report,
        setStatus,
        remove,
        sort,
        output
    }
}