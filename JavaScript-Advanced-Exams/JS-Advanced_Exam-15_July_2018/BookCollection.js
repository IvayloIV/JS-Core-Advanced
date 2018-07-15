class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
        this.shelfGenre = shelfGenre;
    }

    get room() {
        return this._room;
    }

    set room(newRoom) {
        if (newRoom !== 'livingRoom' && newRoom !== 'bedRoom' && newRoom !== 'closet') {
            throw new Error(`Cannot have book shelf in ${newRoom}`);
        }
        this._room = newRoom;
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelfCapacity <= this.shelf.length) {
            this.shelf.shift();
        }
        this.shelf.push({bookName, bookAuthor, genre});
        this.shelf.sort((a, b) => a['bookAuthor'].localeCompare(b['bookAuthor']));
        return this;
    }

    throwAwayBook(bookName) {
        for (let i = 0; i < this.shelf.length; i++) {
            if (this.shelf[i]['bookName'] === bookName) {
                this.shelf.splice(i, 1);
                i--;
            }
        }
    }

    showBooks(genre) {
        let result = `Results for search "${genre}":\n`;
        for (let shelfElement of this.shelf) {
            if (shelfElement['genre'] !== undefined && shelfElement['genre'] === genre) {
                result += `\uD83D\uDCD6 ${shelfElement['bookAuthor']} - "${shelfElement['bookName']}"\n`;
            }
        }
        return result.trim();
    }

    get shelfCondition() {
        return Math.max(0, this.shelfCapacity - this.shelf.length);
    }

    toString() {
        if (this.shelf.length === 0) {
            return `It's an empty shelf`;
        } else {
            let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            for (let shelfElement of this.shelf) {
                result += `\uD83D\uDCD6 "${shelfElement.bookName}" - ${shelfElement.bookAuthor}\n`;
            }
            return result.trim();
        }
    }
}

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));


