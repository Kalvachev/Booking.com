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
    console.log('hello world')
    MODAL_BG_REGISTER.classList.add('bg-active');
})

SUBMIT_BTN_REG.addEventListener('click', function (ev) {
    ev.preventDefault();

    const username = USERNAME_INPUT_REG;
    const password = PASSWORD_INPUT_REG;
    const repeatedPass = REPEAT_PASSWORD_INPUT;
    const email = EMAIL_INPUT_REG;

    userService.addUser(username, password, email);

    console.log(localStorage)

    MODAL_BG_REGISTER.classList.remove('bg-active');
});