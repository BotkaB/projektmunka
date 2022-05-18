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

    ID("gomb2").onclick = function () { //eseménykezelő
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

    //asszinkron hívás
    fetch("teszt.json") //relatív elérési út (ugyanabban a mappában van)
        .then((response) => response.json())
        .then((data) => { //call back

            teszt = data[kulcs];
            megjelenit(data[kulcs]);

        });

}

function megjelenit(teszt) {
    console.log(teszt);

    var txt1 = '';
    teszt.forEach(function (elem, index) { //tömb ezen belül objektumok vannak.

        txt1 += `<ul ID=${index}>`

        txt1 += `<li > ${elem.kerdes}</li><li><button CLASS=v1 > ${elem.v1}</button></li><li><button CLASS=v2> ${elem.v2}</button></li><li><button CLASS=v3> ${elem.v3}</button></li>`; //v2 kulcs értéke kiolvasása a gombra

        txt1 += '</ul>'
    })
    CLASS('kerdesek')[0].innerHTML = txt1;
    megoldas();
}
function jovalasz(kerdes, valasz) {

    var jo = teszt[kerdes].helyesv;
    return jo.includes(valasz);

}
var db = 0;

function megoldas() {

    $(".kerdesek button").forEach(function (elem, index) {
        
        elem.onclick = function (event) {
            var kerdes = elem.parentNode.parentNode.id;
            var valasz = elem.className;
           
            if (jovalasz(kerdes, valasz)) {
                elem.style.backgroundColor = "green";
                db++;
                ID("valaszszam").innerHTML = parseInt(db);   

            } else {
                elem.style.backgroundColor = "red";
                teszt[kerdes].helyesv.forEach(function (elem2, index2) {
                    $(`ul[id='${kerdes}'] button.${elem2}`)[0].style.backgroundColor = "yellow";
                });
            }

            
        };
    });
    db=0;
    ID("valaszszam").innerHTML =0;
}




