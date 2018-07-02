class Textbox {
    constructor(selector, regex) {
        this._invalidSymbols = regex;
        this._elements  = $(selector);
        this.value = $(this.elements[0]).val();
        this.loadEvents();
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
        $(this.elements).val(newValue);
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }

    loadEvents() {
        let thas = this;
        $(this.elements).on('input', function () {
            thas.value = $(this).val();
        });
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});