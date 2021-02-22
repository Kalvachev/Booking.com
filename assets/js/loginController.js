LOGIN_BTN.addEventListener('click', function () {
    console.log('Hello World');
    MODAL_BG.classList.add('bg-active');
})


MODAL_CLOSE.addEventListener('click', function () {
    MODAL_BG.classList.remove('bg-active');
})
