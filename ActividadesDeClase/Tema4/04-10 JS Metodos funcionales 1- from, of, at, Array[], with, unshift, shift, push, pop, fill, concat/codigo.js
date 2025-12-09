function ejecutarEj1() {
    let inventario = Array.of(1, 2, 3, 4, 5);
    inventario.fill(7, 2, 4);
    inventario.unshift(0, 0);
    inventario.pop();
    let inventarioFinal = inventario.concat([10, 20, 30]);
    document.getElementById('res_ej1').innerHTML = inventarioFinal.join(', ');
}

function ejecutarEj2() {
    let empleados = Array.from("abcdef");
    empleados.at(2);
    empleados.at(-1);
    empleados = empleados.with(1, "X");
    empleados.shift();
    empleados.push("Y", "Z");
    document.getElementById('res_ej2').innerText = empleados.join("', '");
}

function ejecutarEj3() {
    let notas = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    notas.fill(99, 4, 9);
    notas.unshift(5, 6, 7);
    notas.pop();
    notas.shift();
    document.getElementById('res_ej3').innerText = notas.join(', ');
}

function ejecutarEj4() {
    let precios = [100, 200, 300, 400];
    precios.push(500, 600);
    precios.shift();
    precios = precios.with(2, 999);
    let preciosFinales = precios.concat([700, 800, 900]);
    document.getElementById('res_ej4').innerText = preciosFinales.join(', ')
};


function ejecutarEj5() {
    let chars = Array.from("hello world");
    chars.at(4);
    chars.at(-1);
    chars.unshift('#');
    let indiceEspacio = chars.indexOf(' ');
    if (indiceEspacio !== -1) {
        chars.fill('*', indiceEspacio, indiceEspacio + 1);
    }
    let fraseFinal = chars.concat(['!', '!', '!']);
    document.getElementById('res_ej5').innerText = fraseFinal.join("', '");
}

function ejecutarEj6() {
    let pedidos = [1, 2, 3, 4, 5, 6];
    pedidos.at(2);
    pedidos.at(-1);
    pedidos = pedidos.with(0, 0);
    pedidos.fill(8, 1, 4);
    pedidos.shift();
    pedidos.pop();
    pedidos.push(7, 8, 9);
    document.getElementById('res_ej6').innerText = pedidos.join(', ');
}