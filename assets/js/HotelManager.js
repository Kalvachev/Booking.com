class HotelManager {
    constructor() {
        this.allHotels = [];
    }

    addHotel(hotel) {
        this.allHotels.push(hotel);
    }

    searchByDestination(searchStr) {
        if (typeof searchStr !== "string" || searchStr.trim().length === 0) {
            return this.allHotels;
        }

        let filtered = this.allHotels.map(el => {
            if (el.destination.toLowerCase() === searchStr.toLowerCase()) {
                return el;
            }
        }).filter(el => el !== undefined);

        return filtered;
    }

    getHotel(hotelName) {
        return this.allHotels.find(hotel => hotel.name === hotelName);
    }
    
}