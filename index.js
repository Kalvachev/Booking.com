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
            hotel.price,
            hotel.destination
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
                allHotelsByDestination.display = 'none';
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
            case 'displayHomes':
                HOME_PAGE.style.display = 'none';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'none';
                allHotelsByDestination.display = 'block';
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
            if (el.rating > 7.5) {
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
            hotelDestination.innerText = currentElement.destination;
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

            if (currentElement.rating >= 7.5 && currentElement.rating < 8.0) {
                hotelRatingWord.innerText = `Добър`;
            } if (currentElement.rating >= 8.0 && currentElement.rating <= 8.6) {
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

    function printHotelsByDestination(searchInput, container) {
        let filtered = hotels.map(el => {
            if (el.destination.toLowerCase() === searchInput.toLowerCase()) {
                return el;
            }
        }).filter(el => el !== undefined);

        filtered.forEach(currentElement => {
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
            hotelDestination.innerText = currentElement.destination;
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

            hotelPictureContainer.append(hotelPicture);
            hotelNameAndDestination.append(hotelName, hotelDestination);
            hotelPriceContainer.append(hotelPrice);
            hotelRatingsContainer.append(hotelRating, hotelRatingWord);

            hotelCard.append(hotelPictureContainer, hotelNameAndDestination, hotelPriceContainer, hotelRatingsContainer);
            container.append(hotelCard);
        })
    }

    homepageSearchButton.addEventListener('click', function (ev) {
        ev.preventDefault();
        HOME_PAGE.style.display = 'none';
        printHotelsByDestination(SEARCH_BOX.value, hotelsByDestinationContainer);
    })

})();

