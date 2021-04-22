const body = document.querySelector("body");
const headerForMenu = document.querySelector(".header");
const menuBtn = document.querySelector("#menuBtn");
const navButtons = document.querySelectorAll(".js-nav-btn");

menuBtn.addEventListener("click", () => {
  if (body.classList.contains("isMobMenuOpen")) {
    handleMenuClose();
  } else {
    handleMenuOpen();
  }
});

for (let button of navButtons) {
  button.addEventListener("click", () => {
    handleMenuClose();
  });
}

function handleMenuOpen() {
  headerForMenu.classList.add("isMobMenuOpen");
  body.classList.add("isMobMenuOpen");
}

function handleMenuClose() {
  headerForMenu.classList.remove("isMobMenuOpen");
  body.classList.remove("isMobMenuOpen");
}