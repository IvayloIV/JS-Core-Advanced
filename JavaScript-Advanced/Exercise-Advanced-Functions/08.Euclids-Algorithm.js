function solve(a, b) {
    let gcd = (function() {
        return function(a, b) {
            if (b === 0){
                return a;
            }
            return gcd(b, a % b);
        }
    })();
    return gcd(a, b);
}

console.log(solve(252, 105)) ;