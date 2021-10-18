const playBtnMain = document.querySelector(".stories-item__button--main");
const playBtnFirst = document.querySelector(".stories-item__button--first");
const playBtnSecond = document.querySelector(".stories-item__button--second");
const playBtnThird = document.querySelector(".stories-item__button--third");
var player;

document.addEventListener("DOMContentLoaded", function () {
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
