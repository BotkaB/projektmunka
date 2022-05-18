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
  ID("cím").innerHTML = "<h1>Fenntarthatósági témahét</h1>";

}


//A beolvasásom a script.js- en keresztül fut.
//Itt azért van, hogyha a script.js-el valami történne innen is be tudja olvasni 

function beolvasas(cikk) {
  console.log(cikk);
  var txt1 = "";

  txt1 += `<ul>`;

  CLASS("cikkek")[0].innerHTML = txt1;
}

