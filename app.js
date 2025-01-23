let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}  

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroRandom(); 
    intentos = 1;
}


function generarNumeroRandom() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        
        // Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroRandom();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
}



function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó.
        if(numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarInput(); 
    }
    return;
}

function reiniciarJuego() {
    //Limpiar la caja.
    limpiarInput();
    //Indicar mensaje de intervalo de números    //Generar número aleatorio    //Inicializar el numero de intentos.
    condicionesIniciales();
    //Deshabilitar el boton "nuevo juego".
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();