let tab = function () {
    let tabItem = document.querySelectorAll('.directions__item');
    let tabTriangle = document.querySelectorAll('.triangle');
    let tabContent = document.querySelectorAll('.toggles');
    let tabName;

    tabItem.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabTriangle.forEach(item => {
            item.classList.remove('is--active');
        });
        tabName = this.getAttribute('data-tab-name');
        selectTabTriangle(tabName);
        selectTabContent(tabName);
    };

    function selectTabTriangle(tabName) {
        tabTriangle.forEach(item => {
            item.classList.contains(tabName) ? 
            item.classList.add('is--active') : 
            item.classList.remove('is--active');
        })
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? 
            item.classList.add('is--active') : 
            item.classList.remove('is--active');
        })
    }
};

tab();