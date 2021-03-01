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

            hotelCard.addEventListener('click', function printHotelPage() {
                HOTEL_PAGE_CONTAINER.innerText = '';
                ALL_HOTELS_BY_DESTINATION.style.display = 'none';
                HOTEL_PAGE_CONTAINER.style.display = 'flex';

                const hotelCardContainer = document.createElement('div');
                hotelCardContainer.setAttribute('class', 'singleCardContainer');

                const hotelCardNavigation = document.createElement('div');
                hotelCardNavigation.setAttribute('class', 'singleCardNavigationContainer');

                const cardNav = document.createElement('ul');
                cardNav.setAttribute('class', 'singleCardNavigationList');

                let navBarItem1 = document.createElement('li');
                navBarItem1.innerText = 'Информация и цени';
                let navBarItem2 = document.createElement('li');
                navBarItem2.innerText = 'Удобства';
                let navBarItem3 = document.createElement('li');
                navBarItem3.innerText = 'Важна информация';
                let navBarItem4 = document.createElement('li');
                navBarItem4.innerText = 'С дребния шрифт';
                let navBarItem5 = document.createElement('li');
                navBarItem5.innerText = 'Отзиви от гости';

                let hotelHeadingContainer = document.createElement('div');
                hotelHeadingContainer.setAttribute('class', 'singleCardHeadingContainer');

                let hotelType = document.createElement('span');
                hotelType.innerText = currentElement.type;
                hotelType.setAttribute('class', 'singleCardHotelType');

                let hotelName = document.createElement('h1');
                hotelName.innerText = currentElement.name;
                hotelName.setAttribute('class', 'singleCardHotelName');


                // Stars
                let reserveBtn = document.createElement('button');
                reserveBtn.innerText = 'Резервирайте';
                reserveBtn.setAttribute('class', 'singleCardReserveButton');

                let addressContainer = document.createElement('div');
                addressContainer.setAttribute('class', 'singleCardAddressContainer');

                // let hotelAddressIcon = document.createElement('span');
                // hotelAddressIcon.setAttribute('class', 'singleCardAddressIcon')

                let hotelAddress = document.createElement('p');
                hotelAddress.innerText = currentElement.address;
                hotelAddress.setAttribute('class', 'singleCardAddress');

                let returnMoney = document.createElement('div');
                returnMoney.innerText = 'Ние връщаме разликата в цената.';
                returnMoney.setAttribute('class', 'singleCardreturnMoney');

                let hotelPicturesContainer = document.createElement('div')
                returnMoney.setAttribute('class', 'hotelPicturesContainer');

                let firstRowContainer = document.createElement('div');
                firstRowContainer.setAttribute('class', 'firstRowContainer');

                let firstPicturesContainer = document.createElement('div');
                firstPicturesContainer.setAttribute('class', 'firstPicturesContainer');

                let secondPicturesContainer = document.createElement('div');
                secondPicturesContainer.setAttribute('class', 'secondPicturesContainer');

                let thirdPicturesContainer = document.createElement('div');
                thirdPicturesContainer.setAttribute('class', 'thirdPicturesContainer');

                let mainPicture = document.createElement('img');
                mainPicture.src = currentElement.pictures[0];
                mainPicture.setAttribute('class', 'mainPicture');

                let picture1 = document.createElement('img');
                picture1.src = currentElement.pictures[1];
                picture1.setAttribute('class', 'picture1');

                let picture2 = document.createElement('img');
                picture2.src = currentElement.pictures[2];
                picture2.setAttribute('class', 'picture2');

                let picture3 = document.createElement('img');
                picture3.src = currentElement.pictures[3];
                picture3.setAttribute('class', 'picture3');

                let picture4 = document.createElement('img');
                picture4.src = currentElement.pictures[4];
                picture4.setAttribute('class', 'picture4');

                let picture5 = document.createElement('img');
                picture5.src = currentElement.pictures[5];
                picture5.setAttribute('class', 'picture5');

                let picture6 = document.createElement('img');
                picture6.src = currentElement.pictures[6];
                picture6.setAttribute('class', 'picture6');

                let picture7 = document.createElement('img');
                picture7.src = currentElement.pictures[7];
                picture7.setAttribute('class', 'picture7');

                let facilitiesUnderThePictures = document.createElement('div');
                facilitiesUnderThePictures.setAttribute('class', 'facilitiesUnderThePictures');

                let facility1container = document.createElement('div');
                facility1container.setAttribute('class', 'facilityContainer');

                let facility2container = document.createElement('div');
                facility2container.setAttribute('class', 'facilityContainer');

                let facility3container = document.createElement('div');
                facility3container.setAttribute('class', 'facilityContainer');

                let facility4container = document.createElement('div');
                facility4container.setAttribute('class', 'facilityContainer');

                let facility5container = document.createElement('div');
                facility5container.setAttribute('class', 'facilityContainer');

                let facility1img = document.createElement('img');
                facility1img.src = `assets/images/FacilitiesInSingleHotels/hotel.png`;
                facility1img.setAttribute('class', 'facilityIcon1');

                let facility1Text = document.createElement('p');
                facility1Text.innerText = 'Апартаменти';

                let facility2img = document.createElement('img');
                facility2img.src = `assets/images/FacilitiesInSingleHotels/kitchen.png`;
                facility2img.setAttribute('class', 'facilityIcon2');

                let facility2Text = document.createElement('p');
                facility2Text.innerText = 'Кухня';

                let facility3img = document.createElement('img');
                facility3img.src = `assets/images/FacilitiesInSingleHotels/view.png`;
                facility3img.setAttribute('class', 'facilityIcon3');

                let facility3Text = document.createElement('p');
                facility3Text.innerText = 'Гледка';

                let facility4img = document.createElement('img');
                facility4img.src = `assets/images/FacilitiesInSingleHotels/laundry.png`;
                facility4img.setAttribute('class', 'facilityIcon4');

                let facility4Text = document.createElement('p');
                facility4Text.innerText = 'Пералня';

                let facility5img = document.createElement('img');
                facility5img.src = `assets/images/FacilitiesInSingleHotels/wifi.png`;
                facility5img.setAttribute('class', 'facilityIcon5');

                let facility5Text = document.createElement('p');
                facility5Text.innerText = 'Безплатен WiFi';

                hotelPageContainer.append(hotelCardContainer);
                hotelCardContainer.append(hotelCardNavigation, hotelHeadingContainer, addressContainer, hotelPicturesContainer, facilitiesUnderThePictures);
                hotelCardNavigation.append(cardNav)
                cardNav.append(navBarItem1, navBarItem2, navBarItem3, navBarItem4, navBarItem5)
                hotelHeadingContainer.append(hotelType, hotelName, reserveBtn);
                addressContainer.append(hotelAddress, returnMoney);
                hotelPicturesContainer.append(firstRowContainer, thirdPicturesContainer)
                firstRowContainer.append(firstPicturesContainer, secondPicturesContainer)
                firstPicturesContainer.append(picture1, picture2);
                secondPicturesContainer.append(mainPicture)
                thirdPicturesContainer.append(picture3, picture4, picture5, picture6, picture7)
                facilitiesUnderThePictures.append(facility1container, facility2container, facility3container, facility4container, facility5container)
                facility1container.append(facility1img, facility1Text)
                facility2container.append(facility2img, facility2Text)
                facility3container.append(facility3img, facility3Text)
                facility4container.append(facility4img, facility4Text)
                facility5container.append(facility5img, facility5Text)
            })
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
            // allHotelsByDestination.style.display = 'block'
            printHotelsByDestination(SEARCH_BOX.value, hotelsByDestinationContainer);
        }
    })


})();

