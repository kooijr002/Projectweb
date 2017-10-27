/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*bron=https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/

var hart = document.querySelector("footer img:nth-of-type(1)");
var tweede = document.querySelector('#red');

hart.addEventListener("click", function () {
    tweede.classList.toggle('rood');
});

/*var hart = document.querySelector("footer img:nth-of-type(1)");
var tweede = document.querySelector("#red");

function show() {
    tweede.classlist.toggle(".rood");
}

hart.addEventlistener("click", show);
*/

function zien() {
    document.getElementById("hartjeNiet").style.display = "none"
    document.getElementById("hartjeRood").style.display = "inline-block"

}
document.getElementById("hartjeNiet").addEventListener("click", zien);
document.getElementById("hartjeRood").addEventListener("click", zien);
