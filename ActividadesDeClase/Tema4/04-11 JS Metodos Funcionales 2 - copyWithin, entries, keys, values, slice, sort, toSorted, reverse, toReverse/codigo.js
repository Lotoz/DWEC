function ejecutarEj1() {
    let ids = [10, 20, 30, 40, 50];
    ids.copyWithin(0, 2, 4);
    ids.reverse();
    let resultado = ids.slice(0, 3);
    document.getElementById('res_ej1').innerText = `Resultado: [${resultado.join(', ')}]`;
}

function ejecutarEj2() {
    let productos = ["manzana", "naranja", "plátano"];
    let iteradorEntries = productos.entries();
    let texto = "";

    for (let entry of iteradorEntries) {
        texto += `Producto ${entry[0]}: ${entry[1]}\n`;
    }

    let claves = Array.from(productos.keys());
    texto += `Claves de productos: [${claves.join(', ')}]`;

    document.getElementById('res_ej2').innerText = texto;
}

function ejecutarEj3() {
    let calificaciones = [85, 75, 95, 65, 90];
    let iteradorValues = calificaciones.values();
    calificaciones.sort((a, b) => b - a);
    let topTres = calificaciones.slice(0, 3);
    document.getElementById('res_ej3').innerText = `Resultado: [${topTres.join(', ')}]`;
}

function ejecutarEj4() {
    let pedidos = [1003, 1001, 1002, 1005, 1004];
    pedidos.sort((a, b) => a - b);
    pedidos.reverse();
    let prioritarios = pedidos.slice(0, 3);
    document.getElementById('res_ej4').innerText = `Resultado: [${prioritarios.join(', ')}]`;
}

function ejecutarEj5() {
    let empleados = [300, 200, 400, 100];
    let ordenados = empleados.toSorted((a, b) => a - b);
    let invertidos = ordenados.toReversed();
    let recientes = invertidos.slice(0, 2);
    document.getElementById('res_ej5').innerText = `Resultado: [${recientes.join(', ')}]`;
}

function ejecutarEj6() {
    let precios = [50, 30, 20, 10, 40];
    precios.copyWithin(3, 1, 3);
    precios.sort((a, b) => a - b);
    let baratos = precios.slice(0, 3);
    document.getElementById('res_ej6').innerText = `Resultado: [${baratos.join(', ')}]`;
}

function ejecutarEj7() {
    let configuraciones = ["pantalla completa", "sonido activado", "modo oscuro"];
    //Buscar para que sirven luego
    let claves = configuraciones.keys();
    let valores = configuraciones.values();
    let texto = "";

    let index = 0;
    for (let valor of configuraciones) {
        texto += `Clave ${index}: ${valor}\n`;
        index++;
    }

    document.getElementById('res_ej7').innerText = texto;
}

function ejecutarEj8() {
    let comentarios = [5003, 5001, 5002, 5005, 5004];
    let ordenados = comentarios.toSorted((a, b) => a - b);
    ordenados.reverse();
    let ultimos = ordenados.slice(0, 2);
    document.getElementById('res_ej8').innerText = `Resultado: [${ultimos.join(', ')}]`;
}