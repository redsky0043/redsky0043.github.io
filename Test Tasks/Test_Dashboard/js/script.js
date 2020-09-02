
document.querySelector('.menu-btn').onclick = function () {
    document.querySelector('.menu').classList.toggle("menu--active");
    document.querySelector('.content').classList.toggle("content--active");
}

const menuList = document.querySelectorAll('.menu-list__item');
const menuText = document.querySelectorAll('.menu-list__text');
const tags = document.querySelectorAll('.info__left__tag');


menuList.forEach(item => {
    item.addEventListener('click', function(){
        menuList.forEach(item => {
            item.classList.remove('menu-list__item--active')
        });
        item.classList.add('menu-list__item--active');
    })
});

tags.forEach(item => {
    item.addEventListener('click', function(){
        tags.forEach(item => {
            item.classList.remove('tag--active')
        });
        item.classList.add('tag--active');
    })
});