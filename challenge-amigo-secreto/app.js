// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let resultadoMostrado = false; // Variable para verificar que se muestre el resultado

// Obtener referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');
const botonSortear = document.querySelector('.button-draw');

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = inputAmigo.value.trim();
    
    // Validación para asegurarse de que ingresen nombres y no dejen el campo vacio
    if (input === "" || !/^[a-zA-Z\s]+$/.test(input)) {
        alert('Por favor, ingresa un nombre válido');
        inputAmigo.value = '';
        return;
    }

    // Añadir el nombre al array
    amigos.push(input);

    // Limpiar la lista actual en el DOM
    listaAmigos.innerHTML = '';

    // Iterar sobre el arreglo amigos y crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }

    // Limpiar el campo de texto
    inputAmigo.value = '';
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para sortear.');
        return;
    }

    ulResultado.innerHTML = '';

    const index = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[index];
    mostrarResultado(amigoSecreto);
    resultadoMostrado = true;
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSecreto) {
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    ulResultado.appendChild(li);
}

// Función para limpiar la lista y el resultado después de realizar el sorteo
function limpiarListaYResultado() {
    if (resultadoMostrado) {
        amigos = [];
        listaAmigos.innerHTML = '';
        ulResultado.innerHTML = '';
        resultadoMostrado = false;
    }
}

// Agregar un evento al campo de texto para limpiar el resultado solo si el se realizo
inputAmigo.addEventListener('click', limpiarListaYResultado);

// Agregar un evento al botón Sortear para realizar el sorteo
botonSortear.addEventListener('click', sortearAmigo);

