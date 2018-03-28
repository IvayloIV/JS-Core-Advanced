class Dialog{
    constructor(text, callback){
        this.text = text;
        this.callback = callback;
        this.allFileds = [];
        this.result = null;
    }

    addInput(label, name, type){
        this.allFileds.push({label, name, type});
    }

    render(){
        this.result = $('<div>').addClass('overlay');
        let dialog = $('<div>').addClass('dialog');
        dialog.append($('<p>').text(this.text));
        for (let elements of this.allFileds) {
            dialog.append($('<label>').text(elements['label']))
                .append($('<input>').attr('name', elements['name']).attr('type', elements['type']));
        }
        dialog.append($('<button>').text('OK').on('click', this.createIt.bind(this)))
            .append($('<button>').text('Cancel').on('click', this.removeDealog.bind(this)));
        this.result.append(dialog);
        $('body').append(this.result);
    }
    removeDealog(){
        this.result.remove();
    }
    createIt(){
        let result = {};
        let allElements = $(this.result).find('input');
        for (let element of allElements) {
            result[$(element).attr('name')] = $(element).val();
        }
        this.callback(result);
        this.result.remove();
    }
}