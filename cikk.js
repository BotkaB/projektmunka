window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}

function CLASS(elem) {
  return document.getElementsByClassName(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}


function init() {

    ID("cím").innerHTML = "<h1>Cikkek</h1>";
    valasztas();
}

var teszt= [];

function olvasas1(kulcs) {

    fetch("cikk.js")
    .then ((response => response.json))
    .then ((data) => {
        beolvasas(data[kulcs])
    })


}

function beolvasas() {


}
