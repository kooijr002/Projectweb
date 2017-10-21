var plusje = document.querySelector('.boek');
var eentje = document.querySelector('[href="#"]');

function show() {
    plusje.classList.toggle('laatzien');
}
eentje.addEventListener('click', show);
