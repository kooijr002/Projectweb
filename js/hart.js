/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*bron=https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/*/

var hart = document.querySelector("footer img:nth-of-type(1)");
var tweede = document.querySelector("footer img:nth-of-type(2)");

hart.addEventListener("click", function () {
    tweede.classlist.toggle("rood");
});
