/**
 * Variable Global para mantener el estado del Set entre ejercicios.
 */
let personajesSet = new Set();

/**
 * Función auxiliar para mostrar el contenido del Set en el HTML
 * (Para que veas los cambios en tiempo real).
 */
function actualizarVistaLista() {
    let listaHTML = "<strong>Estado actual del Set:</strong><br>[ ";
    // Convertimos a array para usar join, visualmente más limpio.
    listaHTML += Array.from(personajesSet).join(", ");
    listaHTML += " ]";
    document.getElementById('res_lista').innerHTML = listaHTML;
}

/**
 * EJERCICIO 1: Crear un Set de Personajes
 * Crea un conjunto llamado personajesSet e agrega al menos cinco personajes.
 */
function crearPersonajes() {
    personajesSet = new Set(); // Reiniciamos
    // Usamos .add() para añadir elementos 
    personajesSet.add("Gandalf");
    personajesSet.add("Frodo");
    personajesSet.add("Aragorn");
    personajesSet.add("Legolas");
    personajesSet.add("Gimli");
    console.log("Set creado correctamente.");
}

/**
 * EJERCICIO 2: Imprimir Personajes
 * Itera sobre el conjunto e imprime cada personaje en la consola.
 * [cite: 642]
 */
function imprimirPersonajes() {
    console.log("--- Personajes en el Set ---");
    // Usamos for...of para iterar
    for (let personaje of personajesSet) {
        console.log(personaje);
    }
    actualizarVistaLista();
}

// Wrapper para el botón del Ejercicio 1 y 2
function ejecutarEj1y2() {
    crearPersonajes();
    imprimirPersonajes();
}

/**
 * EJERCICIO 3: Verificar la Existencia
 * Función que devuelve true si el personaje está presente, false si no.
 */
function verificarExistencia(set, nombre) {
    // El método .has() devuelve un booleano 
    return set.has(nombre);
}

function ejecutarEj3() {
    let nombre = document.getElementById('in_verificar').value;
    let existe = verificarExistencia(personajesSet, nombre);

    let mensaje = existe
        ? `<span style='color:green'>¡Sí! ${nombre} está en el set.</span>`
        : `<span class='error'>No, ${nombre} no existe en el set.</span>`;

    document.getElementById('res_verificar').innerHTML = mensaje;
}

/**
 * EJERCICIO 4: Obtener el Número de Personajes
 * Función que devuelve el número total de personajes.
 */
function obtenerTotalPersonajes(set) {
    // La propiedad .size devuelve el número de valores
    return set.size;
}

function ejecutarEj4() {
    let total = obtenerTotalPersonajes(personajesSet);
    document.getElementById('res_contar').innerHTML = `El Set tiene <strong>${total}</strong> personajes.`;
}

/**
 * EJERCICIO 5: Agregar Personajes Únicos
 * Añade el nuevo personaje solo si no está presente.
 * Nota: Set ya maneja la unicidad automáticamente (ignora duplicados), 
 * pero el ejercicio pide verificar lógicamente.
 */
function agregarPersonajeUnico(set, nuevoPersonaje) {
    if (!set.has(nuevoPersonaje)) {
        set.add(nuevoPersonaje);
        return { exito: true, set: set };
    } else {
        return { exito: false, set: set };
    }
}

function ejecutarEj5() {
    let nuevo = document.getElementById('in_agregar').value;
    if (!nuevo) return;

    let resultado = agregarPersonajeUnico(personajesSet, nuevo);

    if (resultado.exito) {
        document.getElementById('res_agregar').innerHTML = `Se añadió: <strong>${nuevo}</strong>`;
        actualizarVistaLista(); // Actualizamos la lista visual del Ej 1
    } else {
        document.getElementById('res_agregar').innerHTML = `<span class='error'>${nuevo} ya existe. No se añadió.</span>`;
    }
}

/**
 * EJERCICIO 6: Eliminar Personaje
 * Elimina el personaje si está presente e imprime mensaje.
 */
function eliminarPersonaje(set, nombre) {
    // .delete() devuelve true si borró, false si no existía 
    let eliminado = set.delete(nombre);

    if (eliminado) {
        return `El personaje <strong>${nombre}</strong> fue eliminado correctamente.`;
    } else {
        return `<span class='error'>El personaje ${nombre} no estaba en el conjunto.</span>`;
    }
}

function ejecutarEj6() {
    let nombre = document.getElementById('in_borrar').value;
    let mensaje = eliminarPersonaje(personajesSet, nombre);

    document.getElementById('res_borrar').innerHTML = mensaje;
    actualizarVistaLista(); // Actualizamos la lista visual
}

/**
 * EJERCICIO 7: Combinar dos Sets
 * Crea dos conjuntos (set1, set2) y combínalos sin duplicados.
 */
function combinarSets() {
    // Creamos dos sets locales de ejemplo
    let set1 = new Set(["Gandalf", "Bilbo", "Thorin"]);
    let set2 = new Set(["Gandalf", "Sauron", "Saruman"]); // Gandalf repetido

    // Para unir, usamos el operador spread (...) para convertir a array y volver a Set
    // Esto elimina duplicados automáticamente 
    let setUnido = new Set([...set1, ...set2]);

    return {
        s1: Array.from(set1).join(", "),
        s2: Array.from(set2).join(", "),
        res: Array.from(setUnido).join(", ")
    };
}

function ejecutarEj7() {
    let datos = combinarSets();

    document.getElementById('res_combinar').innerHTML = `
        <strong>Set A:</strong> [${datos.s1}] <br>
        <strong>Set B:</strong> [${datos.s2}] <br>
        <hr>
        <strong>Unión (Sin duplicados):</strong> <br>
        <span style='color: blue; font-weight:bold'>[${datos.res}]</span>
    `;
}