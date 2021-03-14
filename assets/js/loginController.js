LOGIN_BTN.addEventListener('click', function () {
    MODAL_BG_LOGIN.classList.add('bg-active');
})


MODAL_CLOSE_LOGIN.addEventListener('click', function () {
    MODAL_BG_LOGIN.classList.remove('bg-active');
})

CREATE_PROFILE_BTN.addEventListener('click', function () {
    MODAL_BG_REGISTER.classList.add('bg-active');
})

MODAL_CLOSE_REGISTER.addEventListener('click', function () {
    MODAL_BG_REGISTER.classList.remove('bg-active');
})

// REGISTER_NEW_HOME_BTN.addEventListener('click', function () {
//     MODAL_BG_REGISTER_HOME.classList.add('bg-active');
// })

// MODAL_CLOSE_REGISTER_HOME.addEventListener('click', function () {
//     MODAL_BG_REGISTER_HOME.classList.remove('bg-active');
// })

// GO_TO_REGISTER_BTN.addEventListener('click', function () {
//     MODAL_BG_REGISTER.classList.add('bg-active');
// })

SUBMIT_BTN_REG.addEventListener('click', function (ev) {
    ev.preventDefault();

    const username = USERNAME_INPUT_REG.value;
    const password = PASSWORD_INPUT_REG.value;
    const repeatedPass = REPEAT_PASSWORD_INPUT.value;
    const email = EMAIL_INPUT_REG.value;

    if (username !== '' && username.length >= 7 && password === repeatedPass && email !== '' && password !== '' && password.length >= 7 && validateEmail(email)) {
        userService.register(username, password, email);
        MODAL_BG_REGISTER.classList.remove('bg-active');
    } else if (username === '') {
        alert('Username is required');
    } else if (username.length < 7) {
        alert('Username must be at least 7 characters');
    } else if (email === '') {
        alert('Email is required');
    } else if (password === '') {
        alert('Password is required');
    } else if (password.length < 7) {
        alert('Password must be at least 7 characters');
    } else if (password !== repeatedPass) {
        alert('Passwords does not match');
    } else if (!validateEmail(email)) {
        alert('Invalid Email');
    }
});

LOGIN_BTN_MODAL.addEventListener('click', function (ev) {
    ev.preventDefault();

    const username = USERNAME_INPUT.value;
    const password = PASSWORD_INPUT.value;

    if (userService.login(username, password)) {
        window.location.hash = `#home`;
        MODAL_BG_LOGIN.classList.remove('bg-active');

        USERNAME_INPUT.value = '';
        PASSWORD_INPUT.value = '';

        LOGIN_BTN.style.display = 'none';
        CREATE_PROFILE_BTN.style.display = 'none';
        PROFILE_BUTTON.style.display = 'block';
        LOGOUT_BUTTON.style.display = 'block';

    } else {
        alert('Invalid username or password!');
        USERNAME_INPUT.value = '';
        PASSWORD_INPUT.value = '';
    }
})

LOGOUT_BUTTON.addEventListener('click', function (ev) {
    ev.preventDefault();
    userService.logout();

    LOGIN_BTN.style.display = 'block';
    CREATE_PROFILE_BTN.style.display = 'block';
    PROFILE_BUTTON.style.display = 'none';
    LOGOUT_BUTTON.style.display = 'none';
})