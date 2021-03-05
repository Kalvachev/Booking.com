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

function addToFavourites(x) {
    if (x.classList.contains("fa-heart")) {
        x.classList.remove("fa-heart");
        x.classList.add("fa-heart-o");
    } else {
        x.classList.remove("fa-heart-o");
        x.classList.add("fa-heart");
    }
}