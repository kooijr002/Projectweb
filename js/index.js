/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*bron=https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/*/


var plus = document.querySelector("footer img:nth-of-type(3)");
var een = document.querySelector("#eentje");

plus.addEventListener("click", function () {
    een.classList.toggle("yay");
});

function zien() {
    document.getElementById("hartjeNiet").style.display = "none"
    document.getElementById("hartjeRood").style.display = "inline-block"

}
document.getElementById("hartjeNiet").addEventListener("click", zien);
document.getElementById("hartjeRood").addEventListener("click", zien);
