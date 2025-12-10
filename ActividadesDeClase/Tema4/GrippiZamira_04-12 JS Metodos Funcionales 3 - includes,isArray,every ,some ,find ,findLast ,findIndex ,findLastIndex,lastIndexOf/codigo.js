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
/**
 * Validamos entradas de formularios
 */
function ejercicio3() {
    let salida = document.getElementById('res_e3');
    let verificar = [true, true, false, true];
    
    verificar.every(campo => campo == true) ? salida.innerHTML = 'Todos los campos estan completos' : salida.innerHTML = 'Algun campo no esta completo';
}

/**
 * Usando some, con que solo uno se cumpla se devuelve verdadero
 */
function ejercicio4() {
    let salida = document.getElementById('res_e4');
    let permisos = [false, false, true, false];
    permisos.some(permiso => permiso == true) ? salida.innerHTML = 'El usuario posee permisos' : salida.innerHTML ='El usuario no posee ningun permiso';
}

/**
 * Busca el primer elemento menor a 10
 */
function ejercicio5() {
    let salida = document.getElementById('res_e5');
    const stock = [15, 7, 25, 5];
    let elemento = stock.find(cantidad => cantidad < 10);
    salida.innerHTML = `El primer elemento que coincide con lo pedido es ${elemento}`;
}
/**
 *  Encontrar el último pedido urgente
 */
function ejercicio6() {
    let salida = document.getElementById('res_e6');
    const prioridades = ["baja", "media", "alta", "baja"];
    let encontrado = prioridades.findLast(prioridad => prioridad === "alta");
    salida.innerHTML = `El elemento encontrado es ${encontrado}`;
}
/**
 * Devuelve la posicion de la primera coincidencia 
 */
function ejercicio7() {
     let salida = document.getElementById('res_e7');
    const precios = [100, 50, 30, 150];
    salida.innerHTML = `El producto se encuentra en la posicion ${precios.findIndex(precio => precio < 50) }`;
}
/**
 * Busca la ultima coincidencia posible en el array y devuelve su posicion
 */
function ejercicio8() {
    let salida = document.getElementById('res_e8');
    const clientes = ["regular", "VIP", "regular", "VIP"];
    salida.innerHTML = `El ultimo cliente VIP se encuentra en la posicion ${clientes.findLastIndex(cliente => cliente === "VIP") }`;
}

function ejercicio9() {
    let salida = document.getElementById('res_e9');
    const productos = ["manzana", "naranja", "plátano",];
     salida.innerHTML = `El producto se encuentra en la posicion ${productos.indexOf("plátano") } <br>`;
     // Devuelve el indice de la primera vez que se encuentra el producto
    salida.innerHTML += `El producto se encuentra en la posicion ${productos.lastIndexOf("manzana") }`;
     // Devuelve la ultima posicion que encontro del producto 
}
function ejercicio10() {
    let salida = document.getElementById('res_e10');
    const roles = ["usuario", "usuario", "admin", "moderador"];
    roles.includes("admin") ? salida.innerHTML += 'Existe el admin<br>' : salida.innerHTML +='No hay admin<br>';
    roles.some(rol => rol === "admin")? salida.innerHTML += 'Existe el admin<br>' : salida.innerHTML +='No hay admin<br>';
}