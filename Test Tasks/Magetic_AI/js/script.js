document.querySelector('.sidebar').onclick = function () {
    document.querySelector('.sidebar-opened').classList.add("sidebar-opened--active");
}

document.querySelector('.sidebar-header__close-btn').onclick = function () {
    document.querySelector('.sidebar-opened').classList.remove("sidebar-opened--active");
}