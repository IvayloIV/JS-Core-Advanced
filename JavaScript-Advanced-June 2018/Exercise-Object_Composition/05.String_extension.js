(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this + '';
    };
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this + '';
    };
    String.prototype.isEmpty = function () {
      return (this + '') === '';
    };
    String.prototype.truncate = function (n) {
        let element = this;
        if (element.length <= n) {
            return element + ''
        }
        if (n < 4) {
            return '.'.repeat(n);
        }
        let spaces = element.split(' ');
        if (spaces.length > 1) {
            let result = [];
            while (spaces.length !== 0) {
                let currentSpace = spaces.shift();
                if ((result.join(' ') + currentSpace + '...').length > n) {
                    break;
                }
                result.push(currentSpace);
            }
            result[result.length - 1] += '...';
            return result.join(' ');
        } else {
            return element.substr(0, element.length - n - 3) + '...';
        }
    };
    String.format = function () {
        let currentStr = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            let pattern = new RegExp(`\\{${i - 1}\\}`, 'g');
            currentStr = currentStr.replace(pattern, arguments[i]);
        }
        return currentStr;
    }
})();

var testString = 'the quick brown fox jumps over the lazy dog';
console.log(testString.truncate(10));
console.log(testString.truncate(25));
console.log(testString.truncate(43));
console.log(testString.truncate(45));
