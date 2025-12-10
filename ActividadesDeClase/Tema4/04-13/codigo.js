function ejercicio1() {
    let salida = document.getElementById('res_e1');
    const precios = [100, 45, 30, 70, 25];
    const enOferta = precios.filter(precio => precio < 50); 
    salida.innerHTML = enOferta;
}
function ejercicio2() {
    let salida = document.getElementById('res_e2');
    const comentarios = [
  ["Buen post", "Gracias"],
  ["Interesante"],
  ["No estoy de acuerdo", ["Muy cierto", "Concuerdo"]]
];
const todosComentarios = comentarios.flat(2); 
salida.innerHTML = todosComentarios;
// ["Buen post", "Gracias", "Interesante", "No estoy de acuerdo", "Muy cierto", "Concuerdo"
}
function ejercicio3() {
    let salida = document.getElementById('res_e3');
    const usuarios = [
  { nombre: "Juan", roles: ["admin", "editor"] },
  { nombre: "María", roles: ["usuario"] },
  { nombre: "Pedro", roles: ["moderador", "editor"] }
    ];
    //Genera un nuevo array con los elementos sacados del array de objetos
const rolesPlanos = usuarios.flatMap(usuario => usuario.roles);
    salida.innerHTML = rolesPlanos; // ["admin", "editor", "usuario", "moderador", "editor"]
}
function ejercicio4() {
    let salida = document.getElementById('res_e4');
    const tareas = ["Lavar platos", "Comprar comida", "Hacer ejercicio"];

    tareas.forEach((tarea, index) => {
    salida.innerHTML += (`${index + 1}. ${tarea} <br>`);
    });

}
function ejercicio5() {
    let salida = document.getElementById('res_e5');
    const precios = [100, 200, 300];
    const preciosConIVA = precios.map(precio => precio * 1.21);
    salida.innerHTML = preciosConIVA; // [121, 242, 363], precios con IVA aplicado
}
function ejercicio6() {
    let salida = document.getElementById('res_e6');
    const usuarios = [
  { nombre: "Juan", activo: true },
  { nombre: "María", activo: false },
  { nombre: "Pedro", activo: true }
];
    const usuariosActivos = usuarios.filter(usuario => usuario.activo);
    let imprime = (e) => { 
        let cadena = "";
        let contador = 1;
        e.forEach((element)=> {
        cadena += contador + ". "+ element.nombre +" Estado : " + (element.activo ? 'Activo' : 'No deberia salir esto') + "<br>";
        contador++;
        });
        return cadena;
    };
    salida.innerHTML = imprime(usuariosActivos);
// [{ nombre: "Juan", activo: true }, { nombre: "Pedro", activo: true }]
}
function ejercicio7() {
    let salida = document.getElementById('res_e7');
    const categorias = ["Electrónica", ["Teléfonos", "Computadoras"], "Ropa"];
    const categoriasPlanas = categorias.flat();
    salida.innerHTML = categoriasPlanas;
}
function ejercicio8() {
    let salida = document.getElementById('res_e8');
    const nombres = ["juan", "maría", "pedro"];
    const nombresMayus = nombres.map(nombre => nombre.toUpperCase());
    salida.innerHTML = nombresMayus;// ["JUAN", "MARÍA", "PEDRO"]
}
function ejercicio9() {
    let salida = document.getElementById('res_e9');
    const cantidades = [10, 20, 30, 40];
cantidades.forEach(cantidad => {
    salida.innerHTML += `Se vendieron ${cantidad} productos.<br>`;
});
// Se vendieron 10 productos.
// Se vendieron 20 productos.
// Se vendieron 30 productos.
// Se vendieron 40 productos.

}
function ejercicio10() {
    let salida = document.getElementById('res_e10');
    const precios = [50, 100, 150];
    const preciosConDescuento = precios.map(precio => precio * 0.9);
    salida.innerHTML = preciosConDescuento;// [45, 90, 135], precios con descuento aplic
}