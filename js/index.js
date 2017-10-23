/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


var plus = document.querySelector("footer img:nth-of-type(3)");
var een = document.querySelector("#eentje");


plus.addEventListener("click", function () {
    een.classList.toggle("yay");
});


var hart = document.querySelector("footer img:nth-of-type(1)");
var tweede = document.querySelector("#hartje");

hart.addEventListener("click", function () {
    tweede.classlist.toggle("rood");
});
