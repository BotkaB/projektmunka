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
    ID("kep1").onclick = function () {
        console.log("katt");
        olvasas1("galeria");
    }
}

var teszt = [];

function olvasas1(kulcs) {
    

    fetch("galeria.json")
        .then((response) => response.json())
        .then((data) => {

           
            megjelenit(data[kulcs])

        })
 
}

function megjelenit(galeria){
    console.log(galeria)
    var txt1 = ''
    galeria[0].nezet.forEach(function (elem) {

        txt1 += `<img src="${elem}" alt="kep">`

    })
    CLASS('kepek')[0].innerHTML = txt1;
}















