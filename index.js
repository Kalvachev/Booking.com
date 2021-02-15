(function () {
    let hotelManager = new HotelManager();

    hotels.forEach(hotel => {
        let currentHotel = new Hotel(
            hotel.name,
            hotel.address,
            hotel.rating,
            hotel.stars,
            hotel.facilities,
            hotel.pictures,
            hotel.type,
            hotel.price
        )

        hotelManager.addHotel(currentHotel);
    })

    function onHashChange() {
        const hash = location.hash.substring(1);

        switch (hash) {
            case 'home':
                HOME_PAGE.style.display = 'block';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'none';
                break;
            case 'rent':
                HOME_PAGE.style.display = 'none';
                RENT_CAR_PAGE.style.display = 'block';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'none';
                break;
            case 'attractions':
                HOME_PAGE.style.display = 'none';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'block';
                TAXI_PAGE.style.display = 'none';
                break;
            case 'taxis':
                HOME_PAGE.style.display = 'none';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'block';
                break;
            default:
                HOME_PAGE.style.display = 'block';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'none';
                break;
        }
    }

    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('DOMContentLoaded', onHashChange);

    function printLikedHomes() {
        let favouriteHotels = hotels.map(function (el) {
            if (el.rating > 7.8) {
                return el
            }
        }).filter(el => el !== undefined);

        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * favouriteHotels.length);
            let currentElement = favouriteHotels[randomNumber];

            let hotelCard = document.createElement('div');
            hotelCard.setAttribute('class', 'hotelCard');

            let hotelPictureContainer = document.createElement('div');
            let hotelPicture = document.createElement('img');
            hotelPicture.src = currentElement.pictures[0];
            hotelPicture.alt = currentElement.name + "'s picture";
            hotelPictureContainer.setAttribute('class', 'hotelPictureContainer');

            let hotelNameAndDestination = document.createElement('div');
            let hotelName = document.createElement('h3');
            hotelName.innerText = currentElement.name;
            let hotelDestination = document.createElement('p');
            hotelDestination.innerText = currentElement.address.split(', ')[2];
            hotelNameAndDestination.setAttribute('class', 'hotelNameAndDestination');

            let hotelPriceContainer = document.createElement('div');
            let hotelPrice = document.createElement('p')
            hotelPrice.innerText = 'BGN ' + currentElement.price;
            hotelPriceContainer.setAttribute('class', 'hotelPriceContainer');

            let hotelRatingsContainer = document.createElement('div');
            hotelRatingsContainer.setAttribute('class', 'hotelRatingsContainer');
            let hotelRating = document.createElement('div');
            hotelRating.innerText = currentElement.rating;
            hotelRating.setAttribute('class', 'hotelRating');
            let hotelRatingWord = document.createElement('div');

            if (currentElement.rating >= 7.8 && currentElement.rating < 8.2) {
                hotelRatingWord.innerText = `Добър`;
            } if (currentElement.rating >= 8.2 && currentElement.rating <= 8.6) {
                hotelRatingWord.innerText = `Много добър`;
            } else if (currentElement.rating >= 8.7 && currentElement.rating < 9) {
                hotelRatingWord.innerText = `Отличен`;
            } else if (currentElement.rating >= 9 && currentElement.rating <= 9.3) {
                hotelRatingWord.innerText = `Превъзходен`;
            } else if (currentElement.rating >= 9.4 && currentElement.rating <= 9.9) {
                hotelRatingWord.innerText = `Фантастичен`;
            }

            hotelRatingWord.setAttribute('class', 'hotelRatingWord');

            hotelPictureContainer.append(hotelPicture);
            hotelNameAndDestination.append(hotelName, hotelDestination);
            hotelPriceContainer.append(hotelPrice);
            hotelRatingsContainer.append(hotelRating, hotelRatingWord);

            hotelCard.append(hotelPictureContainer, hotelNameAndDestination, hotelPriceContainer, hotelRatingsContainer);
            likedHomesContainer.append(hotelCard);
        }
    }

    printLikedHomes();

})();