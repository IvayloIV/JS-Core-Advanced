class PaymentProcessor {
    constructor(currentObj){
        this.precision = 2;
        this.type = this.validateInput(currentObj);
        this.allProcessors = [];
    }
    validateInput(currentObj){
        let result = [];
        if (currentObj === undefined){
           return ["service", "product", "other"];
        } else if (currentObj.types !== undefined) {
            result = currentObj.types;
        } else {
            result = ["service", "product", "other"];
        }

        if (currentObj.precision !== undefined){
            this.precision = currentObj.precision;
        }
        return result;
    }

    registerPayment(id, name, type, value){
        if (id === "" || name === "" || !(!isNaN(value) && value !== null)){
            throw new Error();
        }
        if (!this.type.includes(type) || this.allProcessors.some(a => a.id === id)){
            throw new Error();
        }
        this.allProcessors.push({id, name, type, value});
    }

    deletePayment(id){
        if (this.allProcessors.every(a => a.id !== id)){
            throw new Error();
        }
        for (let i = 0; i < this.allProcessors.length; i++) {
            if (this.allProcessors[i].id === id){
                this.allProcessors.splice(i, 1);
                i--;
            }
        }
    }

    get(id) {
        if (this.allProcessors.every(a => a.id !== id)){
            throw new Error();
        }
        let allMatch = `Details about payment ID: ${id}`;
        for (let prossesor of this.allProcessors) {
            if(prossesor.id === id){
                allMatch += `\n- Name: ${prossesor.name}\n- Type: ${prossesor.type}\n- Value: ${prossesor.value.toFixed(this.precision)}`;
            }
        }
        return allMatch;
    }

    setOptions(option){
        if (option.types !== undefined){
            this.type = option.types;
        }

        if (option.precision !== undefined){
            this.precision = option.precision;
        }
    }

    toString(){
        let result = "Summary:\n";
        let sum = 0;
        for (let moment of this.allProcessors) {
            sum += moment.value;
        }
        return result += `- Payments: ${this.allProcessors.length}\n- Balance: ${sum.toFixed(this.precision)}`;
    }
}

const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 34);
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 34);
console.log(transactionLog.toString());

