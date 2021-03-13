homepageSearchButton.addEventListener('click', function (ev) {
    ev.preventDefault();

    let sliced = String(window.location).split('#');


    const validLocations = ['Милано', 'Керамоти', 'Лас Палмас де Гран Канария', 'Рио де Жанейро', 'Пукет', 'Виена', 'Лондон', 'Париж', 'Созопол', 'Атина'];

    if (!validLocations.includes(SEARCH_BOX.value)) {
        window.location = sliced[0] + '#errorPage';
    } else {
        window.location = sliced[0] + '#displayHomes/' + SEARCH_BOX.value;
        printHotelsByDestination(SEARCH_BOX.value, hotelsByDestinationContainer);
    }
})

function printHotelsByDestination(searchInput, container) {

    if (!searchInput) {
        searchInput = localStorage.getItem('city')
    }

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


    function onChange(cb) {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(cb);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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

    // ---------------------------------
    HOTEL_TYPE_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.type === 'Hotel');

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })

    GUEST_HOUSE_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.type === 'Guest House');

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })

    POOL_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.facilities.includes('Pool' || '2 Pools'));

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })

    VILLAS_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.type === 'Villa');

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })

    SPA_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.facilities.includes('Spa Center'));

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })

    ONE_STAR_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.stars === 1);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    TWO_STAR_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.stars === 2);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    THREE_STAR_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.stars === 3);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    FOUR_STAR_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.stars === 4);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    FIVE_STAR_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.stars === 5);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    PETS_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.facilities.includes('Pets Allowed'));

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    BREAKFAST_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.facilities.includes('Breakfast'));

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    FITNESS_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.facilities.includes('Fitness Center'));

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })

    FANTASTIC_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.rating >= 9.4);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })

    SUPERB_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.rating >= 9);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    EXCELLENT_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.rating >= 8.7);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    VERY_GOOD_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.rating >= 8);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })
    GOOD_FILTER.addEventListener('change', function () {
        hotelsByDestinationContainer.innerHTML = '';
        if (this.checked) {
            let typeHotel = filtered.filter(f => f.rating >= 7.5);

            let heading = document.createElement('h1');
            oneOrMoreFiltered(typeHotel, heading, searchInput);
            heading.setAttribute('class', 'destinationHeadingText');
            container.append(heading);

            typeHotel.forEach(currentElement => {
                printAllHotels(currentElement, hotelsByDestinationContainer)
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
    })

    // HOTEL_TYPE_FILTER.addEventListener('change', function () {
    //     onChange(f => f.type === 'Hotel');
    // });

    // GUEST_HOUSE_FILTER.addEventListener('change', function () {
    //     onChange(f => f.type === 'Guest House');
    // });

    // POOL_FILTER.addEventListener('change', function () {
    //     onChange(f => f.facilities.includes('Pool' || '2 Pools'));
    // })

    // VILLAS_FILTER.addEventListener('change', function () {
    //     onChange(f => f.type === 'Villa');
    // });

    // SPA_FILTER.addEventListener('change', function () {
    //     onChange(f => f.facilities.includes('Spa Center'));
    // });

    // ONE_STAR_FILTER.addEventListener('change', function () {
    //     onChange(f => f.stars === 1);
    // });

    // TWO_STAR_FILTER.addEventListener('change', function () {
    //     onChange(f => f.stars === 2);
    // });

    // THREE_STAR_FILTER.addEventListener('change', function () {
    //     onChange(f => f.stars === 3);
    // });

    // FOUR_STAR_FILTER.addEventListener('change', function () {
    //     onChange(f => f.stars === 4);
    // });

    // FIVE_STAR_FILTER.addEventListener('change', function () {
    //     onChange(f => f.stars === 5);
    // });

    // PETS_FILTER.addEventListener('change', function name(params) {
    //     onChange(f => f.facilities.includes('Pets Allowed'));
    // });

    // BREAKFAST_FILTER.addEventListener('change', function () {
    //     onChange(f => f.facilities.includes('Breakfast'));
    // });

    // FITNESS_FILTER.addEventListener('change', function () {
    //     onChange(f => f.facilities.includes('Fitness Center'));
    // });

    // FANTASTIC_FILTER.addEventListener('change', function () {
    //     onChange(f => f.rating >= 9.4);
    // });

    // SUPERB_FILTER.addEventListener('change', function () {
    //     onChange(f => f.rating >= 9);
    // });

    // EXCELLENT_FILTER.addEventListener('change', function () {
    //     onChange(f => f.rating >= 8.7);
    // });

    // VERY_GOOD_FILTER.addEventListener('change', function () {
    //     onChange(f => f.rating >= 8);
    // });

    // GOOD_FILTER.addEventListener('change', function () {
    //     onChange(f => f.rating >= 7.5);
    // });
}