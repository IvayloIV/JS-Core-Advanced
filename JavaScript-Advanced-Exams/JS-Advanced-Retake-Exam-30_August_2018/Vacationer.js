class Vacationer {
    constructor(objFullName, objCreditCard){
        this.fullName = objFullName;
        this.creditCard = objCreditCard;
        this.wishList = [];
        this.idNumber = this.generateIDNumber();
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(objFullName) {
        if (objFullName.length !== 3) {
            throw new Error(`Name must include first name, middle name and last name`);
        }
        for (let name of objFullName) {
            this.ValidateName(name);
        }
        this._fullName = {
            firstName: objFullName[0],
            middleName: objFullName[1],
            lastName: objFullName[2]
        };
    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(objCreditCard) {
        this._creditCard = {};
        if (objCreditCard === undefined) {
            this._creditCard = {
                cardNumber: 1111,
                expirationDate: "",
                securityNumber: 111
            };
        } else {
            this.ValidateCreditCard(objCreditCard);
            this._creditCard = {
                cardNumber: objCreditCard[0],
                expirationDate: objCreditCard[1],
                securityNumber: objCreditCard[2]
            };
        }
    }

    ValidateName(name) {
        if (!/^[A-Z][a-z]+$/.test(name)) {
            throw new Error(`Invalid full name`);
        }
    }

    generateIDNumber() {
        let vowel = ["a", "e", "o", "i", "u"];
        let sum = 231 * this.fullName['firstName'].charCodeAt(0) + 139 * this.fullName['middleName'].length;
        if (vowel.indexOf(this.fullName['lastName'].slice(-1)) !== -1) {
            sum += '8';
        } else {
            sum += '7';
        }
        return sum;
    }

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error(`Missing credit card information`);
        }
        this.ValidateCreditCard(input);
        this.creditCard = input;
    }

    ValidateCreditCard(input) {
        let cardNumber = input[0];
        let securityNumber = input[2];
        if (isNaN(Number(cardNumber)) || typeof cardNumber !== 'number'|| cardNumber.length === 0 ||
            isNaN(Number(securityNumber)) || typeof securityNumber !== 'number' || securityNumber.length === 0) {
            throw new Error(`Invalid credit card details`);
        }
    }

    addDestinationToWishList(destination) {
        if (this.wishList.indexOf(destination) !== -1) {
            throw new Error(`Destination already exists in wishlist`);
        }
        this.wishList.push(destination);
        this.wishList = this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        return `Name: ${this.fullName['firstName']} ${this.fullName['middleName']} ${this.fullName['lastName']}
ID Number: ${this.idNumber}
Wishlist:
${this.wishList.length === 0 ? "empty" : this.wishList.join(', ')}
Credit Card:
Card Number: ${this.creditCard['cardNumber']}
Expiration Date: ${this.creditCard['expirationDate']}
Security Number: ${this.creditCard['securityNumber']}`;
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
