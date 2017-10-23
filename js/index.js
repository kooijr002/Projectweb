/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
//var toev = document.querySelector('.add');
var eentje = document.querySelector('#add');


function show('eentje') {
    //toev.classList.toggle('toevoegd');
    eentje.classList.toggle('toevoegen');
}
//toev.addEventListener('click', show);
eentje.addEventlistener('click', show);
