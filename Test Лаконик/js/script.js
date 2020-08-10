let tab = function () {
    let tabNav = document.querySelectorAll('.directions__item');
    let tabContent = document.querySelectorAll('.triangle');

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabContent.forEach(item => {
            item.classList.remove('is--active');
        });
        
    }
};

tab();