window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
  
}

function init(){
  fetch("kerdes.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.kerdesek)
      feldolgoz(data.kerdesek)
    })
    }
    function feldolgoz(kerdesek) {
        var txt = ''
        kerdesek.forEach(function (kerdes) {
          
          txt += '<ul>'
          for (const key in kerdes) {
            txt += `<li><span>${key}:</span><span> ${kerdes[key]}</span></li>`
            // txt += "<li><span>"+key+":</span><span> "+kutya[key]+"</span></li>"
          }
       
          txt += '</ul>'
        })
      
        console.log(txt)
        $('article')[0].innerHTML = txt
      }
      
      function init(){
        fetch("cikkek.json")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.cikkek)
            feldolgoz(data.cikkek)
          })
          }
          function feldolgoz(cikkek) {
              var txt = ''
              cikkek.forEach(function (cikkek) {
                
                txt += '<ul>'
                for (const key in cikkek) {
                  txt += `<li><span>${key}:</span><span> ${cikkek[key]}</span></li>`
                  // txt += "<li><span>"+key+":</span><span> "+kutya[key]+"</span></li>"
                }
             
                txt += '</ul>'
              })
            
              console.log(txt)
              $('article')[0].innerHTML = txt
            }