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
    ID("kep2").onclick = function () {
        console.log("katt");
        olvasas2("galeria");
    }
    ID("kep3").onclick = function () {
        console.log("katt");
        olvasas3("galeria");
    }
    ID("kep4").onclick = function () {
        console.log("katt");
        olvasas4("galeria");
    }
}





var teszt = [];

function olvasas1(kulcs) {
    

    fetch("galeria.json")
        .then((response) => response.json())
        .then((data) => {

           
            megjelenit(data[kulcs])
            leiras(data[kulcs])

        })
 
}

function olvasas2(kulcs) {
    

    fetch("galeria.json")
        .then((response) => response.json())
        .then((data) => {

           
            megjelenit2(data[kulcs])

        })
 
}

function olvasas3(kulcs) {
    

    fetch("galeria.json")
        .then((response) => response.json())
        .then((data) => {

           
            megjelenit3(data[kulcs])

        })
 
}

function olvasas4(kulcs) {
    

    fetch("galeria.json")
        .then((response) => response.json())
        .then((data) => {

           
            megjelenit4(data[kulcs])

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


function megjelenit2(galeria){
    console.log(galeria)
    var txt1 = ''
    galeria[1].nezet.forEach(function (elem) {

        txt1 += `<img src="${elem}" alt="kep">`

    })
    CLASS('kepek')[0].innerHTML = txt1;
}



function megjelenit3(galeria){
    console.log(galeria)
    var txt1 = ''
    galeria[2].nezet.forEach(function (elem) {

        txt1 += `<img src="${elem}" alt="kep">`

    })
    CLASS('kepek')[0].innerHTML = txt1;
}



function megjelenit4(galeria){
    console.log(galeria)
    var txt1 = ''
    galeria[3].nezet.forEach(function (elem) {

        txt1 += `<img src="${elem}" alt="kep">`

    })
    CLASS('kepek')[0].innerHTML = txt1;
}











