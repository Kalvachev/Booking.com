(function () {
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
            hotel.destination,
            hotel.description,
            
        )

        hotelManager.addHotel(currentHotel);
    })

    function router() {
        const firstPage = location.hash.substring(1).split('/')[0];

        function showActivePage(page) {
            HOME_PAGE.style.display = 'none';
            RENT_CAR_PAGE.style.display = 'none';
            ATTRACTIONS_PAGE.style.display = 'none';
            TAXI_PAGE.style.display = 'none';
            allHotelsByDestination.style.display = 'none';
            HOTEL_PAGE_CONTAINER.style.display = 'none';
            ERROR_PAGE.style.display = 'none';

            page.style.display = 'block';
        }

        switch (firstPage) {
            case 'home':
                showActivePage(HOME_PAGE);
                printLikedHomes();
                break;
            case 'rent':
                showActivePage(RENT_CAR_PAGE);
                break;
            case 'attractions':
                showActivePage(ATTRACTIONS_PAGE);
                break;
            case 'taxis':
                showActivePage(TAXI_PAGE);
                break;
            case 'displayHomes':
                showActivePage(allHotelsByDestination);
                printHotelsByDestination('', hotelsByDestinationContainer);
                displayHomes();
                break;
            case 'errorPage':
                showActivePage(ERROR_PAGE);
                break;
            default:
                showActivePage(HOME_PAGE);
                break;
        }
    }

    window.addEventListener('hashchange', router);
    window.addEventListener('DOMContentLoaded', router);

    if (userService.getCurrentUser()) {
        LOGIN_BTN.style.display = 'none';
        CREATE_PROFILE_BTN.style.display = 'none';
        PROFILE_BUTTON.style.display = 'block';
        LOGOUT_BUTTON.style.display = 'block';
    } else {
        LOGIN_BTN.style.display = 'block';
        CREATE_PROFILE_BTN.style.display = 'block';
        PROFILE_BUTTON.style.display = 'none';
        LOGOUT_BUTTON.style.display = 'none';
    }
})();

