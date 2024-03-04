



function clic (){



const min = Math.ceil (document.querySelector('.inp1').value)
const max = Math.floor(document.querySelector('.inp2').value)



const resultado = Math.floor(Math.random () * (max - min + 1)) + min;

alert(resultado)
 //document.getElementById("result").innerHTML=resultado;

 //linha pra colocar em um elemento tipo um h2



}

