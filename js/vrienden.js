/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var gevonden = document.querySelector("#gevonden");
var leukp = document.querySelector("#leuk");

function geefLeuk() {
    leukp.innerHTML = "Toegevoegd aan leeslijst van Jaap Knaap, Klaas Jan, Grace Kelly en jij.";
}
gevonden.addEventListener("click", geefLeuk);


/*var gevonden = document.querySelector("#gevonden");
var leukp = document.querySelector("#leuk");

function geefLeuk() {
    leukp.innerHTML = "Toegevoegd aan leeslijst van Jaap Knaap, Klaas Jan, Grace Kelly en jij.";

}
gevonden.addEventListener("click", geefLeuk);

gevonden.addEventListener("click", function () {
    leuk.innerHTML.toggle("yay") = "Toegevoegd aan leeslijst van Jaap Knaap en jij";
}); */
