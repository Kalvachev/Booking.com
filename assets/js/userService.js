const userService = (function () {

    class User {
        constructor(username, password, email) {
            this.username = username;
            this.password = password;
            this.email = email;
        }
    }

    class UserService {
        constructor() {
            if (getItem('allUsers')) {
                this.allUsers = getItem('allUsers');
            } else {
                this.allUsers = [];
                setItem('allUsers', this.allUsers);
            }
        }
        addUser(username, password, email) {
            this.allUsers = getItem('allUsers');
            this.allUsers.push(new User(username, password, email));
            setItem('allUsers', this.allUsers);
        }

        login(username, password) {
            const isUserLoggedIn = this.users.some(
                user => user.username === username && user.password === password
            );
            return isUserLoggedIn;
        }

        removeUser(username) {
            this.allUsers = getItem('allUsers');
            this.allUsers = this.allUsers.filter(user => user.username === username);
            setItem('allUsers', this.allUsers);
        }
    }

    return new UserService();
})();