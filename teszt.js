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
    ID("gomb1").onclick = function () {
        console.log("katt");
        olvasas1();
    };

    ID("gomb2").onclick = function () {
        console.log("katt");
        olvasas2();
    }
    ID("gomb3").onclick = function () {
        console.log("katt");
        olvasas3();
    }
    
}

function olvasas1(teszt) {
    var txt1 = ''

    fetch("teszt.json")
        .then((response) => response.json())
        .then((data) => {
           
            olvasas1(data.altisk)

        })

    teszt.forEach(function (altisk) {

        txt1 += '<ul>'

        txt1 += `<span> ${altisk.kerdes}</span>` + `<ul><button> ${altisk.v1}</button></ul>` + `<ul><button> ${altisk.v2}</button></ul>` + `<ul><button> ${altisk.v3}</button><ul>`;

        txt1 += '</ul>'
    })


    CLASS('kerdesek')[0].innerHTML = txt1;
}

function olvasas2(teszt) {

    var txt2 = ''
    fetch("teszt.json")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.altisk)

            olvasas2(data.kozepisk)

        })

    teszt.forEach(function (kozepisk) {

        txt2 += '<ul>'

        txt2 += `<span> ${kozepisk.kerdes}</span>` + `<ul><button> ${kozepisk.v1}</button></ul>` + `<ul><button> ${kozepisk.v2}<button></ul>` + `<ul><button> ${kozepisk.v3}<button></ul>`;

        txt2 += '</ul>'
    })

    CLASS('kerdesek')[0].innerHTML = txt2;
}

function olvasas3(teszt) {

    var txt3 = ''
    fetch("teszt.json")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.altisk)

            olvasas3(data.ffelnott)

        })

    teszt.forEach(function (ffelnott) {

        txt3 += '<ul>'

        txt3 += `<span> ${ffelnott.kerdes}</span>` + `<ul><button> ${ffelnott.v1}</button></ul>` + `<ul><button> ${ffelnott.v2}</button></ul>` + `<ul><button> ${ffelnott.v3}</button></ul>`;

        txt3 += '</ul>'
    })
    CLASS('kerdesek')[0].innerHTML = txt3;
}

function megoldas(teszt){
    CLASS(kerdesek)[0].$("button").forEach(function (elem) {
        elem.addEventListener("click", function (event) {
            console.log("klikk", event);
            megnez(event);
        }
        );
    });
} 

function kiertekel(event){
    console.log("valasz)");
}



