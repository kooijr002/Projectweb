/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var eentje = document.querySelector('.add');

function show() {
    eentje.classList.toggle('toevoegen');
}
eentje.addEventlistener('click', show);
