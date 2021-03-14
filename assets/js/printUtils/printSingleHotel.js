function printHotelPage(hotelNamee) {
    const currentElement = hotelManager.getHotel(hotelNamee);

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
    let reserveContainer = document.createElement('div');
    reserveContainer.setAttribute('class', 'singleCardReserveContainer');

    let addInFavourites = document.createElement('div');
    addInFavourites.innerHTML = `<i class="fa fa-heart fa-lg"></i>`;
    addInFavourites.style.cursor = 'pointer';
    addInFavourites.setAttribute('class', 'singleCardAddInFavourites');


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
        let currentFacilityImageAndText = document.createElement('div');
        currentFacilityImageAndText.setAttribute('class', 'currentFacilityImageAndText');

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

        currentFacilityImageAndText.append(currentFacilityImage, currentFacilityName);
        currentFacilityContainer.append(currentFacilityImageAndText)
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

    hotelHeadingContainer.append(firstHeadingPart, reserveContainer);

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

    reserveContainer.append(addInFavourites, reserveBtn);

    if (userService.getCurrentUser()) {
        let isInFavs = userService.getCurrentUser().favourites.some(hotel => hotel.name === currentElement.name);

        if (isInFavs) {
            ADD_TO_FAV_BTN[0].addEventListener('click', function () {
                userService.removeFromFavourites(currentElement);
                ADD_TO_FAV_BTN[0].classList.toggle('grey');
            })
        } else {
            ADD_TO_FAV_BTN[0].addEventListener('click', function () {
                userService.addToFavourites(currentElement);
                ADD_TO_FAV_BTN[0].classList.toggle('red');
            })
        }
    }
};