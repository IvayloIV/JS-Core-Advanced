class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    
    loadProducts(products) {
        for(let product of products) {
            const tokens = product.split(' ');
            const productName = tokens[0];
            const productQuantity = Number(tokens[1]);
            const productPrice = Number(tokens[2]);

            if (this.budget >= productPrice) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }

                this.productsInStock[productName] += productQuantity;
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        const products = {};

        for(let product of neededProducts) {
            const [name, priceStr] = product.split(' '); 
            products[name] = Number(priceStr);
        }

        this.menu[meal] = { products,  price };
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        const menuArr = Object.entries(this.menu);
        if (menuArr.length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }
        
        return menuArr.map(a => `${a[0]} - $ ${a[1].price}`).join('\n') + '\n';
    }
    
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let isValid = true;
        let neededProducts = this.menu[meal].products;
        for(let product in neededProducts) {
            if (!this.productsInStock.hasOwnProperty(product) || this.productsInStock[product] < neededProducts[product]) {
                isValid = false;
            }
        }

        if (!isValid) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        const mealPrice = this.menu[meal].price;

        for(let product in neededProducts) {
            this.productsInStock[product] -= neededProducts[product];
        }
        this.budget += mealPrice;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealPrice}.`;
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt2', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt4', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt2', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt5', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));