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
                printHotelPage(currentElement);
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
                printHotelPage(currentElement);
            })
        })
    }

    function printHotelPage(currentElement) {
        HOTEL_PAGE_CONTAINER.innerText = '';
        ALL_HOTELS_BY_DESTINATION.style.display = 'none';
        HOTEL_PAGE_CONTAINER.style.display = 'flex';

        const wholeCardContainer = document.createElement('div');
        wholeCardContainer.setAttribute('class', 'wholeCardContainer');

        const hotelCardContainer = document.createElement('div');
        hotelCardContainer.setAttribute('class', 'singleCardContainer');

        const hotelCardNavigation = document.createElement('div');
        hotelCardNavigation.setAttribute('class', 'singleCardNavigationContainer');

        const cardNav = document.createElement('ul');
        cardNav.setAttribute('class', 'singleCardNavigationList');

        let navBarItem1 = document.createElement('li');
        let navBarLinkItem1 = document.createElement('a');
        navBarLinkItem1.innerText = 'Информация и цени';

        let navBarItem2 = document.createElement('li');
        let navBarLinkItem2 = document.createElement('a');
        navBarLinkItem2.innerText = 'Удобства';

        let navBarItem3 = document.createElement('li');
        let navBarLinkItem3 = document.createElement('a');
        navBarLinkItem3.innerText = 'Важна информация';

        let navBarItem4 = document.createElement('li');
        let navBarLinkItem4 = document.createElement('a');
        navBarLinkItem4.innerText = 'С дребния шрифт';

        let navBarItem5 = document.createElement('li');
        let navBarLinkItem5 = document.createElement('a');
        navBarLinkItem5.innerText = 'Отзиви от гости';

        let hotelHeadingContainer = document.createElement('div');
        hotelHeadingContainer.setAttribute('class', 'singleCardHeadingContainer');

        let firstHeadingPart = document.createElement('div');
        firstHeadingPart.setAttribute('class', 'singleCardFirstHeadingPart');

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

        let hotelAddressContainer = document.createElement('div');
        hotelAddressContainer.setAttribute('class', 'singleHotelCardAddressContainer');

        let addressIcon = document.createElement('img');
        let hotelAddress = document.createElement('p');
        addressIcon.src = 'assets/images/FacilitiesInSingleHotels/addressIcon.png'

        hotelAddress.innerText = currentElement.address;
        hotelAddress.setAttribute('class', 'singleCardAddress');

        let returnMoney = document.createElement('div');
        let verifiedIcon = document.createElement('img');
        verifiedIcon.src = 'assets/images/FacilitiesInSingleHotels/verified.png'
        let returnMoneyText = document.createElement('p');

        returnMoneyText.innerText = 'Ние връщаме разликата в цената.';
        returnMoney.setAttribute('class', 'singleCardReturnMoney');

        let hotelPicturesContainer = document.createElement('div')
        hotelPicturesContainer.setAttribute('class', 'hotelPicturesContainer');

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

        let downPartContainer = document.createElement('div');
        downPartContainer.setAttribute('class', 'singleCardDownPartContainer');

        let leftPartContainer = document.createElement('div');
        leftPartContainer.setAttribute('class', 'singleCardDownLeftPartContainer');

        let descriptionContainer = document.createElement('div');
        descriptionContainer.setAttribute('class', 'singleCardDownLeftPartDescriptionContainer');

        let descriptionHeading = document.createElement('h1');
        descriptionHeading.innerText = `Едно от най-популярните ни места за настаняване в ${currentElement.destination}`;
        descriptionHeading.setAttribute('class', 'singleCardDownLeftPartDescriptionHeading');

        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.innerText = currentElement.description;
        descriptionParagraph.setAttribute('class', 'singleCardDownLeftPartDescriptionText');

        let mostPopularFacilitiesContainer = document.createElement('div');
        mostPopularFacilitiesContainer.setAttribute('class', 'mostPopularFacilitiesContainer');

        let mostPopularFacilitiesHeadingContainer = document.createElement('div');
        mostPopularFacilitiesHeadingContainer.setAttribute('class', 'mostPopularFacilitiesHeadingContainer');


        let mostPopularFacilitiesHeading = document.createElement('p');
        mostPopularFacilitiesHeading.innerText = 'Най-популярните удобства';

        // mostPopularFacilitiesContainer.setAttribute('class', 'mostPopularFacilitiesContainer');
        
        let currentFacilityContainer = document.createElement('div');
        currentFacilityContainer.setAttribute('class', 'currentFacilityContainer');

        currentElement.facilities.forEach(currentFacility => {
            let currentFacilityImage = document.createElement('img');
            let currentFacilityName = document.createElement('p');

            currentFacilityName.innerText = currentFacility;

            if (currentFacility === '2 Pools' || 'Pool') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/poolIcon.png';
            }

            if (currentFacility === 'Family Rooms') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/familyIcon.png';
            }

            if (currentFacility === 'Airport Transfer') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/airportIcon.png';
            }

            if (currentFacility === 'Fitness Center') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/fitnessIcon.png';
            }

            if (currentFacility === 'Parking') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/parkingIcon.png';
            }

            if (currentFacility === 'Roomservice') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/roomServiceIcon.png';
            }

            if (currentFacility === 'Free Wi Fi') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/wifiIcon.png';
            }

            if (currentFacility === 'Bar') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/barIcon.png';
            }

            if (currentFacility === 'Breakfast') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/breakfastIcon.png';
            }

            if (currentFacility === 'Right on the Beach') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/rightOnTheBeachIcon.png';
            }

            if (currentFacility === 'Own Beach') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/onBeachIcon.png';
            }

            if (currentFacility === 'Pets Allowed') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/petsAllowed.png';
            }

            if (currentFacility === 'Coffe Machine') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/coffeeMachine.png';
            }

            if (currentFacility === 'Spa Center') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/spaIcon.png';
            }

            if (currentFacility === 'Non-Smoker Rooms') {
                currentFacilityImage.src = 'assets/images/HotelFacilities/nonSmokerIcon.png';
            }

            currentFacilityContainer.append(currentFacilityImage, currentFacilityName)
        })

        let rightPartContainer = document.createElement('div');
        rightPartContainer.setAttribute('class', 'singleCardDownRightPartContainer');

        let rightPartHeading = document.createElement('h2');
        rightPartHeading.innerText = 'Перфектен избор за 1-седмичен престой!';
        rightPartHeading.setAttribute('class', 'singleCardDownRightPartHeading');

        let rightPartText = document.createElement('p');
        rightPartText.innerText = `Разположено в най-оживената част на ${currentElement.destination}, това място за настаняване има отлична оценка за местоположение от 9.5`;
        rightPartText.setAttribute('class', 'singleCardDownRightPartText');

        let roomInfo = document.createElement('h2');
        roomInfo.innerText = 'Стаи с:';
        roomInfo.setAttribute('class', 'singleCardDownRightRoomInfoHeading');

        // let roomInfoContainer = document.createElement('div');
        // roomInfo.setAttribute('class', 'singleCardDownRightRoomInfoContainer');

        let roomWithContainer = document.createElement('div');
        roomWithContainer.setAttribute('class', 'singleCardDownRightRoomInfoContainer');

        let firstRowViewContainer = document.createElement('div');
        firstRowViewContainer.setAttribute('class', 'singleCardDownRightRoomFirstRowContainer');

        let secondRowViewContainer = document.createElement('div');
        secondRowViewContainer.setAttribute('class', 'singleCardDownRightRoomSecondRowContainer');

        let thirdRowViewContainer = document.createElement('div');
        thirdRowViewContainer.setAttribute('class', 'singleCardDownRightRoomThirdRowContainer');

        let firstViewImage = document.createElement('img');
        firstViewImage.src = `assets/images/SingleRoomInformation/viewTown.png`
        firstViewImage.setAttribute('class', 'singleCardDownRightFirstViewImage');

        let firstViewInfo = document.createElement('p');
        firstViewInfo.innerText = 'Гледка към града';
        firstViewInfo.setAttribute('class', 'singleCardDownRightFirstViewInfo');

        let secondViewImage = document.createElement('img');
        secondViewImage.src = `assets/images/SingleRoomInformation/viewYard.png`
        secondViewImage.setAttribute('class', 'singleCardDownRightSecondViewImage');

        let secondViewInfo = document.createElement('p');
        secondViewInfo.innerText = 'Гледка към вътрешен двор';
        secondViewInfo.setAttribute('class', 'singleCardDownRightSecondViewInfo');

        let thirdViewImage = document.createElement('img');
        thirdViewImage.src = `assets/images/SingleRoomInformation/viewSilentStreet.png`
        thirdViewImage.setAttribute('class', 'singleCardDownRightThirdViewImage');

        let thirdViewInfo = document.createElement('p');
        thirdViewInfo.innerText = 'Гледка към тиха улица';
        thirdViewInfo.setAttribute('class', 'singleCardDownRightThirdViewInfo');

        let reserveBtnRight = document.createElement('button');
        reserveBtnRight.innerText = 'Резервирайте';

        reserveBtnRight.setAttribute('class', 'singleCardReserveButtonRight');

        hotelPageContainer.append(wholeCardContainer);
        wholeCardContainer.append(hotelCardContainer, downPartContainer);
        hotelCardContainer.append(hotelCardNavigation, hotelHeadingContainer, addressContainer, hotelPicturesContainer, facilitiesUnderThePictures);
        hotelCardNavigation.append(cardNav);
        navBarItem1.append(navBarLinkItem1);
        navBarItem2.append(navBarLinkItem2);
        navBarItem3.append(navBarLinkItem3);
        navBarItem4.append(navBarLinkItem4);
        navBarItem5.append(navBarLinkItem5);
        cardNav.append(navBarItem1, navBarItem2, navBarItem3, navBarItem4, navBarItem5);

        firstHeadingPart.append(hotelType, hotelName);

        hotelHeadingContainer.append(firstHeadingPart, reserveBtn);

        returnMoney.append(verifiedIcon, returnMoneyText);

        hotelAddressContainer.append(addressIcon, hotelAddress);

        addressContainer.append(hotelAddressContainer, returnMoney);
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

        downPartContainer.append(leftPartContainer, rightPartContainer);
        leftPartContainer.append(descriptionContainer, mostPopularFacilitiesContainer);
        descriptionContainer.append(descriptionHeading, descriptionParagraph);

        roomWithContainer.append(roomInfo, firstRowViewContainer, secondRowViewContainer, thirdRowViewContainer);

        firstRowViewContainer.append(firstViewImage, firstViewInfo);
        secondRowViewContainer.append(secondViewImage, secondViewInfo);
        thirdRowViewContainer.append(thirdViewImage, thirdViewInfo);

        firstRowViewContainer.append(firstViewImage, firstViewInfo);
        secondRowViewContainer.append(secondViewImage, secondViewInfo);
        thirdRowViewContainer.append(thirdViewImage, thirdViewInfo);

        rightPartContainer.append(rightPartHeading, rightPartText, roomWithContainer, reserveBtnRight);

        mostPopularFacilitiesHeadingContainer.append(mostPopularFacilitiesHeading);
        mostPopularFacilitiesContainer.append(mostPopularFacilitiesHeadingContainer, currentFacilityContainer);
    };


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


})();

