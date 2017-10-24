/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*bron=https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/*/

var hart = document.querySelector('#hartje');
var tweede = document.querySelector('#roodje');

hart.addEventListener("click", function () {
    tweede.classlist.toggle('#roodje');
});
