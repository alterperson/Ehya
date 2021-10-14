document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".js-menu");
  const menu = document.querySelector(".menu");
  const loves = document.querySelectorAll(".icon__path");

  menuBtn.addEventListener("click", () => menu.classList.toggle("menu--mobile"));

  loves.forEach((love) => {
    love.addEventListener("click", () => love.classList.toggle("icon__path--active"));
  });

  const advantagesSlider = new Swiper(".advantages-slider", {
    slidesPerView: 4,
    spaceBetween: 26,
    grabCursor: true,
    navigation: {
      prevEl: ".advantages-slider__button--prev",
      nextEl: ".advantages-slider__button--next",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
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
});
