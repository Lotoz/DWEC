/**
 * Codigo javascript divido por ejercicio
 */
//Pillamos el boton del ejercicio 1
//const boton_e1 = document.querySelector('#boton_e1');
//La salida
const e1_resultado = document.getElementById('e1_resultado');

//Pillamos los input

//Evento al boton
//boton_e1.addEventListener('click', Ej1Trigonometica(numeroGrados, funcionTrigo), false);

function Ej1Trigonometica() {
    let numero = document.querySelector('#numeroGrados').value;
    let funcion = document.querySelector('#funcionTrigo').value;
    let valor = 0;
    if (!isNaN(numero)) {
        switch (funcion) {
            case 'sen':
                    valor = Math.sin(numero*Math.PI/180);
                    e1_resultado.innerHTML = `El resultado es ${valor}`;
                break;
            case 'cos':
                    valor = Math.cos(numero*Math.PI/180);
                    e1_resultado.innerHTML = `El resultado es ${valor}`;
                break;
            case 'tan':
                    valor = Math.tan(numero*Math.PI/180);
                    e1_resultado.innerHTML = `El resultado es ${valor}`;
                break;
            default:
                e1_resultado.innerHTML = "<h3 class='error'> ERROR OPCION INCORRECTA</h3>";
                break;
        }
    }else{
        e1_resultado.innerHTML = "<h3 class='error'> ERROR NO NUMERO</h3>";
    }
}

/**
 * Ejercicio 2
 * Crea una función Ej2JS  que le pases una lista de valores y un id y te cree una lista ordenada con ellos escrita en el el id 
 */
//Pillamos la salida

//No funcionaAAAAA
function Ej2Js(){
    let valores = [hola,paco, assa];
    let id = document.querySelector('#identificador').value;
    document.getElementById(id).innerHTML = "<ol><li>"+ valores.join("<li>") + "<ol>";
}