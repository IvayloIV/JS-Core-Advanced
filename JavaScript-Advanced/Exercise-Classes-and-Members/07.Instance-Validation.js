class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set clientId(text){
        if (!/^[0-9]{6}$/.test(text)){
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = text;
    }
    get clientId(){
        return this._clientId;
    }

    set email(em){
        if (!/^[A-Za-z]+@[A-Za-z]+(\.[A-Za-z]+)+$/.test(em)){
            throw new TypeError("Invalid e-mail");
        }
        this._email = em;
    }
    get email(){
        return this._email;
    }
    set firstName(fr){
        if (fr.length < 3 || fr.length > 20){
            throw new TypeError("First name must be between 3 and 20 characters long");
        } else if (!/^[A-Za-z]+$/.test(fr)){
            throw new TypeError("First name must contain only Latin characters");
        }
        this._firstName = fr;
    }
    get firstName(){
        return this._firstName;
    }
    set lastName(ls){
        if (ls.length < 3 || ls.length > 20){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        } else if (!/^[A-Za-z]+$/.test(ls)){
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = ls;
    }
    get lastName(){
        return this._lastName;
    }
}
let myTest = new CheckingAccount('123434', 'asdas@asd.asd.asd', 'dfsd', 'gjhf');
console.log(myTest.email);