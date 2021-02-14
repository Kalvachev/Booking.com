const thirdGap = 16;

const thirdCarousel = document.querySelector(".third-carousel"),
    thirdContent = document.querySelector(".third-content"),
    thirdNext = document.querySelector(".third-next"),
    thirdPrev = document.querySelector(".third-prev");

thirdNext.addEventListener("click", e => {
    thirdCarousel.scrollBy(thirdWidth + thirdGap, 0);
    if (thirdCarousel.scrollWidth !== 0) {
        thirdPrev.style.display = "flex";
    }
    if (thirdContent.scrollWidth - thirdWidth - thirdGap <= thirdCarousel.scrollLeft + thirdWidth) {
        thirdNext.style.display = "none";
    }
});
thirdPrev.addEventListener("click", e => {
    thirdCarousel.scrollBy(-(thirdWidth + thirdGap), 0);
    if (thirdCarousel.scrollLeft - thirdWidth - thirdGap <= 0) {
        thirdPrev.style.display = "none";
    }
    if (!thirdContent.scrollWidth - thirdWidth - thirdGap <= thirdCarousel.scrollLeft + thirdWidth) {
        thirdNext.style.display = "flex";
    }
});

let thirdWidth = thirdCarousel.offsetWidth;
window.addEventListener("resize", e => (thirdWidth = thirdCarousel.offsetWidth));
