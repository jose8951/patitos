$(function () {
    setInterval(crearPato, 1500);
});

var patitosAsesinados = 0;
var patitosLibres = 0;
var contadorPatitos = 0;
var libre = 0;
var asesinados = 0;


function crearPato() {
    // Metemos el nuevo elemento creado en una variable
    var nuevoPatito = document.createElement("div");

    // Cogemos al futuro padre del elemento y lo metemos en variable (comodidad)
    var padre = document.getElementById("corredorDeLaMuerte");

    // Le damos la clase para el CSS
    nuevoPatito.className = "patito";

    // Le damos la funcionalidad de hacer click
    nuevoPatito.setAttribute("onclick", "dispara(this)");

    // Y le damos una ID basado n un contador de patitos creados (id autoincrementada)
    nuevoPatito.id = "pato" + contadorPatitos;

    // Aqui nace el nuevo patito
    padre.appendChild(nuevoPatito);

    // Y aqui lo mandamos a nadar
    moverPatito(nuevoPatito.id);

    // Suma uno al contador de patitos nacidos.
    contadorPatitos++;
}

function moverPatito(patoId) {

    // Metemos al patito como elemento en una variable (comodidad)
    var patitoActual = document.getElementById(patoId);

    // Movemos el patito cogiendo su posicion actual con el offset y sumandole los pixeles 
    patitoActual.style.left = patitoActual.offsetLeft + 15 + 'px';

    //  console.log(patitoActual);
    // console.log(patitoActual.offsetLeft);
    // Si el patito se sale del cuadrado de juego, felicidades, ha escapado.
    if (patitoActual.offsetLeft < 1200) {
        // Relanza la funcion actual para seguir moviendo al patito
        setTimeout("moverPatito('" + patoId + "')", 100);
    } else {
        // Si ha escapado, sumamos al contador de patitos liberados
        libre++;

        // Y metemos ese contador en el HTML mediante span         
        $('#patitosLiberados').html(libre);

        // Y lo borramos de la web.
        patitoActual.parentNode.removeChild(patitoActual);

    }
}


function dispara(patito) {
    console.log(patito);
    // Matamos al patito de manera lenta y dolorosa
    patito.parentNode.removeChild(patito);

    // Sumamos 1 a nuestro contador de trofeos
    asesinados++;

    // Eliminamos al patito de este cruel y divertido mundo
    $('#patitosAsesinados').html(asesinados);
}