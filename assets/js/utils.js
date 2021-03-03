function getById(id) {
    return document.getElementById(id);
}

function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

<div id="downPartContainer">
    <div id="leftPartContainer">
        <div id="description">
            <h1></h1>
            <p></p>
        </div>
        <div id="mostPopularFacilities">
            <div class="singleFacility">
                <img src="" alt="">
                    <p id="facilityText"></p>
                </div>
            </div>
        </div>

        <div id="rightPartContainer">
            <h1></h1>
            <p></p>

            <div>
                <h1></h1>

                <div>
                    <img src="" alt="">
                        <p></p>
                </div>
                </div>

                <button>Резервирайте</button>
            </div>