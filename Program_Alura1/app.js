alert('Hola, bienvenido!');
alert('Tendras 3 intentos');
let numeroSecreto = Math.floor(Math.random()*10 + 1);
console.log(numeroSecreto);

numeroSecreto*10;

console.log(numeroSecreto);

let intento = 1;
const maxIntentos = 4;

while (intento < maxIntentos) {
    let numeroUsuario = parseInt(prompt("Ingrese un numero:"));
    console.log(numeroUsuario);

    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: "${numeroUsuario}"`);
        break; // Salir del bucle si el usuario acierta
    } 
    
    else if (numeroUsuario > numeroSecreto) {
        alert(`No acertaste, ${numeroUsuario} es mayor que el numero secreto. Este es tu ${intento} intento`);
    } 
    
    else {
        alert(`No acertaste, ${numeroUsuario} es menor que el numero secreto. Este es tu ${intento} intento`);
    }

    intento++; // Incrementar el número de intentos

    if (intento === maxIntentos) {
        alert(`Lo siento, has alcanzado el número máximo de intentos. El número secreto era ${numeroSecreto}.`);
    }
}
