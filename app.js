// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();
    if (nombre) {
        listaNombres.push(nombre);
        inputNombre.value = '';
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

function sortearAmigo() {
    if (listaNombres.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
        const nombreElegido = listaNombres[indiceAleatorio];
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>Nombre elegido: ${nombreElegido}</li>`;
    } else {
        alert("No hay nombres en la lista.");
    }
}