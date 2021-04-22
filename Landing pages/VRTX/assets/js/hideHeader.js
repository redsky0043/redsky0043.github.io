function debounce(f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}

let scrollPos = 0;
const siteHeader = document.querySelector(".header");

const hideHeader = () => siteHeader.classList.add("out");
const showHeader = () => siteHeader.classList.remove("out");
const addDarkHeader = () => siteHeader.classList.add("header-bg-dark");
const removeDarkHeader = () => siteHeader.classList.remove("header-bg-dark");
const addlightHeader = () => siteHeader.classList.add("header-bg-light");
const removelightHeader = () => siteHeader.classList.remove("header-bg-light");

const toggleMenu = () => {
  if (window.scrollY > siteHeader.offsetHeight) {
    addDarkHeader();
    -scrollPos < 200 ? debounce(removeDarkHeader(), 500) : null;
    document.body.getBoundingClientRect().top > scrollPos
      ? debounce(showHeader(), 500)
      : debounce(hideHeader(), 500);
    -scrollPos > document.documentElement.clientHeight
      ? debounce(addlightHeader(), 500)
      : debounce(removelightHeader(), 500);
  }
  scrollPos = document.body.getBoundingClientRect().top;
};

window.addEventListener("scroll", toggleMenu);
