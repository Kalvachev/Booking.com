function printFavourites() {
    let currentUserFavs = userService.getCurrentUser().favourites;

    if (currentUserFavs.length !== 0) {
        FAVOURITES_PAGE.innerHTML = '';

        currentUserFavs.forEach(hotel => {
            printAllHotels(hotel, FAVOURITES_PAGE);
        })
    } else if (currentUserFavs.length === 0) {
        FAVOURITES_PAGE.innerHTML = '';

        let linkMessage = document.createElement('a');
        linkMessage.href = '#home';

        let message = document.createElement('img');
        message.src = './assets/images/message-booking.png';
        message.style.width = '815px';
        message.className = 'emptyFavMessage';

        linkMessage.append(message);

        FAVOURITES_PAGE.append(linkMessage);
    }
}

// PROFILE_BUTTON.addEventListener('click', function () {
//     let currentUserFavs = userService.getCurrentUser().favourites;

//     if (currentUserFavs.length !== 0) {
//         FAVOURITES_PAGE.innerHTML = '';
//         currentUserFavs.forEach(hotel => {
//             printAllHotels(hotel, FAVOURITES_PAGE);
//         })
//     } else if (currentUserFavs.length === 0) {
//         FAVOURITES_PAGE.innerHTML = '';

//         let message = document.createElement('img');
//         message.src = './assets/images/message-booking.png';
//         message.style.width = '1500px';
//         message.className = 'emptyFavMessage';
//         FAVOURITES_PAGE.append(message);
//     }
// })