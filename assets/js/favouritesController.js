function printFavourites() {
    let currentUserFavs = userService.getCurrentUser().favourites;
    currentUserFavs.forEach(hotel => {
        printAllHotels(hotel, FAVOURITES_PAGE);
    })
}

PROFILE_BUTTON.addEventListener('click', function () {
    FAVOURITES_PAGE.innerHTML = '';
})