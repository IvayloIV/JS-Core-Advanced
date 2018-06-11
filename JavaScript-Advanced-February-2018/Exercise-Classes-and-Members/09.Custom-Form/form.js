let result = (function() {
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
    class Form {
        constructor(username,password){
            this._element = $('<div>').addClass('form');
            this.textBoxes = arguments;
        }
        get textBoxes(){
            return this._textboxes;
        }
        set textBoxes(arg){
            for (let arugment of arg) {
                if (!arugment instanceof Textbox){
                    throw new Error("The given parameter is not a textbox!");
                }
            }
            this._textboxes = arg;
            for (let textbox of this._textboxes) {
                for (let obj1 of textbox._elements) {
                    this._element.append(obj1);
                }
            }
        }
        submit() {
            let allValid = true;
            for (let textBox of this._textboxes) {
                if (textBox.isValid()){
                    for (let el of textBox._elements) {
                        $(el).css('border', '2px solid green');
                    }
                } else {
                    for (let el of textBox._elements) {
                        $(el).css('border', '2px solid red');
                    }
                    allValid = false;
                }
            }
            return allValid;
        }
        attach(selector){
            $(selector).append(this._element);
        }
    }
    return {
        Textbox: Textbox,
        Form: Form
    }
}());
let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");

