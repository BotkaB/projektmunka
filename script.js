window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
}
function ID(elem) {
  return document.getElementById(elem);
}
function CLASS(elem) {
  return document.getElementsByClassName(elem);
}

function init() {
  fetch("kerdes.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.kerdesek)
      feldolgoz(data.kerdesek)
    })
  fetch("cikk.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.cikkek)
      feldolgoz2(data.cikkek)
    })
/*     fetch("galeria.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.galeria)
      feldolgoz2(data.galeria)
    }) */
}
function feldolgoz(kerdesek) {
  var txt = ''
  kerdesek.forEach(function (kerdes) {

    txt += '<ul>'
    for (const key in kerdes) {
      txt += `<li><span>${key}:</span><span> ${kerdes[key]}</span></li>`

    }

    txt += '</ul>'
  })

  console.log(txt);
  CLASS('kerdesek')[0].innerHTML = txt;
}

function feldolgoz2(cikkek) {
  var txt2 = ''
  cikkek.forEach(function (cikk) {

    txt2 += '<ul>'
    for (const key in cikk) {
      txt2 += `<li><span>${key}:</span><span> ${cikk[key]}</span></li>`
      
    }

    txt2 += '</ul>'
  })

  console.log(txt2);
  CLASS('cikkek')[0].innerHTML = txt2;
}

/* function feldolgoz3(galeria) {
  var txt3 = ''
  cikkek.forEach(function (gal) {

    txt3 += '<ul>'
    for (const key in gal) {
      txt3 += `<li><span>${key}:</span><span> ${gal[key]}</span></li>`
      
    }

    txt3 += '</ul>'
  })

  console.log(txt3);
  CLASS('galeria')[0].innerHTML = txt3;
} */