window.addEventListener('load', init);

function $(elem) {
    return document.querySelectorAll(elem);
}

function ID(elem) {
    return document.getElementById(elem);
}
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}


const kepek = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg", "kepek/kep6.jpg", "kepek/kep7.jpg", "kepek/kep8.jpg", "kepek/kep9.jpg", "kepek/kep10.jpg", "kepek/kep11.jpg", "kepek/kep12.jpg", "kepek/kep13.jpg", "kepek/kep14.jpg", "kepek/kep15.jpg", "kepek/kep16.jpg", "kepek/kep17.jpg", "kepek/kep18.jpg", "kepek/kep19.jpg", "kepek/kep20.jpg"];




function init() {
    ID("cim").innerHTML = "<h1>Memóriajáték</h1>";
    kezdoKep();
    
    ID("gomb").addEventListener("click", function () {
        tablaMeret();

    });




}

function adatBeker() {

    do {
        var meret = prompt("Adja meg, hány párral szeretne játszani (min.6-max.20).", 0);
    } while (meret < 6 || meret > 20);
    var meret = parseInt(meret) * 2;

    return meret;

}

function kezdoKep() {

    let tabla = ID("tabla");


    let html = "";
    for (i = 0; i < (kepek.length) / 5; i++) {

        html += '<tr>';

        for (j = 0; j < (kepek.length) / 4; j++) {
            html += "<td>" + "</td>";

        }
        html += "</tr>";
    }
    tabla.innerHTML = html;

    for (let index = 0; index < kepek.length; index++) {

        $('td')[index].innerHTML = `<img src='kepek/kep${index + 1}.jpg'/>`;
    }
}

function tablaMeret() {


    var meret = adatBeker();

    let elteltMP = 0;
    let idozito = setInterval(() => {
        console.log("időzítő");
        let perc = parseInt(elteltMP / 60);
        let sec = elteltMP % 60;
        console.log(perc + ":" + sec);
        CLASS("ora")[0].innerHTML = perc + ":" + (sec < 10 ? "0" + sec : sec);
        elteltMP++;
        if (parokszama === kepekSzama) {
            clearInterval(idozito);
        }
    }, 1000);

    let tabla = ID("tabla");

    let html = "";

    if (meret <= 15) {


        for (i = 0; i < (meret / 4) - 0.5; i++) {

            html += '<tr>';

            for (j = 0; j < (meret / 3) - 0.5; j++) {



                html += "<td></td>";
            }
            html += "</tr>";
        }
    }
    if (meret >= 16 && meret <= 19) {


        for (i = 0; i < (meret / 4) - 0.51; i++) {

            html += '<tr>';

            for (j = 0; j < (meret / 4); j++) {

                html += "<td>" + "</td>";
            }
            html += "</tr>";
        }
    }
    if (meret >= 20 && meret <= 23) {


        for (i = 0; i < (meret / 5) - 0.51; i++) {

            html += '<tr>';

            for (j = 0; j < (meret / 4); j++) {

                html += "<td>" + "</td>";
            }
            html += "</tr>";
        }
    }
    if (meret >= 24 && meret <= 27) {


        for (i = 0; i < (meret / 5) - 0.51; i++) {

            html += '<tr>';

            for (j = 0; j < (meret / 5); j++) {

                html += "<td>" + "</td>";
            }
            html += "</tr>";
        }
    }
    if (meret >= 28 && meret <= 33) {


        for (i = 0; i < (meret / 6) - 0.51; i++) {

            html += '<tr>';

            for (j = 0; j < (meret / 5); j++) {

                html += "<td>" + "</td>";
            }
            html += "</tr>";
        }
    }
    if (meret >= 34 && meret <= 37) {


        for (i = 0; i < (meret / 6) - 0.51; i++) {

            html += '<tr>';

            for (j = 0; j < (meret / 6); j++) {

                html += "<td>" + "</td>";
            }
            html += "</tr>";
        }
    }
    if (meret >= 38 && meret <= 40) {


        for (i = 0; i < (meret / 7); i++) {

            html += '<tr>';

            for (j = 0; j < (meret / 6); j++) {

                html += "<td>" + "</td>";

            }
            html += "</tr>";
        }
    }


    tabla.innerHTML = html;
    for (let index = 0; index < meret; index++) {

        $('td')[index].innerHTML = "<img src='./kepek/hatter.jpg' id='" + index + "'>";
    }


    var kepekSzama = meret / 2;
    var jatszoLista = [];


    for (let i = 0; i < kepekSzama; i++) {

        jatszoLista.push(kepek[i]);
        jatszoLista.push(kepek[i]);

    }
    console.log("generálás", jatszoLista);



    for (var i = 0; i < jatszoLista.length; i++) {
        var j = Math.floor(Math.random() * (jatszoLista.length - i)) + i;
        var tmp = jatszoLista[i];
        jatszoLista[i] = jatszoLista[j];
        jatszoLista[j] = tmp;

    }
    console.log("keverés", jatszoLista)

    var audio = new Audio('zene.mp3');
    audio.play();


    $("td").forEach(function (elem) {
        elem.addEventListener("click", function (event) {
            console.log("klikk", event);
            megnez(event);
        }
        );
    });




    var parKepTomb = [];
    var parTomb = [];

    let lepesszam = 0;
    let parokszama = 0;

    function megnez(event) {
        
        if (parKepTomb.length === 2) {
            return;
        }
        console.log("itt", event.target.id);
        let valasztas = parseInt(event.target.id);
        event.target.src = jatszoLista[valasztas];

        if (0 <= valasztas && valasztas < 20) {
            parKepTomb.push(jatszoLista[valasztas]);
            parTomb.push(valasztas);
            var kep1 = parseInt(parTomb[0]);
            console.log(parKepTomb);
            console.log(parTomb);
            console.log(kep1);
        }
        if (0 <= valasztas && valasztas < 20 && valasztas != kep1) {
            var kep2 = parseInt(parTomb[1]);
            console.log(parKepTomb);
        } else {
            parKepTomb.splice([1]);
            parTomb.splice([1]);
            console.log(parKepTomb);
            console.log(parTomb);
            console.log(kep1);
            console.log(kep2);



        }
        if (parKepTomb.length === 2) {
            lepesszam++;
            console.log(lepesszam);
            ID("lepesszam").innerHTML = parseInt(lepesszam);
            if (parKepTomb[0] === parKepTomb[1]) {
                parokszama++;
                console.log(parokszama);
                setTimeout(function () {
                    console.log("hurrá");
                    console.log(kep1);
                    console.log(kep2);
                    jatszoLista.forEach(function (elem) {
                        ID(kep1).style.display = "none";
                        ID(kep2).style.display = "none";
                    })
                    parTomb.splice(0);
                    parKepTomb.splice(0);
                    console.log(parTomb);
                    console.log(parKepTomb);
                }, 300);
            }


            else {
                setTimeout(function () {
                    console.log("sebaj");
                    console.log(kep1);
                    console.log(kep2);

                    jatszoLista.forEach(function (elem) {

                        $('td')[kep1].innerHTML = "<img src='./kepek/hatter.jpg' id='" + kep1 + "'>";
                        $('td')[kep2].innerHTML = "<img src='./kepek/hatter.jpg' id='" + kep2 + "'>";
                    })
                    parTomb.splice(0);
                    parKepTomb.splice(0);
                    console.log(parTomb);
                    console.log(parKepTomb);

                }, 1000);

            }


        }
        setTimeout(function () {
            if (parokszama === kepekSzama) {
                alert("Gratulálok! Vége a játéknak.");
                kezdoKep();
            }
        }, 201);


    }
}


