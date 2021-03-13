function printAllHotels(currentElement, container) {
    let hotelCard = document.createElement('div');
    hotelCard.setAttribute('class', 'destinationHotelCard');

    let hotelPictureContainer = document.createElement('div');
    let hotelPicture = document.createElement('img');
    hotelPicture.src = currentElement.pictures[0];
    hotelPicture.alt = currentElement.name + "'s picture";
    hotelPictureContainer.setAttribute('class', 'destinationHotelPictureContainer');

    let restInformation = document.createElement('div');
    restInformation.setAttribute('class', 'destinationRestInformation');

    let firstRowInformation = document.createElement('div');
    firstRowInformation.setAttribute('class', 'firstRowInformation');

    let secondRowInformation = document.createElement('div');
    secondRowInformation.setAttribute('class', 'secondRowInformation');

    let hotelNameAndDestination = document.createElement('div');
    let hotelName = document.createElement('h3');
    hotelName.innerText = currentElement.name;
    hotelNameAndDestination.setAttribute('class', 'destinationHotelNameAndDestination');

    let hotelDestinationContainer = document.createElement('div');
    hotelDestinationContainer.setAttribute('class', 'hotelDestinationContainer');
    let hotelDestination = document.createElement('p');
    hotelDestination.innerText = currentElement.destination;

    let hotelPriceContainer = document.createElement('div');
    let hotelPrice = document.createElement('p')
    hotelPrice.innerText = 'Цени от: BGN ' + currentElement.price;
    hotelPriceContainer.setAttribute('class', 'destinationHotelPriceContainer');

    let hotelRatingsContainer = document.createElement('div');
    hotelRatingsContainer.setAttribute('class', 'destinationHotelRatingsContainer');
    let hotelRating = document.createElement('div');
    hotelRating.innerText = currentElement.rating;
    hotelRating.setAttribute('class', 'hotelRating');
    let hotelRatingWord = document.createElement('div');

    let hotelDescriptionContainer = document.createElement('div');
    let hotelDescription = currentElement.description;
    hotelDescriptionContainer.setAttribute('class', 'hotelDescriptionContainer');


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

    let destinationStars = document.createElement('div');

    if (currentElement.stars === 1) {
        destinationStars.innerHTML = `
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>    
    `
    } else if (currentElement.stars === 2) {
        destinationStars.innerHTML = `
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>    
    `
    } else if (currentElement.stars === 3) {
        destinationStars.innerHTML = `
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>    
    `
    } else if (currentElement.stars === 4) {
        destinationStars.innerHTML = `
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>    
    `
    } else if (currentElement.stars === 5) {
        destinationStars.innerHTML = `
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>    
    `
    }

    hotelPictureContainer.append(hotelPicture);
    hotelNameAndDestination.append(hotelName, destinationStars);
    hotelDestinationContainer.append(hotelDestination);
    hotelPriceContainer.append(hotelPrice);
    hotelRatingsContainer.append(hotelRatingWord, hotelRating);
    hotelDescriptionContainer.append(hotelDescription);
    firstRowInformation.append(hotelNameAndDestination, hotelRatingsContainer);
    secondRowInformation.append(hotelDestinationContainer, hotelPriceContainer)

    restInformation.append(firstRowInformation, secondRowInformation, hotelDescriptionContainer)

    hotelCard.append(hotelPictureContainer, restInformation);
    container.append(hotelCard);

    // Single Page Show
    //----------------------------------------------------------

    hotelCard.addEventListener('click', function () {
        // TODO: Just change the URL
        const url = location.hash + '/' + currentElement.name;
        location.hash = url;
    })

    hotelCard.addEventListener('click', function () {
        let sliced = String(window.location).split('#');

        window.location = sliced[0] + '#displayHomes/' + currentElement.destination + '/' + currentElement.name;
        printHotelPage(currentElement.name);
    })
}