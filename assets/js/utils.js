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