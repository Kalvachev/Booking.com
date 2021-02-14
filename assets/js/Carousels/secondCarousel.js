const secondGap = 16;

const secondCarousel = document.querySelector(".second-carousel"),
    secondContent = document.querySelector(".second-content"),
    secondNext = document.querySelector(".second-next"),
    secondPrev = document.querySelector(".second-prev");

secondNext.addEventListener("click", e => {
    secondCarousel.scrollBy(secondWidth + secondGap, 0);
    if (secondCarousel.scrollWidth !== 0) {
        secondPrev.style.display = "flex";
    }
    if (secondContent.scrollWidth - secondWidth - secondGap <= secondCarousel.scrollLeft + secondWidth) {
        secondNext.style.display = "none";
    }
});
secondPrev.addEventListener("click", e => {
    secondCarousel.scrollBy(-(secondWidth + secondGap), 0);
    if (secondCarousel.scrollLeft - secondWidth - secondGap <= 0) {
        secondPrev.style.display = "none";
    }
    if (!secondContent.scrollWidth - secondWidth - secondGap <= secondCarousel.scrollLeft + secondWidth) {
        secondNext.style.display = "flex";
    }
});

let secondWidth = secondCarousel.offsetWidth;
window.addEventListener("resize", e => (secondWidth = secondCarousel.offsetWidth));
