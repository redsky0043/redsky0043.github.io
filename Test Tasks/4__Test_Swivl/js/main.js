
const dropDown = document.querySelector('.dropdown').classList;
const buttonDropDown = document.querySelector('.user__top__btn__img');

buttonDropDown.addEventListener('click', () => {
    dropDown.toggle('active');
})