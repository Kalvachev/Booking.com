function printFavourites() {
    let currentUserFavs = userService.getCurrentUser().favourites;

    // if (currentUserFavs.length === 0) {
    //     let message = document.createElement('img');
    //     message.src = './assets/images/message-booking.png';
    //     message.style.width = '1500px';
    //     message.className = 'emptyFavMessage';
    //     FAVOURITES_PAGE.append(message);
    // }

    currentUserFavs.forEach(hotel => {
        printAllHotels(hotel, FAVOURITES_PAGE);
    })
}

PROFILE_BUTTON.addEventListener('click', function () {
    let currentUserFavs = userService.getCurrentUser().favourites;
    if (currentUserFavs.length !== 0) {
        FAVOURITES_PAGE.innerHTML = '';
    } else if (currentUserFavs.length === 0) {
        FAVOURITES_PAGE.innerHTML = '';
        let message = document.createElement('img');
        message.src = './assets/images/message-booking.png';
        message.style.width = '1500px';
        message.className = 'emptyFavMessage';
        FAVOURITES_PAGE.append(message);
    }
})