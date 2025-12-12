/* ==========================================================================
   LÓGICA PARA REPASO PARTE 1 (GENERAL: BOM, DOM, Fechas, Math/Strings)
   ========================================================================== */

/**
 * Función auxiliar para mostrar resultados en el HTML.
 * Busca el elemento por ID, inyecta el texto y lo hace visible.
 */
function mostrarResultado(id, texto) {
    const el = document.getElementById(id);
    if (el) {
        el.innerText = texto;
        el.style.display = 'block';
    }
}

// -------------------------------------------------------------------------
// EJERCICIO 1: BOM (Browser Object Model)
// -------------------------------------------------------------------------
function ejercicioBOM() {
    // Creamos un objeto con propiedades extraídas del entorno del navegador
    const info = {
        "URL Actual (href)": window.location.href,          // La dirección completa de la página
        "Hostname": window.location.hostname,               // El dominio (ej: localhost o midominio.com)
        "Navegador (userAgent)": window.navigator.userAgent, // Información técnica del navegador y SO
        "Ancho Ventana": window.innerWidth + "px",          // Ancho disponible del viewport (ventana)
        "Idioma": window.navigator.language                 // Idioma preferido configurado en el navegador
    };

    // JSON.stringify(objeto, replacer, espacio) convierte el objeto a texto formateado
    // El 'null' es el replacer (no usamos ninguno) y '2' son los espacios de indentación
    mostrarResultado('res-bom', JSON.stringify(info, null, 2));
}

// -------------------------------------------------------------------------
// EJERCICIO 2: DOM (Document Object Model)
// -------------------------------------------------------------------------
function ejercicioDOM() {
    const contenedor = document.getElementById('res-dom');

    // 1. Limpiamos el contenedor por si ya se ejecutó antes
    contenedor.innerHTML = "";
    contenedor.style.display = 'block';

    // 2. Creamos un elemento <h4> en memoria (aún no está en la página)
    const titulo = document.createElement("h4");
    titulo.textContent = "Lista creada dinámicamente con JS:";

    // 3. Añadimos el título al contenedor
    contenedor.appendChild(titulo);

    // 4. Creamos una lista desordenada <ul>
    const lista = document.createElement("ul");
    const tecnologias = ["HTML5", "CSS3", "JavaScript ES6"];

    // 5. Iteramos sobre el array de datos
    tecnologias.forEach(tech => {
        // Por cada tecnología, creamos un <li>
        const item = document.createElement("li");
        item.textContent = tech;

        // Modificamos el estilo CSS directamente desde JS
        item.style.color = "#2563eb";
        item.style.fontWeight = "bold";

        // Añadimos el <li> dentro de la <ul>
        lista.appendChild(item);
    });

    // 6. Finalmente, añadimos la lista completa al contenedor visible
    contenedor.appendChild(lista);
}

// -------------------------------------------------------------------------
// EJERCICIO 3: DATE (Fechas)
// -------------------------------------------------------------------------
function ejercicioFechas() {
    // new Date() sin argumentos crea una instancia con la fecha y hora actual
    const hoy = new Date();
    const anioActual = hoy.getFullYear();

    // Creamos una fecha específica: 31 de Diciembre del año actual.
    // ¡OJO! Los meses en JavaScript van de 0 a 11 (0=Enero, 11=Diciembre).
    const finAnio = new Date(anioActual, 11, 31);

    // Al restar fechas, JavaScript devuelve la diferencia en milisegundos
    const diffMs = finAnio - hoy;

    // Convertimos milisegundos a días:
    // 1000 ms = 1 seg -> 60 seg = 1 min -> 60 min = 1 hora -> 24 horas = 1 día
    const milisegundosPorDia = 1000 * 60 * 60 * 24;

    // Usamos Math.ceil() para redondear hacia arriba (si falta medio día, cuenta como 1 día)
    const diasFaltantes = Math.ceil(diffMs / milisegundosPorDia);

    // .toLocaleDateString() formatea la fecha según la configuración regional del usuario
    mostrarResultado('res-date', `Hoy es: ${hoy.toLocaleDateString()}\nFaltan ${diasFaltantes} días para el 31 de Diciembre.`);
}

// -------------------------------------------------------------------------
// EJERCICIO 4: MATH & STRING
// -------------------------------------------------------------------------
function ejercicioMathString() {
    // Obtenemos el valor del input (siempre viene como string)
    const input = document.getElementById('inputPrecio').value;

    // Convertimos el string a número decimal
    const precioBase = parseFloat(input);

    // Validamos: si el usuario no escribió nada o escribió texto, isNaN será true
    if (isNaN(precioBase)) {
        mostrarResultado('res-math', "Por favor, introduce un número válido.");
        return;
    }

    // Calculamos el IVA
    const conIVA = precioBase * 1.21;

    // .toFixed(2) redondea el número a 2 decimales y devuelve un STRING
    const precioFinal = conIVA.toFixed(2);

    // Usamos Template Literals (backticks `) para interpolar variables con ${}
    // y usar saltos de línea (\n)
    const mensaje = `Precio Base: ${precioBase}€\n+ IVA (21%)\nTotal: ${precioFinal}€`;

    mostrarResultado('res-math', mensaje);
}


/* ==========================================================================
   LÓGICA PARA REPASO PARTE 2 (PROFUNDO: Estructuras, Clases, Closures)
   ========================================================================== */

// -------------------------------------------------------------------------
// EJERCICIO 5: SET (Valores Únicos)
// -------------------------------------------------------------------------
function ejercicioSet() {
    const correosSucios = [
        "ana@test.com",
        "pepe@test.com",
        "ana@test.com", // Duplicado
        "juan@test.com",
        "pepe@test.com" // Duplicado
    ];

    // 1. new Set(array) crea una colección que elimina duplicados automáticamente.
    // 2. [...Set] (Spread syntax) convierte ese Set de vuelta a un Array normal.
    const unicos = [...new Set(correosSucios)];

    mostrarResultado('res-set', `Original (${correosSucios.length}): ${correosSucios.join(', ')}\n\nUnicos (${unicos.length}): ${unicos.join(', ')}`);
}

// -------------------------------------------------------------------------
// EJERCICIO 6: MAP (Diccionarios Clave-Valor)
// -------------------------------------------------------------------------
function ejercicioMap() {
    const texto = "hola mundo hola javascript mundo mundo";
    const palabras = texto.split(" "); // Convertimos string a array separando por espacios

    // Map es ideal para contar frecuencias o asociar datos porque mantiene el tipo de la clave
    const contador = new Map();

    palabras.forEach(palabra => {
        // .get() obtiene el valor actual (o undefined si no existe)
        // Usamos el operador OR (||) para iniciar en 0 si es undefined
        const cantidadActual = contador.get(palabra) || 0;

        // .set() guarda o actualiza el valor para esa clave
        contador.set(palabra, cantidadActual + 1);
    });

    // Array.from(map.entries()) convierte el Map en un array de arrays [[clave, valor], ...]
    // para poder mostrarlo fácilmente.
    const arrayPares = Array.from(contador.entries());

    mostrarResultado('res-map', `Texto: "${texto}"\n\nFrecuencia:\n${JSON.stringify(arrayPares)}`);
}

// -------------------------------------------------------------------------
// EJERCICIO 7: CLASES (POO ES6)
// -------------------------------------------------------------------------
function ejercicioClases() {
    // Definición de Clase Padre
    class Vehiculo {
        constructor(marca) {
            this.marca = marca;
        }

        // Método base
        info() {
            return `Vehículo marca ${this.marca}`;
        }
    }

    // Herencia: Coche hereda de Vehiculo
    class Coche extends Vehiculo {
        constructor(marca, modelo) {
            super(marca); // super() llama al constructor del Padre (Vehiculo) para inicializar 'marca'
            this.modelo = modelo; // Propiedad específica de Coche
        }

        // Polimorfismo: Sobreescritura del método info()
        info() {
            // super.info() reutiliza la lógica del método padre
            return `🚗 Coche: ${super.info()} - Modelo ${this.modelo}`;
        }
    }

    const miCoche = new Coche("Toyota", "Corolla");
    mostrarResultado('res-clases', miCoche.info());
}

// -------------------------------------------------------------------------
// EJERCICIO 8: CLOSURES (Clausuras y Datos Privados)
// -------------------------------------------------------------------------

// Usamos una IIFE (Immediately Invoked Function Expression) para crear un ámbito privado.
// Esta función se ejecuta una sola vez al cargar el script.
const miContadorPrivado = (function () {
    let cuenta = 0; // Esta variable es PRIVADA. Nadie puede acceder a ella directamente desde fuera.

    // Devolvemos una función que "recuerda" el entorno donde fue creada (el closure).
    return function () {
        cuenta++; // La función interna tiene acceso a 'cuenta' aunque la IIFE ya haya terminado.
        return cuenta;
    };
})();

function ejercicioClosure() {
    // Cada vez que llamamos a miContadorPrivado(), ejecuta la función interna devuelta antes,
    // incrementando la variable 'cuenta' que quedó atrapada en la memoria.
    const valorActual = miContadorPrivado();

    mostrarResultado('res-closure', `Contador (Variable Privada): ${valorActual}\n\nSigue pulsando el botón: la variable 'cuenta' no se reinicia porque vive en un Closure.`);
}

// -------------------------------------------------------------------------
// EJERCICIO 9: INMUTABILIDAD (Object.freeze)
// -------------------------------------------------------------------------
function ejercicioFreeze() {
    const configuracion = {
        admin: "Juan",
        rol: "super-admin"
    };

    // Object.freeze() impide añadir, borrar o modificar propiedades del objeto.
    Object.freeze(configuracion);

    // Intentamos modificar (JavaScript ignorará esto silenciosamente a menos que usemos "use strict")
    configuracion.rol = "usuario-basico";
    configuracion.nuevo = "Intruso";
    delete configuracion.admin;

    mostrarResultado('res-freeze', `Objeto Original: { admin: "Juan", rol: "super-admin" }\n\nIntentos realizados:\n- Cambiar rol a 'usuario-basico'\n- Añadir propiedad 'nuevo'\n- Borrar 'admin'\n\nResultado Final: ${JSON.stringify(configuracion, null, 2)}\n(¡Nada cambió porque el objeto está congelado!)`);
}