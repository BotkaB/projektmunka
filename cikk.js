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
    
    ID("cim").innerHTML = "<h1>Fenntarthatósági témahét</h1>";
    valasztas();


}
function valasztas(event) {
    ID("cikk1").onclick = function () {
        console.log("katt");
        olvasas1("cikk");
    }
}
var teszt= [];

function olvasas1(kulcs) {

    fetch("cikk.json")
    .then ((response => response.json))
    .then ((data) => {
        beolvasas(data[kulcs])
    })


}

function beolvasas(cikk){
    console.log(cikk)
    var txt1 = ''
    

        txt1 += `<ul>`
        
        CLASS('cikkek')[0].innerHTML = txt1;

    }
   

