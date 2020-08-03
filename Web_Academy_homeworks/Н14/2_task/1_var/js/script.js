let images = document.querySelectorAll('.style');
let current = 0;

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('hide');
    }
    images[current].classList.remove('hide');
}

slider();

document.querySelector('.left').onclick = function(){
    if (current - 1 == -1) {
        current = images.length - 1;
    } 
    else {
        current--;
    }
    slider();
};

document.querySelector('.right').onclick = function(){
    if (current + 1 == images.length) {
        current = 0;
    } 
    else {
        current++;
    }
    slider()
};