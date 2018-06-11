function solve(arr, typeSort) {
    class Ticket{
        constructor (destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let allTickets = [];
    let allSort = {
        price : (a, b) => a['price'] - b['price'],
        destination : (a, b) => a['destination'].localeCompare(b['destination']),
        status : (a, b) => a['status'].localeCompare(b['status'])
    };
    for (let element of arr) {
        let elementTokens = element.split('|');
        let destination = elementTokens[0];
        let price = Number(elementTokens[1]);
        let status = elementTokens[2];
        allTickets.push({
            destination : destination,
            price : price,
            status : status
        });
    }
    allTickets = allTickets.sort(allSort[typeSort]);
    let outputArr = [];
    for (let element of allTickets) {
        outputArr.push(new Ticket(element['destination'], element['price'], element['status']));
    }
    return outputArr;
}

console.log(solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));