const openMenuBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');
const body = document.querySelector('body');

openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('header__btn-closed');
    header.classList.toggle('header__menu-mob--opened');
    body.classList.toggle('body_overflow--hidden');
})