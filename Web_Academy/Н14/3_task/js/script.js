let up = 0;
let left = 0;
let man = document.querySelector('.man');


window.onkeydown = function move(){
	if(event.keyCode == 37){
        left = left - 52;
        if (left < 0) {
            left = 156;
        }
        man.style.left = left + 'px';
	}
	else if(event.keyCode == 39){
        left = left + 52;
        if (left > 156) {
            left = 0;
        }
        man.style.left= left + 'px';
    }
    else if(event.keyCode == 38){
        up = up - 52;
        if (up < 0) {
            up = 156;
        }
        man.style.top = up + 'px';
    }
    else if(event.keyCode == 40){
        up = up + 52;
        if (up > 156) {
            up = 0;
        }
        man.style.top = up + 'px';
    }
};

