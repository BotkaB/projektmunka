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


function beolvasas1(kulcs) {

    fetch("cikk.json")
    .then((response) => response.json())
    .then((data) => {

      megjelenít(data[kulcs])


    })
  }

  var teszt = [] ;


  function megjelenít(cikk) {
    console.log(cikk);
    var txt1 = "";
  
    txt1 += `<ul>`;
  
    CLASS("cikkek")[0].innerHTML = txt1;
  }