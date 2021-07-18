const body = document.querySelector('body');
const cursor = document.getElementById('cursor');
const links = document.getElementsByTagName('a');

let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

const mouseCords = e => {
  mouseX = e.pageX;
  mouseY = e.pageY;
}

gsap.to({}, .01, {
  repeat: -1,
  onRepeat: () => {
    posX += (mouseX - posX);
    posY += (mouseY - posY);
    gsap.set(cursor, {
      css: {
        left: posX,
        top: posY,
      }
    })
  }
})

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseover', () => {
    cursor.classList.add('active');
  });
  links[i].addEventListener('mouseout', () => {
    cursor.classList.remove('active');
  })
}

body.addEventListener('mousemove', e => {
  mouseCords(e);
  cursor.classList.remove('hidden');
})

body.addEventListener('mouseout', e => {
  cursor.classList.add('hidden');
})