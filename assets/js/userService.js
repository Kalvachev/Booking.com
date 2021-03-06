const userService = (function () {

    class User {
        constructor(username, password, email) {
            this.username = username;
            this.password = password;
            this.email = email;
            this.favourites = [];
            this.isLoggedIn = false;
        }
    }

    class UserService {
        constructor() {
            if (localStorage.getItem('users')) {
                this.users = JSON.parse(localStorage.getItem('users'));
            } else {
                this.users = [];
            }
        }

        register(username, password, email) {

            const isUserRegistered = this.users.some(user => user.email === email || user.username === username)

            if (!isUserRegistered) {
                this.users.push(new User(username, password, email));

                localStorage.setItem('users', JSON.stringify(this.users))
            } else {
                alert('User is already registered!');
            }
        }

        login(username, password) {
            let currentUser = this.users.find(user => user.username === username && user.password === password)

            if (currentUser) {
                currentUser.isLoggedIn = true;

                // this.users.forEach(user => {
                //     if (user => user.username === username && user.password === password) {
                //         user.isLoggedIn = true;
                //     } else {
                //         user.isLoggedIn = false;
                //     }
                // });

                localStorage.setItem('users', JSON.stringify(this.users));
            }

            return !!currentUser;
        }

        getCurrentUser() {
            return this.users.find(user => user.isLoggedIn);
        }

        logout() {
            let currentUser = userService.getCurrentUser()
            currentUser.isLoggedIn = false;

            // this.users.forEach(user => {
            //     user.isLoggedIn = false;
            // })

            localStorage.setItem('users', JSON.stringify(this.users));
        }

        addToFavourites(currentHotel) {
            let currentUser = userService.getCurrentUser();
            let isAlreadyLiked = currentUser.favourites.find(hotel => hotel.name === currentHotel.name)

            console.log(currentUser);
            if (!isAlreadyLiked) {
                currentUser.favourites.push(currentHotel);
            }
            console.log(currentUser.favourites);
        }

        removeFromFavourites(currentHotel) {

        }
    }

    return new UserService();
})();