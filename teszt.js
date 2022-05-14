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
        olvasas1("altisk");
    };

    ID("gomb2").onclick = function () {
        console.log("katt");
        olvasas1("kozepisk");
    }
    ID("gomb3").onclick = function () {
        console.log("katt");
        olvasas1("ffelnott");
    }
    
}

var teszt = [];

function olvasas1(kulcs) {
    

    fetch("teszt.json")
        .then((response) => response.json())
        .then((data) => {

           
            megjelenit(data[kulcs])

        })
 
}

function megjelenit(teszt){
    console.log(teszt)
    var txt1 = ''
    teszt.forEach(function (elem) {

        txt1 += '<ul>'

        txt1 += `<li> ${elem.kerdes}</li>` + `<li><button> ${elem.v1}</button></li>` + `<li><button> ${elem.v2}</button></li>` + `<li><button> ${elem.v3}</button></li>`;

        txt1 += '</ul>'
    })
    CLASS('kerdesek')[0].innerHTML = txt1;
}

/* function olvasas2(teszt) {

    var txt2 = ''
    fetch("teszt.json")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.altisk)

            olvasas2(data.kozepisk)

        })

    teszt.forEach(function (kozepisk) {

        txt2 += '<ul>'

        txt2 += `<li> ${kozepisk.kerdes}</li>` + `<li><button> ${kozepisk.v1}</button></li>` + `<li><button> ${kozepisk.v2}<button></li>` + `<li><button> ${kozepisk.v3}<button></li>`;

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

        txt3 += `<li><span> ${ffelnott.kerdes}</span></li>` + `<li><button> ${ffelnott.v1}</button></li>` + `<li><button> ${ffelnott.v2}</button></li>` + `<li><button> ${ffelnott.v3}</button></li>`;

        txt3 += '</ul>'
    })
    CLASS('kerdesek')[0].innerHTML = txt3;
} */

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



