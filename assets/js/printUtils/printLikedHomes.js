function printLikedHomes() {
    likedHomesContainer.innerHTML = '';

    let favouriteHotels = hotels.map(function (el) {
        if (el.rating > 7.5) {
            return el
        }
    }).filter(el => el !== undefined);

    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * favouriteHotels.length);
        let currentElement = favouriteHotels[randomNumber];

        let hotelCard = document.createElement('div');
        hotelCard.style.cursor = 'pointer';
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

        hotelCard.addEventListener('click', function () {
            let sliced = String(window.location).split('#');
            
            window.location = sliced[0] + '#displayHomes/' + currentElement.destination + '/' + currentElement.name;
            printHotelPage(currentElement.name);
        })

    }
}