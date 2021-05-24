const menu = document.querySelector("ul");
const closeMenu = document.querySelector("#close-menu");
const logo = document.querySelector(".logo");

menu.addEventListener("click", () => {
  closeMenu.checked = false;
});

logo.addEventListener("click", () => {
  closeMenu.checked = false;
});
