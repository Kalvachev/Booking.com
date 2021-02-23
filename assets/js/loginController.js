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

GO_TO_REGISTER_BTN.addEventListener('click', function () {
    MODAL_BG_REGISTER.classList.add('bg-active');
})

SUBMIT_BTN_REG.addEventListener('click', function (ev) {
    ev.preventDefault();

    const username = USERNAME_INPUT_REG.value;
    const password = PASSWORD_INPUT_REG.value;
    const repeatedPass = REPEAT_PASSWORD_INPUT.value;
    const email = EMAIL_INPUT_REG.value;

    if (password === repeatedPass) {
        userService.register(username, password, email);
    } else {
        alert('Passwords dose not match');
    }

    MODAL_BG_REGISTER.classList.remove('bg-active');
});

LOGIN_BTN_MODAL.addEventListener('click', function (ev) {
    ev.preventDefault();

    const username = USERNAME_INPUT.value;
    const password = PASSWORD_INPUT.value;

    if (userService.login(username, password)) {
        MODAL_BG_LOGIN.classList.remove('bg-active');
        alert('Congratulations you logged in!');

        USERNAME_INPUT = '';
        PASSWORD_INPUT = '';
    }
})