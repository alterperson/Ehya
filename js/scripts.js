document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".js-menu");
  const menu = document.querySelector(".menu");
  const loves = document.querySelectorAll(".icon__path");
  const bookmarks = document.querySelectorAll(".stories-item__bookmark");
  const playBtnMain = document.querySelector(".stories-item__button--main");
  const playBtnFirst = document.querySelector(".stories-item__button--first");
  const playBtnSecond = document.querySelector(".stories-item__button--second");
  const playBtnThird = document.querySelector(".stories-item__button--third");
  const modalButton = $("[data-toggle=modal]");
  const closeModalButton = $(".modal__close");
  const modalOverlay = $(".modal__overlay");
  var player;
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  modalOverlay.on("click", closeModal);
  function openModal() {
    const targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal() {
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("label.invalid").remove();
  }
  $(document).on("keyup", function (e) {
    if (e.key == "Escape") closeModal();
  });
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: { required: "Имя обязательно", minlength: "Не менее 2 символов" },
        email: { required: "Почта обязательна", email: "Формат: name@domain.com" },
        phone: { required: "Телефон обязателен", phone: "Формат: +7(999)999-99-99", minlength: "Введите полный номер телефона" },
      },
    });
  });

  // AOS.init({ disable: "mobile" });
  $(".phone").each(function () {
    $(this).mask("+0 (000) 000-0000");
  });

  menuBtn.addEventListener("click", () => menu.classList.toggle("menu--mobile"));

  loves.forEach((love) => {
    love.addEventListener("click", () => love.classList.toggle("icon__path--active"));
  });

  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => bookmark.classList.toggle("stories-item__bookmark--active"));
  });

  const advantagesSwiper = new Swiper(".advantages-swiper", {
    touchEventsTarget: true,
    slidesOffsetAfter: 0,
    watchOverflow: false,
    autoHeight: false,
    slidesPerView: 4,

    breakpoints: {
      320: {
        grid: {
          rows: 2,
        },
        slidesPerRow: 2,
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: ".advantages-slider__button--next",
      prevEl: ".advantages-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
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
});
