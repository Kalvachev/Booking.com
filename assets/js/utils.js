function getById(id) {
    return document.getElementById(id);
}

function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getCurrentImage(currentName) {
    if (currentName === ``) {
        let image = document.createElement('img');
        image.src = '';
    }
}

function oneOrMoreFiltered(filtered, headingText, searchInput) {
    if (filtered.length === 0) {
        return headingText.innerHTML = `Няма резултати, които да отговарят на търсенето.`
    } else if (filtered.length === 1) {
        return headingText.innerHTML = `${searchInput}: намеренo e ${filtered.length} място за настаняване.`
    } else {
        return headingText.innerHTML = `${searchInput}: намерени са ${filtered.length} места за настаняване.`;
    }
}

function displayHomes() {
    // console.log(location.hash);
    const pages = decodeURI(location.hash).substring(1).split('/');
    // If the second argument is city
    if (pages.length === 2) {
        printHotelsByDestination(pages[1], hotelsByDestinationContainer);
        allHotelsByDestination.style.display = 'block';
        HOTEL_PAGE_CONTAINER.style.display = 'none';
    }
    if (pages.length === 3) {
        printHotelPage(pages[2]);
        allHotelsByDestination.style.display = 'none';
        HOTEL_PAGE_CONTAINER.style.display = 'block';
    }
    // If there is a third argument display the Hotel specific page
}

function changeFavouritesIcon(x) {
    if (x.classList.contains("fa-heart")) {
        x.classList.remove("fa-heart");
        x.classList.add("fa-heart-o");
    } else {
        x.classList.remove("fa-heart-o");
        x.classList.add("fa-heart");
    }
}