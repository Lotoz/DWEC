/**
 * EJERCICIO 1
 * Crea una función Ej1Trigonometica que se le pase dos parametros:
 * 1) un número que es angulo en grados
 * 2) un valor: cos, sen o tan
 * La función debe pasar el valor a radianes y devolver el resultado.
 * @param {number} grados - El ángulo en grados.
 * @param {string} funcion - El tipo de cálculo ('sen', 'cos', 'tan').
 * @returns {string} - El resultado formateado o mensaje de error HTML.
 */
function Ej1Trigonometica(grados, funcion) {
    let valor = 0;
    // Conversión de grados a radianes: (Grados * PI) / 180
    let radianes = grados * (Math.PI / 180);

    if (!isNaN(grados) && grados !== "") {
        switch (funcion.toLowerCase()) {
            case 'sen':
                valor = Math.sin(radianes);
                return `Sen(${grados}°) = ${valor.toFixed(4)}`;
            case 'cos':
                valor = Math.cos(radianes);
                return `Cos(${grados}°) = ${valor.toFixed(4)}`;
            case 'tan':
                valor = Math.tan(radianes);
                return `Tan(${grados}°) = ${valor.toFixed(4)}`;
            default:
                return "<span class='error'> ERROR: Opción incorrecta (use sen, cos, tan)</span>";
        }
    } else {
        return "<span class='error'> ERROR: No es un número válido</span>";
    }
}

// Función del botón Ejercicio 1
function ejecutarEj1() {
    let grados = document.getElementById('e1_grados').value;
    let funcion = document.getElementById('e1_funcion').value;
    document.getElementById('e1_resultado').innerHTML = Ej1Trigonometica(parseFloat(grados), funcion);
}


/**
 * EJERCICIO 2
 * Crea una función Ej2JS que le pases una lista de valores y un id 
 * y te cree una lista ordenada con ellos escrita en el id.
 * @param {Array} listaValores - Array de strings con los textos.
 * @param {string} idElemento - El ID del elemento HTML donde escribir.
 */
function Ej2JS(listaValores, idElemento) {
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        let htmlLista = "<ol><li>" + listaValores.join("</li><li>") + "</li></ol>";
        elemento.innerHTML = htmlLista;
    } else {
        alert("El ID proporcionado no existe en el HTML.");
    }
}

// Función del botón Ejercicio 2
function ejecutarEj2() {
    let inputTexto = document.getElementById('e2_valores').value;
    let idDestino = document.getElementById('e2_id').value;

    // Separamos por comas para crear el Array real
    let arrayValores = inputTexto.split(",");

    Ej2JS(arrayValores, idDestino);
}


/**
 * EJERCICIO 3
 * Modifica el anterior para que uses parametros rest con un numero indeterminado de parametros.
 * @param {string} idElemento - ID donde pintar.
 * @param {...string} items - Argumentos variables que formarán la lista.
 */
function Ej3JS(idElemento, ...items) {
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        let lista = "<ol>";
        items.forEach(item => {
            lista += `<li>${item.trim()}</li>`;
        });
        lista += "</ol>";
        elemento.innerHTML = lista;
    }
}

// Función del botón Ejercicio 3
function ejecutarEj3() {
    let inputTexto = document.getElementById('e3_valores').value;
    let valores = inputTexto.split(",");
    // Usamos spread operator (...) para enviar el array como argumentos separados
    Ej3JS('e3_resultado', ...valores);
}


/**
 * EJERCICIO 4
 * Crea una función anónima que calcule el triple de un numero.
 */
const calcularTriple = function (numero) {
    return numero * 3;
};

/**
 * EJERCICIO 5
 * Crea una función anónima con flechas que calcule el cuadrado de un numero.
 */
const calcularCuadrado = (numero) => numero * numero;

// Función para probar 4 y 5
function ejecutarEj4y5() {
    let num = 5;
    alert(`Probando con número ${num}:\n` +
        `Ej 4 (Triple): ${calcularTriple(num)}\n` +
        `Ej 5 (Cuadrado): ${calcularCuadrado(num)}`);
}


/**
 * EJERCICIO 6 (IIFE)
 * Crea una función anónima con flechas que escriba hola mundo y que se ejecute automáticamente.
 */
(() => {
    console.log("Ejercicio 6: Hola Mundo (Autoejecutable)");
})();


/**
 * EJERCICIO 7
 * Función anónima con flechas que ponga en negrita el parámetro añadiéndole <strong>
 * y úsala con la función map sobre un array.
 */
const ponerNegrita = (texto) => `<strong>${texto}</strong>`;

function ejecutarEj7() {
    let array = ["ola", "adios", "amalia pide muchos detalles"];
    let arrayTransformado = array.map(ponerNegrita);

    document.getElementById('e7_resultado').innerHTML =
        `Original: ${array.join(", ")} <br> Transformado: ${arrayTransformado.join(", ")}`;
}


/**
 * EJERCICIO 8
 * Escribe una función que genere al azar 20 números enteros comprendidos entre 0 y 9.
 * Introducir en un array de 4 filas por 5 columnas y mostrarlo como tabla.
 */
function ejecutarEj8() {
    let filas = 4;
    let columnas = 5;
    let tablaHTML = "<table>";

    for (let i = 0; i < filas; i++) {
        tablaHTML += "<tr>";
        for (let j = 0; j < columnas; j++) {
            let numeroAzar = Math.floor(Math.random() * 10);
            tablaHTML += `<td>${numeroAzar}</td>`;
        }
        tablaHTML += "</tr>";
    }
    tablaHTML += "</table>";
    document.getElementById('e8_resultado').innerHTML = tablaHTML;
}


/**
 * EJERCICIO 9
 * Crea un función que te dibuje el cuadrado mágico 3x3 con el valor de entrada i.
 * @param {number} i - Valor base para calcular el cuadrado.
 */
function dibujarCuadradoMagico(i) {
    i = parseInt(i);

    // Fórmulas del PDF
    let matriz = [
        [i + 3, i + 8, i + 1],
        [i + 2, i + 4, i + 6],
        [i + 7, i, i + 5]
    ];

    let html = "<table>";
    matriz.forEach(fila => {
        html += "<tr>";
        fila.forEach(celda => {
            html += `<td>${celda}</td>`;
        });
        html += "</tr>";
    });
    html += "</table>";
    return html;
}

function ejecutarEj9() {
    let i = document.getElementById('e9_input').value;
    document.getElementById('e9_resultado').innerHTML = dibujarCuadradoMagico(i);
}


/**
 * EJERCICIO 10
 * Haz una función que se le pase un id y un color y cambie su color de texto.
 * @param {string} id - ID del elemento HTML.
 * @param {string} color - Color a aplicar (red, blue, hex, etc).
 */
function cambiarColor(id, color) {
    let obj = document.getElementById(id);
    if (obj) {
        obj.style.color = color;
    } else {
        alert("No se encontró el elemento con ID: " + id);
    }
}

function ejecutarEj10() {
    let id = document.getElementById('e10_id_target').value;
    let color = document.getElementById('e10_color').value;
    cambiarColor(id, color);
}


/**
 * EJERCICIO 12
 * Haz un ejercicio que calcule el factorial de un numero de manera recursiva.
 * @param {number} n - Número a calcular.
 */
function factorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialRecursivo(n - 1);
    }
}

function ejecutarEj12() {
    let numero = parseInt(document.getElementById('e12_numero').value);
    if (isNaN(numero) || numero < 0) {
        document.getElementById('e12_resultado').innerHTML = "<span class='error'>Ingresa un número entero positivo</span>";
    } else {
        let resultado = factorialRecursivo(numero);
        document.getElementById('e12_resultado').innerHTML = `Factorial de ${numero} es: <strong>${resultado}</strong>`;
    }
}