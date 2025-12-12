/* EJERCICIO 1: Arrays */
let frutas = ["Manzana", "Banana", "Pera"];
frutas.push("Uva");
frutas.shift();
console.log(frutas); // ["Banana", "Pera", "Uva"]

/* EJERCICIO 2: String & Math */
let precioNum = parseFloat(precioString); // O parseFloat(precioString.replace("€", ""))
let precioRedondo = Math.round(precioNum);
console.log(`El precio redondeado es: ${precioRedondo}`);

/* EJERCICIO 3: Fechas */
const hoy = new Date();
let diferenciaMs = hoy - nacimientoJS;
// Convertir ms a años (aprox): ms / 1000 / 60 / 60 / 24 / 365.25
let anos = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24 * 365.25));
console.log(anos);

/* EJERCICIO 4: Map & Filter */
const resultadoIT = empleados
    .filter(e => e.depto === "IT")
    .map(e => e.nombre.toUpperCase());
console.log(resultadoIT); // ["LUIS", "DANI"]

/* EJERCICIO 5: Reduce */
const sumaPares = numeros.reduce((acc, num) => {
    if (num % 2 === 0) return acc + num;
    return acc;
}, 0);
console.log(sumaPares); // 12

/* EJERCICIO 6: DOM */
const btn = document.getElementById("btn-examen");
const input = document.getElementById("input-examen");
const box = document.getElementById("resultado-examen");

btn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = input.value;
    box.appendChild(p);
    input.value = ""; // Opcional: limpiar input
});

/* EJERCICIO 7: Set */
const combinados = [...grupoA, ...grupoB];
const unicos = [...new Set(combinados)];
unicos.sort((a, b) => a - b);
console.log(unicos); // [1, 2, 5, 10]

/* EJERCICIO 8: Clases */
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    iva() {
        return this.precio * 1.21;
    }
}
const p = new Producto("Laptop", 1000);
console.log(p.iva()); // 1210

/* EJERCICIO 9: Closures */
function crearPrefijo(prefijo) {
    return function (palabra) {
        return prefijo + palabra;
    }
}
const pre = crearPrefijo("pre");
console.log(pre("historia")); // prehistoria

/* EJERCICIO 10: Map & Algoritmia */
const conteo = new Map();
for (let letra of texto) {
    if (letra !== " ") {
        let actual = conteo.get(letra) || 0;
        conteo.set(letra, actual + 1);
    }
}
console.log(conteo);