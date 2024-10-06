import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

var swiper = new Swiper(".slider__content", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  }
});

var slider = new Swiper(".front-slider", {
  grabCursor: true,
  slidesPerView: 1,
  pagination: {
    el: ".front-slider-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  }
});




