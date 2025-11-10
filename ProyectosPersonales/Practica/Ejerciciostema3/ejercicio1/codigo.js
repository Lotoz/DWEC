//Pillamos la id del boton
const BOTON = document.querySelector("#boton1");

BOTON.addEventListener('click' , gestorNotas);

/**
 * Gestiona todo el programa y es la funcion padre que se llama al dar al boton
 */
function gestorNotas() {
    //Para finalizar el do while
    //Por dios cambiar este bucle que da cringe
    nota = [];
    while (true) {
        let ingresado = window.prompt('Ingresa una nota. (Ingresa "fin" para finalizar): ');
        if(!isNaN(ingresado)) {
            nota.push(ingresado);
        }else{
            break;
        }
    }
        
    //Se le pasa un array de notas y devuelve el promedio
    //let notaPromedio = calculaPromedio(nota);
    //Devuelve un con 2 valores, la nota mas baja y la mas alta
    //Se lleva el array de notas, se lleva el array de nota MinMax y se lleva el promedio
    mostrarNotas(nota);
}
/**
 * Calcula el promedio de un array de notas
 * @param {} array 
 * @returns number
 */
function calculaPromedio(array) {
    let sumaTotal = 0;
    let contador = 0;
    for (const sumador of array) {
        sumaTotal += sumador;
        contador++;
    }
    let promedio = sumaTotal / contador;
    return promedio;
}
/**
 * Calcula el minimo y un maximo de un array de notas
 * No funciona del todo
 * @param {*} array 
 * @returns 
 * function notasMinMax(array) {
    let max = 11;
    let min = 0;
    for (let i = 0; i <= array.length; i++) {
        (max > array[i]) ? max = array[i] : max = max;
        (min < array[i]) ? min = array[i] : min = min;
    }
    let resultados = [max, min];
    return resultados;
}
 */
//Hay que pulilar
function minimo(array) {
    let minimo = Math.min(Infinity);
    for (const num of array) {
        (minimo > num) ? minimo = num : minimo = minimo;
    }
    return minimo;
}
function maximo(array) {
    let maximo = 0;
    for (const num of array) {
        (maximo > num) ?  maximo = maximo : maximo = num;
    }
    return maximo;
}

/** Sustituido por anonima
 * Analiza cada nota y devuelve una cadena
 * @param {*} nota 
 * function isAprobado(nota) {
   return (nota >= 5) ? 'Aprobado' : 'Desaprobado';
}
 */

function mostrarNotas(notas) {
    //Pillamos resultados para la salida
    const resultado = document.getElementById('resultados');
    //Primero mostramos por pantalla el promedio
    resultado.innerHTML = `<h3>El promedio es: ${calculaPromedio(notas)}</h3>`
    resultado.innerHTML += `<p>
   El maximo es ${maximo(notas)} 
   El minimo es ${minimo(notas)}
    </p><br>`;
    resultado.innerHTML += `<p> `;
    for (const nota of notas) {
        //Uso de funcion anonima
        let isNota = () => ((nota >= 5) ? 'Aprobado' : 'Desaprobado');
        resultado.innerHTML += isNota(nota) + " " + nota+"<br>";
        //Uso de la funcion
        //resultado.innerHTML += isAprobado(nota) +  " : " + nota + "<br>";
    }
}
