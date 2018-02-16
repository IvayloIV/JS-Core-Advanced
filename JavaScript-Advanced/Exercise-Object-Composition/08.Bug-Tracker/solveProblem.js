function getModule(){
    let persons = [];
    let id = 0;
    let currentSelector = null;
    return {
        report,
        setStatus,
        remove,
        sort,
        output
    };
    function report(currentAuthor, currentDescription, currentReproducible, currentSeverity){
        persons.push({
            ID : id,
            author : currentAuthor,
            description : currentDescription,
            reproducible : currentReproducible,
            severity : currentSeverity,
            status : 'Open'
        });
        id++;
        printResuslt(currentSelector);
    }
    function setStatus(id, newStatus){
        persons.find(a => a['ID'] === id).status = newStatus;
        printResuslt(currentSelector);
    }
    function remove(currentId){
        let index = findRemovedIndex(currentId);
        if (index > -1) {
            persons.splice(index, 1);
        }
        printResuslt(currentSelector);
    }
    function findRemovedIndex(currentId){
        let count = 0;
        for (let obj of persons) {
            if (obj.ID === currentId){
                return count;
            }
            count++;
        }
        printResuslt(currentSelector);
    }
    function sort(method){
        if (method === 'author'){
            persons = persons.sort((a, b) => a.author.localeCompare(b.author));
        } else if (method === 'severity') {
            persons = persons.sort((a, b) => a.severity - b.severity);
        } else if (method === 'ID') {
            persons = persons.sort((a, b) => a.ID - b.ID);
        }
        printResuslt(currentSelector);
    }
    function output(selector) {
        currentSelector = selector;
    }
    function printResuslt(currentSelector){
        if (currentSelector !== null){
            let selectArea = $(currentSelector);
            selectArea.text('');
            for (let person of persons) {
                let html = `<div id="report_${person.ID}" class="report">\n`;
                html += `  <div class="body">\n`;
                html += `    <p>${person.description}</p>\n`;
                html += `  </div>\n  <div class="title">\n    <span class="author">Submitted by: ${person.author}</span>\n`;
                html += `    <span class="status">${person.status} | ${person.severity}</span>\n  </div>\n</div>`;
                selectArea.append(html);
            }
        }
    }
}