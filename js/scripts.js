const menuBtn = document.querySelector(".js-menu");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => menu.classList.toggle("menu--mobile"));
