document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".js-menu");
  const menu = document.querySelector(".menu");
  const loves = document.querySelectorAll(".icon__path");
  const bookmarks = document.querySelectorAll(".stories-item__bookmark");
  const playBtnMain = document.querySelector(".stories-item__button--main");
  const playBtnFirst = document.querySelector(".stories-item__button--first");
  const playBtnSecond = document.querySelector(".stories-item__button--second");
  const playBtnThird = document.querySelector(".stories-item__button--third");

  var player;

  menuBtn.addEventListener("click", () => menu.classList.toggle("menu--mobile"));

  loves.forEach((love) => {
    love.addEventListener("click", () => love.classList.toggle("icon__path--active"));
  });

  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => bookmark.classList.toggle("stories-item__bookmark--active"));
  });

  const advantagesSwiper = new Swiper(".advantages-swiper", {
    watchOverflow: false,
    slidesPerView: 4,
    spaceBetween: 26,

    breakpoints: {
      320: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
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

  playBtnMain.addEventListener("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "383",
      width: "100%",
      videoId: "iik25wqIuFo",
      events: {
        onReady: videoPlay,
      },
    });
  });

  function videoPlay(event) {
    player.target.videoPlay();
  }

  playBtnFirst.addEventListener("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player1", {
      height: "383",
      width: "100%",
      videoId: "iik25wqIuFo",
      events: {
        onReady: videoPlay,
      },
    });
  });

  function videoPlay(event) {
    player1.target.videoPlay();
  }

  playBtnSecond.addEventListener("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player2", {
      height: "383",
      width: "100%",
      videoId: "iik25wqIuFo",
      events: {
        onReady: videoPlay,
      },
    });
  });

  function videoPlay(event) {
    player2.target.videoPlay();
  }

  playBtnThird.addEventListener("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player3", {
      height: "383",
      width: "100%",
      videoId: "iik25wqIuFo",
      events: {
        onReady: videoPlay,
      },
    });
  });

  function videoPlay(event) {
    player3.target.videoPlay();
  }

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
