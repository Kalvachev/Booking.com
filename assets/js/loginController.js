LOGIN_BTN.addEventListener('click', function () {
    console.log(MODAL_BG_LOGIN);
    MODAL_BG_LOGIN.classList.add('bg-active');
})


MODAL_CLOSE_LOGIN.addEventListener('click', function () {
    MODAL_BG_LOGIN.classList.remove('bg-active');
})

CREATE_PROFILE_BTN.addEventListener('click', function () {
    console.log(MODAL_BG_REGISTER)
    MODAL_BG_REGISTER.classList.add('bg-active');
})

MODAL_CLOSE_REGISTER.addEventListener('click', function () {
    MODAL_BG_REGISTER.classList.remove('bg-active');
})

REGISTER_NEW_HOME_BTN.addEventListener('click', function () {
    MODAL_BG_REGISTER_HOME.classList.add('bg-active');
})

// MODAL_CLOSE_REGISTER_HOME.addEventListener('click', function () {
//     MODAL_BG_REGISTER_HOME.classList.remove('bg-active');
// })

// GO_TO_REGISTER_BTN.addEventListener('click', function () {
//     MODAL_BG_REGISTER.classList.add('bg-active');
// })