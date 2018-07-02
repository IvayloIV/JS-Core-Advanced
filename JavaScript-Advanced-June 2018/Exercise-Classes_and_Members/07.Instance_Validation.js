class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(newClientId) {
        if (!/^[0-9]{6}$/.test(newClientId)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = newClientId;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        if (!/^[A-Za-z0-9]+@[A-Za-z.]+$/.test(newEmail)) {
            throw new TypeError('Invalid e-mail');
        }
        this._email = newEmail;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(newFirstName) {
        if (!/^[A-Za-z]{3,20}$/.test(newFirstName)) {
            if (newFirstName.length < 3 || newFirstName.length > 20) {
                throw new TypeError(`First name must be between 3 and 20 characters long`);
            } else {
                throw new TypeError(`First name must contain only Latin characters`);
            }
        }
        this._firstName = newFirstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(newLastName) {
        if (!/^[A-Za-z]{3,20}$/.test(newLastName)) {
            if (newLastName.length < 3 || newLastName.length > 20) {
                throw new TypeError(`Last name must be between 3 and 20 characters long`);
            } else {
                throw new TypeError(`Last name must contain only Latin characters`);
            }
        }
        this._lastName = newLastName;
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')