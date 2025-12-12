// Función auxiliar para mostrar resultados en el HTML
function mostrarResultado(id, data) {
    const el = document.getElementById(id);
    // Si es un objeto o array, lo convertimos a string bonito
    const texto = (typeof data === 'object') ? JSON.stringify(data, null, 2) : data;
    el.innerText = `Resultado: ${texto}`;
    el.style.display = 'block';
}

// EJERCICIO 1: Fibonacci con reduce
function ejercicioFibonacci() {
    // Queremos 10 números. Empezamos con [0, 1] y necesitamos calcular 8 más.
    // Creamos un array vacío de largo 8 para iterar.
    const nIteraciones = 8;

    const fibonacci = [...Array(nIteraciones)].reduce((acc) => {
        // acc es nuestro array acumulado, empieza siendo [0, 1]
        const ultimo = acc[acc.length - 1];
        const penultimo = acc[acc.length - 2];

        // Añadimos la suma de los dos anteriores
        acc.push(ultimo + penultimo);

        return acc; // Devolvemos el array actualizado para la siguiente vuelta
    }, [0, 1]); // Valor inicial: los dos primeros números

    mostrarResultado('res-1', fibonacci);
}

// EJERCICIO 2: Filter + Map
function ejercicioUsuarios() {
    const usuarios = [
        { nombre: "Ana", activo: true, edad: 25 },
        { nombre: "Luis", activo: false, edad: 30 },
        { nombre: "Carlos", activo: true, edad: 22 },
        { nombre: "María", activo: false, edad: 28 }
    ];

    // 1. Filtramos los activos
    // 2. Mapeamos para obtener solo el nombre
    const nombresActivos = usuarios
        .filter(usuario => usuario.activo)
        .map(usuario => usuario.nombre);

    mostrarResultado('res-2', nombresActivos);
}

// EJERCICIO 3: Flat
function ejercicioComentarios() {
    const hiloComentarios = [
        "¡Gran post!",
        ["Gracias", "Me alegro de que te guste"],
        "¿Cuándo subes el siguiente?",
        ["Pronto", ["Quizás mañana", "O el lunes"]] // Nivel extra de anidación
    ];

    // flat(Infinity) aplana todos los niveles, sin importar cuán profundos sean
    const comentariosPlanos = hiloComentarios.flat(Infinity);

    mostrarResultado('res-3', comentariosPlanos);
}

// EJERCICIO 4: Find
function ejercicioStock() {
    const inventario = [
        { id: 101, producto: "Teclado", stock: 15 },
        { id: 102, producto: "Ratón", stock: 3 },  // <--- Este es el primero bajo
        { id: 103, producto: "Monitor", stock: 2 },
        { id: 104, producto: "Cable", stock: 50 }
    ];

    // Buscamos el PRIMERO que tenga stock < 5
    const productoCritico = inventario.find(item => item.stock < 5);

    mostrarResultado('res-4', productoCritico);
}

// EJERCICIO 5: Set (Unicos)
function ejercicioDuplicados() {
    const numerosSucios = [1, 2, 2, 3, 4, 4, 4, 5, 1, 6];

    // 1. Creamos un Set (elimina duplicados automáticamente)
    // 2. Lo convertimos de nuevo a Array usando el spread operator [...]
    const numerosLimpios = [...new Set(numerosSucios)];

    mostrarResultado('res-5', numerosLimpios);
}