const openMenuBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');

openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('header__btn-closed');
    header.classList.toggle('header__menu-mob--opened')
})