const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const home = document.querySelector(".list");

btn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
  home.classList.toggle("home-menu");
});
