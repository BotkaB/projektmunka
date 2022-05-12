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

    fetch("teszt.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.altisk)
            olvasas(data.altisk)
        })
    


}



function olvasas(teszt) {
    var txt = ''
    teszt.forEach(function (altisk) {

        txt += '<ul>'
        
          txt += `<span> ${altisk.kerdes}</span>`
    
        
    
        txt += '</ul>'
      })
   

   
    CLASS('kerdesek')[0].innerHTML = txt;
   

}