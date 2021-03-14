HOMEPAGE_SEACH_BTN.addEventListener('click', function (ev) {
    ev.preventDefault();

    if (SEARCH_BOX.value) {
        let sliced = String(window.location).split('#');

        const validLocations = ['Милано', 'Керамоти', 'Лас Палмас де Гран Канария', 'Рио де Жанейро', 'Пукет', 'Виена', 'Лондон', 'Париж', 'Созопол', 'Атина'];

        if (!validLocations.includes(SEARCH_BOX.value)) {
            window.location = sliced[0] + '#errorPage';
        } else {
            window.location = sliced[0] + '#displayHomes/' + SEARCH_BOX.value;
            printHotelsByDestination(SEARCH_BOX.value, HOTELS_BY_DESTINATION_CONTAINER);
        }
    } else {
        emptyInput();
    }
})

function printHotelsByDestination(searchInput, container) {

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
        printAllHotels(currentElement, container);
    })


    function onChange(btn, cb) {
        HOTELS_BY_DESTINATION_CONTAINER.innerHTML = '';
        if (btn.checked) {
            let typeHotel = filtered.filter(cb);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, HOTELS_BY_DESTINATION_CONTAINER)
            })
        } else {
            let heading = document.createElement('h1');
            oneOrMoreFiltered(filtered, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            filtered.forEach(currentElement => {
                printAllHotels(currentElement, container);
            })
        }
    }

    // ------------------------------

    HOTEL_TYPE_FILTER.addEventListener('change', function () {
        onChange(HOTEL_TYPE_FILTER, (f => f.type === 'Hotel'));
    });

    GUEST_HOUSE_FILTER.addEventListener('change', function () {
        onChange(GUEST_HOUSE_FILTER, (f => f.type === 'Guest House'));
    });

    POOL_FILTER.addEventListener('change', function () {
        onChange(POOL_FILTER, (f => f.facilities.includes('Pool' || '2 Pools')));
    })

    VILLAS_FILTER.addEventListener('change', function () {
        onChange(VILLAS_FILTER, (f => f.type === 'Villa'));
    });

    SPA_FILTER.addEventListener('change', function () {
        onChange(SPA_FILTER, (f => f.facilities.includes('Spa Center')));
    });

    ONE_STAR_FILTER.addEventListener('change', function () {
        onChange(ONE_STAR_FILTER, (f => f.stars === 1));
    });

    TWO_STAR_FILTER.addEventListener('change', function () {
        onChange(TWO_STAR_FILTER, (f => f.stars === 2));
    });

    THREE_STAR_FILTER.addEventListener('change', function () {
        onChange(THREE_STAR_FILTER, (f => f.stars === 3));
    });

    FOUR_STAR_FILTER.addEventListener('change', function () {
        onChange(FOUR_STAR_FILTER, (f => f.stars === 4));
    });

    FIVE_STAR_FILTER.addEventListener('change', function () {
        onChange(FIVE_STAR_FILTER, (f => f.stars === 5));
    });

    PETS_FILTER.addEventListener('change', function name(params) {
        onChange(PETS_FILTER, (f => f.facilities.includes('Pets Allowed')));
    });

    BREAKFAST_FILTER.addEventListener('change', function () {
        onChange(BREAKFAST_FILTER, (f => f.facilities.includes('Breakfast')));
    });

    FITNESS_FILTER.addEventListener('change', function () {
        onChange(FITNESS_FILTER, (f => f.facilities.includes('Fitness Center')));
    });

    FANTASTIC_FILTER.addEventListener('change', function () {
        onChange(FANTASTIC_FILTER, (f => f.rating >= 9.4));
    });

    SUPERB_FILTER.addEventListener('change', function () {
        onChange(SUPERB_FILTER, (f => f.rating >= 9));
    });

    EXCELLENT_FILTER.addEventListener('change', function () {
        onChange(EXCELLENT_FILTER, (f => f.rating >= 8.7));
    });

    VERY_GOOD_FILTER.addEventListener('change', function () {
        onChange(VERY_GOOD_FILTER, (f => f.rating >= 8));
    });

    GOOD_FILTER.addEventListener('change', function () {
        onChange(GOOD_FILTER, (f => f.rating >= 7.5));
    });
}