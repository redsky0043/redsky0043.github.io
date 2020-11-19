const trigger = document.getElementById('toggle');
const box = document.getElementById('menu');

toggle.addEventListener('click', function() {
  box.classList.toggle('active');
});