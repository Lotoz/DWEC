const { createRef } = require("react");

/**
 *     <li>•Usar document.createElement()</li>
            <li>•Usar document.createTextNode()</li>
            <li>•Insertar el texto en el párrafo con appendChild()</li>
 */
const e1 = document.getElementById('e1');
let e1_inpt = document.getElementById('e1_inpt').value;
let caja = document.getElementById('resultado_e1');

e1.addEventListener('click', generarP);

// Por alguna razon no refresca bro
function generarP() {
    let parrafo = document.createElement("p");
    let texto = document.createTextNode(e1_inpt);
    parrafo.appendChild(texto);
    caja.appendChild(parrafo);
}

/**
 * <ul>
            <li>•Crear cada li dinámicamente</li>
            <li>•Añadirlos a la lista usando appendChild()</li>
        </ul>
 <button id="e2"></button>
        <div id="resultado_e2"></div>
        */

let e2 = document.getElementById('e2');
let resultado_e2 = document.getElementById('resultado_e2');

e2.addEventListener('click', generarLista);
    let contador = 1;
function generarLista() {
    //Generamos una ul
    let elemento = document.createElement('li');

    let num = document.createTextNode(contador);
    elemento.append(num);
    resultado_e2.appendChild(elemento);
    contador++;
}
let e3 = document.getElementById('e3');
let resultado_e3 = document.getElementById('resultado_e3');

e3.addEventListener('click', generarSelect);

/**
 * Dont work
 */
function generarSelect() {
    let select = document.createElement('select');
    let option = document.createElement('option');
    let array = ['Madrid', 'Barcelona', 'Malaga'];
    array.forEach(element => {
        let e = document.createTextNode(element);
        option.appendChild(e);
        select.appendChild(option);
    });
    resultado_e3.appendChild(select);
}

