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

        printHotelsByDestination('', hotelsByDestinationContainer);

        switch (hash) {
            case 'home':
                HOME_PAGE.style.display = 'block';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'none';
                allHotelsByDestination.style.display = 'none';
                HOTEL_PAGE_CONTAINER.style.display = 'none';
                ERROR_PAGE.style.display = 'none';
                break;
            case 'rent':
                HOME_PAGE.style.display = 'none';
                RENT_CAR_PAGE.style.display = 'block';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'none';
                allHotelsByDestination.style.display = 'none';
                HOTEL_PAGE_CONTAINER.style.display = 'none';
                ERROR_PAGE.style.display = 'none';
                break;
            case 'attractions':
                HOME_PAGE.style.display = 'none';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'block';
                TAXI_PAGE.style.display = 'none';
                allHotelsByDestination.style.display = 'none';
                HOTEL_PAGE_CONTAINER.style.display = 'none';
                ERROR_PAGE.style.display = 'none';
                break;
            case 'taxis':
                HOME_PAGE.style.display = 'none';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'block';
                allHotelsByDestination.style.display = 'none';
                HOTEL_PAGE_CONTAINER.style.display = 'none';
                ERROR_PAGE.style.display = 'none';
                break;
            case 'displayHomes':
                HOME_PAGE.style.display = 'none';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'none';
                allHotelsByDestination.style.display = 'block';
                HOTEL_PAGE_CONTAINER.style.display = 'none';
                ERROR_PAGE.style.display = 'none';
                break;
            case 'errorPage':
                HOME_PAGE.style.display = 'none';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'none';
                allHotelsByDestination.style.display = 'none';
                HOTEL_PAGE_CONTAINER.style.display = 'none';
                ERROR_PAGE.style.display = 'block';
                break;
            default:
                HOME_PAGE.style.display = 'block';
                RENT_CAR_PAGE.style.display = 'none';
                ATTRACTIONS_PAGE.style.display = 'none';
                TAXI_PAGE.style.display = 'none';
                allHotelsByDestination.style.display = 'none';
                HOTEL_PAGE_CONTAINER.style.display = 'none';
                ERROR_PAGE.style.display = 'none';
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

            hotelCard.addEventListener('click', function () {
                HOME_PAGE.style.display = 'none';
                hotelManager.printHotelPage(currentElement);
            })

        }
    }

    printLikedHomes();

    function printHotelsByDestination(searchInput, container) {

        if (!searchInput) {
            searchInput = localStorage.getItem('city')
        }

        container.innerHTML = '';
        let filtered = hotels.map(el => {
            if (el.destination.toLowerCase() === searchInput.toLowerCase()) {
                return el;
            }
        }).filter(el => el !== undefined);

        let heading = document.createElement('h1');
        heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
        heading.setAttribute('class', 'destinationHeadingText');
        container.append(heading);

        filtered.forEach(currentElement => {
            allCards(currentElement, container);
        })

        // ---------------------------------
        HOTEL_TYPE_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.type === 'Hotel');

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })

        GUEST_HOUSE_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.type === 'Guest House');

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })

        POOL_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.facilities.includes('Pool' || '2 Pools'));

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })

        VILLAS_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.type = 'Villa');

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })

        SPA_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.facilities.includes('Spa Center'));

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })

        ONE_STAR_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.stars === 1);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        TWO_STAR_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.stars === 2);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        THREE_STAR_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.stars === 3);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        FOUR_STAR_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.stars === 4);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        FIVE_STAR_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.stars === 5);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        PETS_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.facilities.includes('Pets Allowed'));

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        BREAKFAST_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.facilities.includes('Breakfast'));

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        FITNESS_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.facilities.includes('Fitness Center'));

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })

        FANTASTIC_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.rating >= 9.4);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })

        SUPERB_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.rating >= 9);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        EXCELLENT_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.rating >= 8.7);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        VERY_GOOD_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.rating >= 8);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
        GOOD_FILTER.addEventListener('change', function () {
            hotelsByDestinationContainer.innerHTML = '';
            if (this.checked) {
                let typeHotel = filtered.filter(f => f.rating >= 7.5);

                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${typeHotel.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                typeHotel.forEach(currentElement => {
                    allCards(currentElement, hotelsByDestinationContainer)
                })
            } else {
                let heading = document.createElement('h1');
                heading.innerText = `${searchInput}: намерени са ${filtered.length} места за настаняване.`
                heading.setAttribute('class', 'destinationHeadingText');
                container.append(heading);

                filtered.forEach(currentElement => {
                    allCards(currentElement, container);
                })
            }
        })
    }


    // window.addEventListener('hashchange', function() {
    //     let sliced = String(window.location).split('#');
    //     window.location = sliced[0] + '#displayHomes';
    //     switch(sliced) {
    //         case 'home':
    //             homeController()
    //             break;
    //     }
    // })

    homepageSearchButton.addEventListener('click', function (ev) {
        ev.preventDefault();

        let sliced = String(window.location).split('#');
        window.location = sliced[0] + '#displayHomes';

        HOME_PAGE.style.display = 'none';

        localStorage.setItem('city', SEARCH_BOX.value);

        const validLocations = ['Милано', 'Керамоти', 'Лас Палмас де Гран Канария', 'Рио де Жанейро', 'Пукет', 'Виена', 'Лондон', 'Париж', 'Созопол', 'Атина'];

        if (!validLocations.includes(SEARCH_BOX.value)) {
            window.location = sliced[0] + '#errorPage';
        } else {
            // Shouldn't show the page more than once
            // allHotelsByDestination.style.display = 'block' 
            printHotelsByDestination(SEARCH_BOX.value, hotelsByDestinationContainer);
        }
    })


    function allCards(currentElement, container) {
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
            hotelManager.printHotelPage(currentElement);
        })
    }

})();

