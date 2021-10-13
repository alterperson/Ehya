const menuBtn = document.querySelector(".js-menu");
const menu = document.querySelector(".menu");
const loves = document.querySelectorAll(".icon__path");

menuBtn.addEventListener("click", () => menu.classList.toggle("menu--mobile"));

loves.forEach((love) => {
  love.addEventListener("click", () => love.classList.toggle("icon__path--active"));
});
