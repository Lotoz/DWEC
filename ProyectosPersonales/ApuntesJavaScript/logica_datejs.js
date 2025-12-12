/* ==========================================================================
   LÓGICA PARA EJERCICIOS DATE.JS
   Nota: Requiere que la librería date.js esté cargada previamente en el HTML.
   ========================================================================== */

/**
 * Función auxiliar para mostrar resultados.
 * Reutilizamos el estilo "advanced" (morado) para diferenciar librería externa.
 */
function mostrarResultado(id, texto) {
    const el = document.getElementById(id);
    if (el) {
        el.innerText = texto;
        el.style.display = 'block';
    }
}

/**
 * Función de seguridad para verificar que date.js está cargado.
 * El objeto nativo Date no tiene el método .today() por defecto.
 */
function checkLibrary() {
    if (!Date.today) {
        alert("ERROR: La librería date.js no se ha cargado correctamente.\nAsegúrate de que el archivo date.js real (no el de texto) está en la carpeta.");
        return false;
    }
    return true;
}

// -------------------------------------------------------------------------
// EJERCICIO 1: FLUENT API (Sintaxis fluida)
// -------------------------------------------------------------------------
function ejercicioFluent() {
    if (!checkLibrary()) return;

    // Date.today() crea una fecha a las 00:00:00 de hoy.
    // .at("HH:mm") establece la hora de forma legible.
    const reunion = Date.today().at("09:30");

    // .toString() en date.js acepta formatos personalizados tipo .NET/Java
    // d = día, M = mes, y = año, H = hora 24h, m = minutos
    // Referencia Date.js: toString("dd/MM/yyyy HH:mm")
    const formatoLargo = reunion.toString("dddd, d MMMM yyyy");
    const formatoCorto = reunion.toString("dd/MM/yyyy HH:mm");

    mostrarResultado('res-fluent',
        `Objeto creado: ${reunion}\n\n` +
        `Formato Texto: ${formatoLargo}\n` +
        `Formato Corto: ${formatoCorto}`
    );
}

// -------------------------------------------------------------------------
// EJERCICIO 2: PARSING DE LENGUAJE NATURAL
// -------------------------------------------------------------------------
function ejercicioNatural() {
    if (!checkLibrary()) return;

    const input = document.getElementById('inputNatural').value || "next friday";

    // Date.parse() en date.js es muy potente. Convierte texto inglés a fecha.
    // Si falla, devuelve null.
    const fechaInterpretada = Date.parse(input);

    if (fechaInterpretada) {
        mostrarResultado('res-natural',
            `Texto: "${input}"\n` +
            `Interpretación: ${fechaInterpretada.toString("dd/MM/yyyy HH:mm:ss")}\n` +
            `(Es un objeto Date válido)`
        );
    } else {
        mostrarResultado('res-natural',
            `No pude entender "${input}".\nPrueba con: "tomorrow", "next friday", "+5 days", "July 15th".`
        );
    }
}

// -------------------------------------------------------------------------
// EJERCICIO 3: ARITMÉTICA DE FECHAS (Encadenamiento)
// -------------------------------------------------------------------------
function ejercicioAritmetica() {
    if (!checkLibrary()) return;

    // Con JS nativo esto requeriría varios setMonth, setDate, manejar desbordes...
    // Con Date.js encadenamos llamadas:
    const fechaCalculada = Date.today()
        .add(1).month()      // Sumar 1 mes
        .add(5).days()       // Sumar 5 días
        .addHours(-2);       // Restar 2 horas (nota: addHours funciona con negativos)

    // Alternativa sintaxis date.js: .addMonths(1).addDays(5)

    mostrarResultado('res-aritmetica',
        `Base: Date.today()\n` +
        `Operación: .add(1).month().add(5).days().addHours(-2)\n\n` +
        `Resultado: ${fechaCalculada.toString("dd/MM/yyyy HH:mm")}`
    );
}

// -------------------------------------------------------------------------
// EJERCICIO 4: LÓGICA Y COMPARACIÓN
// -------------------------------------------------------------------------
function ejercicioLogica() {
    if (!checkLibrary()) return;

    const hoy = Date.today();

    // date.js añade métodos booleanos útiles al prototipo
    const esFinDeSemana = hoy.is().weekend() ? "SÍ" : "NO";
    const esViernes = hoy.is().friday() ? "SÍ" : "NO";

    // Rango de fechas para comparar
    const inicioAno = Date.parse("January 1st");
    const mitadAno = Date.parse("July 1st");

    // .between(inicio, fin)
    const estamosEnPrimeraMitad = hoy.between(inicioAno, mitadAno) ? "SÍ" : "NO";

    mostrarResultado('res-logica',
        `Análisis de hoy (${hoy.toString("dd/MM/yyyy")}):\n\n` +
        `- ¿Es fin de semana?: ${esFinDeSemana}\n` +
        `- ¿Es viernes?: ${esViernes}\n` +
        `- ¿Estamos en el primer semestre?: ${estamosEnPrimeraMitad}\n` +
        `  (Entre 01/01 y 01/07)`
    );
}