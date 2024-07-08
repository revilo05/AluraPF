// let Title = document.querySelector("h1");
// Title.innerHTML = 'Juego del Secret Number';

// let paraf = document.querySelector("p");
// paraf.innerHTML = 'Ingrese un numero del 1 al 10.'
// Configurar el título y el párrafo inicial
InsertarText('h1', 'Juego del Numero Secreto!');
InsertarText('p', 'Ingrese un numero del 1 al 10.');

let cantidad = 10;
let secretN = GenerarSN(cantidad);

console.log(secretN);

function VeriF() {
    let NumberUSER = parseInt(document.getElementById('NumerUsser').value);
    document.getElementById('reiniciar').removeAttribute('disabled');

    console.log(NumberUSER);
    console.log(typeof(NumberUSER));

    if(secretN === NumberUSER) {
        InsertarText('h1', '¡Haz Adivinado el Numero Secreto!');
        InsertarText('p', '¡Felicitaciones!');
        console.log("¡Felicidades, es correcto!");
    } else if(NumberUSER > secretN) {
        InsertarText('h1', '¡Haz Fallado!');
        InsertarText('p', 'El numero ingresado es mayor.');
        limpiar();
    } else {
        InsertarText('h1', '¡Haz Fallado!');
        InsertarText('p', 'El numero ingresado es menor.');
        limpiar();
    }
}

function limpiar() {
    document.getElementById('NumerUsser').value = '';
}

function InsertarText(etiqueta, texto) {
    let element = document.querySelector(etiqueta);
    element.innerHTML = texto;
}

function GenerarSN(cantidad) {
    return Math.floor(Math.random() * cantidad) + 1;
}

function NewG() {
    limpiar();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    InsertarText('h1', 'Juego del Numero Secreto (New range)!');
    InsertarText('p', 'Ingrese un numero del 1 al 50.');
    cantidad = 50;

    secretN = GenerarSN(cantidad);

    console.log("Nuevo numero secreto: " + secretN);
}
