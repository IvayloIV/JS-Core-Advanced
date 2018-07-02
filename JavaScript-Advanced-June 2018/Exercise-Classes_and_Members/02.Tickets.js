function solve(arr, sortType) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = [];
    for (const element of arr) {
        let tokens = element.split('|').map(a => a.trim());
        result.push(new Ticket(tokens[0], tokens[1], tokens[2]));
    }
    if (sortType === 'price') {
        return result.sort((a, b) => a[sortType] - b[sortType]);
    }
    return result.sort((a, b) => a[sortType].localeCompare(b[sortType]));
}

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price');