let result = (function() {

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

    class Form {
        constructor() {
            this._element = $('<div>').addClass('form');
            this._textboxes = [];
            this.validateInput(arguments);
        }

        validateInput(arg) {
            for (let element of arg) {
                if (element instanceof Textbox === false) {
                    throw new Error();
                }
            }
            this._textboxes = arg;
            for (let classElement of arg) {
                classElement._elements.each((i, e) => {
                    $(this._element).append($(e));
                });
            }
        }

        submit() {
            let isValid = true;
            for (let className of this._textboxes) {
                if (className.isValid()) {
                    className._elements.css('border', '2px solid green');
                } else {
                    className._elements.css('border', '2px solid red');
                    isValid = false;
                }
            }
            return isValid;
        }

        attach(selector) {
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