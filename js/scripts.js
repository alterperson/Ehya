const menuBtn = document.querySelector(".js-menu");
const menu = document.querySelector(".menu");
const loves = document.querySelectorAll(".icon__path");

menuBtn.addEventListener("click", () => menu.classList.toggle("menu--mobile"));

loves.forEach((love) => {
  love.addEventListener("click", () => love.classList.toggle("icon__path--active"));
});

const advantagesSwiper = new Swiper(".advantages-swiper", {
  watchOverflow: false,
  slidesPerView: 4,
  spaceBetween: 26,

  breakpoints: {
    577: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 3,
    },
    1201: {
      slidesPerView: 4,
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    prevEl: ".advantages-slider__button--prev",
    nextEl: ".advantages-slider__button--next",
  },
});

const advantagesSwiperGrid = new Swiper(".advantages-swiper-grid", {
  watchOverflow: false,
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 10,

  navigation: {
    prevEl: ".advantages-slider-grid__button--prev",
    nextEl: ".advantages-slider-grid__button--next",
  },
});

const unpublisedSwiper = new Swiper(".unpublished-swiper", {
  watchOverflow: false,
  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    577: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    993: {
      slidesPerView: 4,
    },
    1201: {
      slidesPerView: 5,
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: ".unpublished-slider__button--next",
    prevEl: ".unpublished-slider__button--prev",
  },
});

// $(".advantages-slider").slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 645,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//   ],
// });
