window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem); //elem azonosítója
}

function CLASS(elem) {
  return document.getElementsByClassName(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function init() {
  ID("cim").innerHTML = "<h1>Fenntarthatósági témahét</h1>";
}

function init() {
  fetch("cikk.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.cikkek);
      megjelenít(data.cikkek);
    });
}

function megjelenít(cikkek) {
  var txt2 = "";
  cikkek.forEach(function (cikk) {
    txt2 += "<ul>";
    for (const key in cikk) {
      txt2 += `<li><span>${key}:</span><span> ${cikk[key]}</span></li>`;
    }

    txt2 += "</ul>";
  });

  console.log(txt2);
  CLASS("cikkek")[0].innerHTML = txt2;
}
