const userService = (function () {

    class User {
        constructor(username, password, email) {
            this.username = username;
            this.password = password;
            this.email = email;
        }
    }

    const testUsers = [
        new User('goshko', 'goshotarikat', 'goshko@abv.bg'),
        new User('pencho', 'pencho123', 'pencho@gmail.com')
    ];

    class UserService {
        constructor() {
            this.users = testUsers;
        }
        register(username, password, email) {

            const isUserRegistered = this.users.some(user => user.email === email || user.username === username)

            if (!isUserRegistered) {
                this.users.push(new User(username, password, email));
            } else {
                alert('User is already registered!')
            }
        }

        login(username, password) {
            const isUserLoggedIn = this.users.some(
                user => user.username === username && user.password === password
            );
            return isUserLoggedIn;
        }

        validate(username, password) {
            if (username.trim().length > 3 && password.trim().length > 3) {
                return true;
            }
            return false;
        }
    }

    return new UserService();
})();