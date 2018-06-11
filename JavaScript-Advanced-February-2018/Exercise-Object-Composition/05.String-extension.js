(function () {
    String.prototype.ensureStart = function (str) {
        let endProduct = this;
        if (!this.startsWith(str)){
            endProduct = str + this;
        }
        return endProduct.toString();
    };
    String.prototype.ensureEnd = function (str) {
        let endProduct = this;
        if (!this.endsWith(str)){
            endProduct += str;
        }
        return endProduct.toString();
    };

    String.prototype.isEmpty = function () {
        return this == "";
    };
    String.prototype.truncate = function (n) {
        let endProduct = "";
        endProduct += this;
        if (endProduct.length <= n){
            return endProduct;
        }
        let endProdTokens = endProduct.split(' ');
        while (endProduct.length > n && endProdTokens.length !== 1){
            endProduct = '';
            let count = 0;
            while (endProduct.length + endProdTokens[count].length + 3 <= n){
                endProduct += endProdTokens[count] + " ";
                count++;
            }
            endProduct = endProduct.trim();
            endProduct += '...';
        }
        if (endProdTokens.length === 1){
            if (n < 3){
                endProduct = '.'.repeat(n);
            }else{
                let leftPart = endProduct.substr(0, n - 3);
                endProduct = leftPart + '...';
            }
        }
        return endProduct;
    };
    String.format = function() {
        let currentReplaceText = arguments[0];
        let count = 0;
        for (let i = 1; i < arguments.length; i++) {
            let index = currentReplaceText.indexOf(`{${count}`);
            if (index === -1){
                continue;
            }
            let leftPart = currentReplaceText.substr(0, index);
            let rightPart = currentReplaceText.substr(index + 2 + i.toString().length, currentReplaceText.length);
            currentReplaceText = leftPart + arguments[i] + rightPart;
            count++;
        }
        console.log(currentReplaceText);
        return currentReplaceText;
    };
})();
let testString = 'the quick brown fox jumps over the lazy dog';
console.log(testString.truncate(6));
console.log(testString.truncate(25));
console.log(testString.truncate(43));
console.log(testString.truncate(45));





