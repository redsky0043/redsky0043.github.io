let left = 0;
let row = document.querySelector('#container');

let sliderLeft = () => {
    left = left - 256;
    if (left < -1024) {
        left = 0;
    }
    row.style.left = left + 'px';
    let pos = row.style.left; 
    console.log(pos);    
}

let sliderRight = () => {
    if (left > -256) {
        left = -1280;
    }
    let pos = row.style.left;
    console.log(pos);    
    left = left + 256;
    row.style.left = left + 'px';
}

document.querySelector('.left').onclick = sliderLeft;
document.querySelector('.right').onclick = sliderRight;