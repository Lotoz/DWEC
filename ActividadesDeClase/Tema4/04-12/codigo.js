/**
 * Ejercicio 1, usamos array includes
 */
function ejercicio1() {
    let salida = document.getElementById('res_e1');
    //Liempieza por si el usuario le da varias veces al boton
    salida.innerHTML = "";
    //Usamos el siguiente array
    //Para probar ["manzana", "mango", "plátano", "pera"] => No hay mango ni naranja
    // ["manzana", "naranja", "mango", "plátano", "pera"]; => Hay mango y naranja
    let stock = ["manzana", "naranja", "plátano", "pera"];
    //Verificamos si naranja esta en el stock
    let siNaranja = stock.includes("naranja");
    if (siNaranja) {
        salida.innerHTML += `<p>Hay naranja</p>`;
    } else {
        salida.innerHTML += `<p>No hay naranja</p>`;
    }
    //Ahora veremos si hay mango pero empezando del indice 2
    //Esta vez usaremos un ternario para hacerlo diff
    (stock.includes("mango", 2)) ? salida.innerHTML += `Si hay mango` : salida.innerHTML += `No hay mango`;
}
/**
 * Verificamos si la variable es array
 */
function ejercicio2() {
    let salida = document.getElementById('res_e2');
    //Liempieza por si el usuario le da varias veces al boton
    salida.innerHTML = "";
    //Fn que verifica
    const verificar = (valor) => {
        return Array.isArray(valor)
            ? "Es un array"
            : `No lo es, es un ${typeof valor}`;
    };
    //Recibe el dato (e)=> Que es una funcion anonima y el lugar donde mostrarlo (salida)
    const imprime = (e, salida) => {
        // += para acomular en salida
        salida.innerHTML += `<p>El valor <strong>${e}</strong>: ${verificar(e)}</p>`;
    };
    //Variable a comprobar
    let array = [2, 3, 4];
    let numero = 2;
    let cadena = "Hola";

    //Aplicamos todo
    imprime(array, salida);
    imprime(numero, salida);
    imprime(cadena, salida);
}
