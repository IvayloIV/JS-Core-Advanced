class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings =[];
        this.currentBookingNumber = 1;
        this.rooms = {
            single: Math.floor(capacity * 0.5),
            double: Math.floor(capacity * 0.3),
            maisonette: Math.floor(capacity * 0.2)
        };
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        };
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (!this.rooms.hasOwnProperty(roomType) || this.rooms[roomType] <= 0) {
            let info = [`No ${roomType} rooms available!`];
            for(let kvp of Object.entries(this.rooms)) {
                if (kvp[1] > 0) {
                    info.push(`Available ${kvp[0]} rooms: ${kvp[1]}.`);
                }
            }

            return info.join(' ');
        }

        const newRoom = {
            clientName,
            roomType,
            nights,
            roomNumber: this.currentBookingNumber
        };

        this.bookings.push(newRoom);

        this.currentBookingNumber++;
        this.rooms[roomType]--;

        return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${newRoom.roomNumber}.`;
    }

    roomService(currentBookingNumber, serviceType) {
        let booking = this.bookings.filter(a => a.roomNumber === currentBookingNumber)[0];
        if (!booking) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        if (Object.keys(this.servicesPricing).indexOf(serviceType) === -1) {
            return `We do not offer ${serviceType} service.`;
        }

        if (!booking.hasOwnProperty('services')) {
            booking['services'] = [];
        }

        booking['services'].push(serviceType);
        return `Mr./Mrs. ${booking.clientName}, Your order for ${serviceType} service has been successful.`;
    }

    checkOut(currentBookingNumber) {
        let index = this.bookings.findIndex(a => a.roomNumber === currentBookingNumber);
        if (index === -1) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        let booking = this.bookings[index];
        this.bookings.splice(index, 1);

        this.rooms[booking.roomType]++;
        let totalMoney = booking.nights * this.roomsPricing[booking.roomType];

        if (!booking.services) {
            return `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
        } else {
            let servicesPrice = 0;
            for(let service of booking.services) {
                servicesPrice += this.servicesPricing[service];
            }

            return `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}. The total amount of money you have to pay is ${totalMoney + servicesPrice} BGN. You have used additional room services, costing ${servicesPrice} BGN.`;
        }
    }

    report() {
        let result = [`${this.name.toUpperCase()} DATABASE:`];
        result.push('-'.repeat(20));
        for (let i = 0; i < this.bookings.length; i++) {
            const booking = this.bookings[i];
            result.push(`bookingNumber - ${booking.roomNumber}`);
            result.push(`clientName - ${booking.clientName}`);
            result.push(`roomType - ${booking.roomType}`);
            result.push(`nights - ${booking.nights}`);

            if (booking.services) {
                result.push(`services: ${booking.services.join(', ')} `);
            }
            
            if (i < this.bookings.length - 1) {
                result.push('-'.repeat(10));
            }
        }

        if (this.bookings.length === 0) {
            result.push('There are currently no bookings.');
        }

        return result.join('\n').trim();
    }
}

let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));

console.log(hotel.checkOut(2));
