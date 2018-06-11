class Textbox {
    constructor(selector, pattern){
        this._elements = $(selector);
        this._value = $(this._elements[0]).val();
        this._invalidSymbols = pattern;
        this.onLoadChange();
    }
    onLoadChange(){
        $(this._elements).on('input', (event) => {
            let helperText = $(event.target).val();
            this.value = helperText;
        });
    }
    isValid(){
        return !this._invalidSymbols.test(this._value);
    }
    get value(){
        return this._value;
    }
    set value(text){
        this._value = text;
        for (let el of this._elements) {
            $(el).val(text);
        }
    }
    get elements(){
        return this._elements;
    }
}


let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
